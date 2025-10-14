/**
 * Proof of Putt Analytics Tracking Library
 * Lightweight client-side event tracking for business intelligence
 */

// Configuration
const ANALYTICS_API_URL = process.env.NEXT_PUBLIC_ANALYTICS_API_URL || 'https://app.proofofputt.com/api/analytics/track-event';
const SESSION_DURATION = 30 * 60 * 1000; // 30 minutes
const VISITOR_COOKIE_NAME = 'pop_visitor_id';
const VISITOR_COOKIE_DURATION = 365 * 24 * 60 * 60 * 1000; // 1 year

// Types
interface EventProperties {
  [key: string]: string | number | boolean | null;
}

interface TrackEventOptions {
  eventType: string;
  eventName: string;
  eventCategory?: string;
  eventProperties?: EventProperties;
  pageUrl?: string;
  pageTitle?: string;
}

// Session management
class AnalyticsSession {
  private sessionId: string;
  private visitorId: string;
  private lastActivityTime: number;
  private sessionStartTime: number;

  constructor() {
    this.sessionId = this.getOrCreateSessionId();
    this.visitorId = this.getOrCreateVisitorId();
    this.lastActivityTime = Date.now();
    this.sessionStartTime = Date.now();

    // Track page visibility changes
    if (typeof document !== 'undefined') {
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.refreshSession();
        }
      });
    }
  }

  private generateId(): string {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  private getOrCreateSessionId(): string {
    if (typeof window === 'undefined') return this.generateId();

    const stored = sessionStorage.getItem('pop_session_id');
    const storedTime = sessionStorage.getItem('pop_session_time');

    // Check if session is still valid
    if (stored && storedTime) {
      const lastTime = parseInt(storedTime, 10);
      if (Date.now() - lastTime < SESSION_DURATION) {
        return stored;
      }
    }

    // Create new session
    const newId = this.generateId();
    sessionStorage.setItem('pop_session_id', newId);
    sessionStorage.setItem('pop_session_time', Date.now().toString());
    return newId;
  }

  private getOrCreateVisitorId(): string {
    if (typeof window === 'undefined') return this.generateId();

    // Check for existing visitor ID in cookie
    const cookies = document.cookie.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === VISITOR_COOKIE_NAME) {
        return value;
      }
    }

    // Create new visitor ID
    const newId = this.generateId();
    const expires = new Date(Date.now() + VISITOR_COOKIE_DURATION).toUTCString();
    document.cookie = `${VISITOR_COOKIE_NAME}=${newId}; expires=${expires}; path=/; SameSite=Lax`;
    return newId;
  }

  private refreshSession(): void {
    const now = Date.now();
    if (now - this.lastActivityTime > SESSION_DURATION) {
      // Start new session
      this.sessionId = this.generateId();
      sessionStorage.setItem('pop_session_id', this.sessionId);
      this.sessionStartTime = now;
    }
    this.lastActivityTime = now;
    sessionStorage.setItem('pop_session_time', now.toString());
  }

  public getSessionId(): string {
    this.refreshSession();
    return this.sessionId;
  }

  public getVisitorId(): string {
    return this.visitorId;
  }

  public getTimeOnPage(): number {
    return Math.floor((Date.now() - this.sessionStartTime) / 1000); // in seconds
  }
}

// Analytics tracker
class Analytics {
  private session: AnalyticsSession;
  private pageLoadTime: number;
  private isInitialized: boolean = false;

  constructor() {
    if (typeof window === 'undefined') {
      // SSR - create minimal instance
      this.session = {} as AnalyticsSession;
      this.pageLoadTime = 0;
      return;
    }

    this.session = new AnalyticsSession();
    this.pageLoadTime = performance.now();
    this.isInitialized = true;

    // Auto-track page view on initialization
    this.trackPageView();

    // Track page unload
    window.addEventListener('beforeunload', () => {
      this.trackEvent({
        eventType: 'page_view',
        eventName: 'page_exit',
        eventCategory: 'navigation',
        eventProperties: {
          timeOnPage: this.session.getTimeOnPage()
        }
      });
    });
  }

