const DownloadPage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-4xl font-extrabold mb-6" style={{color: 'var(--highlighter-yellow)'}}>Download Desktop App</h1>
      <p className="text-xl mb-8" style={{color: 'var(--text-white-secondary)'}}>
        Get the full Proof of Putt experience with computer vision tracking
      </p>
      
      <div className="max-w-2xl mx-auto mb-12">
        <p className="mb-8" style={{color: 'var(--text-white-secondary)'}}>
          The desktop app provides advanced computer vision tracking for precise putt analysis, 
          automatic session recording, and seamless integration with the web platform.
        </p>
        
        <div className="p-8 rounded-lg" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>Coming Soon</h3>
          <p className="mb-6" style={{color: 'var(--text-white-secondary)'}}>
            We&apos;re putting the finishing touches on the desktop application. 
            Sign up for the web app to be notified when it&apos;s ready!
          </p>
          <a href="https://app.proofofputt.com/login" 
             className="px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Join the Web App
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-4xl mb-4">📹</div>
          <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-white)'}}>Computer Vision</h3>
          <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>
            Real-time ball tracking and putt analysis using advanced AI
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">📊</div>
          <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-white)'}}>Detailed Analytics</h3>
          <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>
            Comprehensive performance metrics and improvement tracking
          </p>
        </div>
        <div className="text-center">
          <div className="text-4xl mb-4">🔄</div>
          <h3 className="text-xl font-bold mb-2" style={{color: 'var(--text-white)'}}>Auto Sync</h3>
          <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>
            Sessions automatically sync with your web dashboard
          </p>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;