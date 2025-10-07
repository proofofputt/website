'use client';

import Image from 'next/image';
import { trackClick } from '@/lib/analytics';

const HomePage = () => {
  const handleFeatureClick = () => {
    trackClick('view_features', { source: 'home_page' });
  };

  const handleShowcaseClick = () => {
    trackClick('view_app_showcase', { source: 'home_page' });
  };

  const handleDownloadClick = () => {
    trackClick('goto_download', { source: 'home_page' });
  };

  const handleLaunchAppClick = () => {
    trackClick('launch_app_cta', { source: 'home_page_bottom' });
  };

  return (
    <div className="text-center py-8 sm:py-16 px-4">
      <div className="mb-6 flex justify-center">
        <Image
          src="/POP.Proof_Of_Putt.Log.576.png"
          alt="Proof of Putt Logo"
          width={300}
          height={300}
          priority
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[300px] lg:h-[300px]"
        />
      </div>
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-4" style={{color: 'var(--text-white)'}}>Transform practice into verifiable performance</p>

      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
        <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{color: 'var(--text-white)'}}>
          Track every putt with computer vision. Compete remotely with friends. Build a verified career record.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a href="/features"
             onClick={handleFeatureClick}
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors text-center"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Feature Overview
          </a>
          <a href="/app-showcase"
             onClick={handleShowcaseClick}
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 text-center"
             style={{backgroundColor: 'var(--masters-green-medium)', borderColor: 'var(--masters-green-light)', color: 'var(--text-white)'}}>
            App Showcase
          </a>
          <a href="/download"
             onClick={handleDownloadClick}
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 text-center"
             style={{backgroundColor: 'var(--masters-green-medium)', borderColor: 'var(--masters-green-light)', color: 'var(--text-white)'}}>
            Download Desktop
          </a>
        </div>

        <p className="text-xs sm:text-sm px-4" style={{color: 'var(--text-white)'}}>
          Start with our web app, upgrade to desktop for full computer vision tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🏌️</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-1" style={{color: 'var(--text-white)'}}>Practice Anywhere</h4>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Turn any putting green into a tracked training ground</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">📊</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-1" style={{color: 'var(--text-white)'}}>Computer Vision Tracking</h4>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Real-time analytics on every putt, streak, and stat</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🏆</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-1" style={{color: 'var(--text-white)'}}>Remote Competition</h4>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Challenge anyone, anywhere with trusted results</p>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🔗</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base mb-1" style={{color: 'var(--text-white)'}}>Blockchain Verification</h4>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Permanent, cryptographically verified achievements</p>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-lg max-w-4xl mx-auto" style={{backgroundColor: 'var(--masters-green-medium)'}}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>Start tracking today</h2>
        <div className="flex justify-center">
          <a href="https://app.proofofputt.com/login"
             onClick={handleLaunchAppClick}
             className="px-6 py-3 rounded-lg font-semibold transition-colors text-center text-base sm:text-lg"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Launch Stats Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// Force deployment refresh - 2025-09-30