  private getDeviceInfo() {
    if (typeof window === 'undefined') return {};

    return {
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      viewportSize: `${window.innerWidth}x${window.innerHeight}`,
      userAgent: navigator.userAgent
    };
  }

  /**
   * Track a custom event
   */
  public async trackEvent(options: TrackEventOptions): Promise<void> {
    if (!this.isInitialized) return;

    const {
      eventType,
      eventName,
      eventCategory,
      eventProperties,
      pageUrl = window.location.href,
      pageTitle = document.title
    } = options;

    const eventData = {
      eventType,
      eventName,
      eventCategory,
      eventProperties,
      pageUrl,
      pageTitle,
      pagePath: window.location.pathname,
      referrerUrl: document.referrer || null,
      sessionId: this.session.getSessionId(),
      visitorId: this.session.getVisitorId(),
      clientTimestamp: new Date().toISOString(),
      pageLoadTime: Math.floor(this.pageLoadTime),
      timeOnPage: this.session.getTimeOnPage(),
      ...this.getDeviceInfo()
    };

    // Send to analytics API (non-blocking)
    try {
      // Use sendBeacon for reliability (works even on page unload)
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(eventData)], { type: 'application/json' });
        navigator.sendBeacon(ANALYTICS_API_URL, blob);
      } else {
        // Fallback to fetch
        fetch(ANALYTICS_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(eventData),
          keepalive: true
        }).catch(err => {
          console.warn('Analytics tracking failed:', err);
        });
      }
    } catch (error) {
      console.warn('Analytics tracking failed:', error);
    }
  }

  /**
   * Track a page view
   */
  public trackPageView(customTitle?: string): void {
    this.trackEvent({
      eventType: 'page_view',
      eventName: 'page_loaded',
      eventCategory: 'navigation',
      pageTitle: customTitle || document.title
    });
  }

  /**
   * Track a button/link click
   */
  public trackClick(elementName: string, properties?: EventProperties): void {
    this.trackEvent({
      eventType: 'click',
      eventName: `click_${elementName}`,
      eventCategory: 'engagement',
      eventProperties: properties
    });
  }

  /**
   * Track a download
   */
  public trackDownload(fileName: string, fileType?: string): void {
    this.trackEvent({
      eventType: 'download',
      eventName: 'file_download',
      eventCategory: 'conversion',
      eventProperties: {
        fileName,
        fileType: fileType || fileName.split('.').pop() || 'unknown'
      }
    });
  }

  /**
   * Track a conversion (signup, purchase, etc.)
   */
  public trackConversion(conversionType: string, value?: number, properties?: EventProperties): void {
    this.trackEvent({
      eventType: 'conversion',
      eventName: conversionType,
      eventCategory: 'conversion',
      eventProperties: {
        ...properties,
        value
      }
    });
  }

  /**
   * Track a form submission
   */
  public trackFormSubmit(formName: string, properties?: EventProperties): void {
    this.trackEvent({
      eventType: 'form_submit',
      eventName: `submit_${formName}`,
      eventCategory: 'engagement',
      eventProperties: properties
    });
  }
}

// Export singleton instance
const analytics = typeof window !== 'undefined' ? new Analytics() : null;

export default analytics;

// Convenience functions
export const trackClick = (elementName: string, properties?: EventProperties) => {
  analytics?.trackClick(elementName, properties);
};

export const trackDownload = (fileName: string, fileType?: string) => {
  analytics?.trackDownload(fileName, fileType);
};

export const trackConversion = (conversionType: string, value?: number, properties?: EventProperties) => {
  analytics?.trackConversion(conversionType, value, properties);
};

export const trackPageView = (customTitle?: string) => {
  analytics?.trackPageView(customTitle);
};

export const trackFormSubmit = (formName: string, properties?: EventProperties) => {
  analytics?.trackFormSubmit(formName, properties);
};
