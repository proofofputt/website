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
          <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>Beta Release Available</h3>
          <p className="mb-6" style={{color: 'var(--text-white-secondary)'}}>
            Experience the future of putting analysis with our desktop application featuring
            real-time computer vision tracking and comprehensive session analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/proofofputt/desktop/releases/latest/download/Proof-of-Putt_0.1.0_aarch64.dmg"
               className="px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              📥 Download for macOS (Apple Silicon)
            </a>
            <a href="https://github.com/proofofputt/desktop/releases/latest/download/Proof-of-Putt_0.1.0_x64.dmg"
               className="px-6 py-3 rounded-lg font-semibold transition-colors inline-block border-2"
               style={{borderColor: 'var(--highlighter-yellow)', color: 'var(--text-white)'}}>
              📥 Download for macOS (Intel)
            </a>
          </div>

          <p className="mt-4 text-sm" style={{color: 'var(--text-white-secondary)'}}>
            Windows and Linux versions coming soon.
            <a href="https://app.proofofputt.com/login" className="underline" style={{color: 'var(--highlighter-yellow)'}}>
              Try the web app
            </a> while you wait.
          </p>
        </div>
      </div>

      {/* Installation Instructions */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg" style={{backgroundColor: 'var(--masters-green-dark)'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>📋 Installation Guide</h3>
            <ol className="space-y-2 text-sm" style={{color: 'var(--text-white-secondary)'}}>
              <li>1. Download the DMG file for your Mac type</li>
              <li>2. Double-click to mount the disk image</li>
              <li>3. Drag "Proof of Putt" to Applications folder</li>
              <li>4. Launch from Applications (may need to allow in Security settings)</li>
              <li>5. Sign in with your Proof of Putt account</li>
              <li>6. Calibrate your camera for putting area</li>
            </ol>
          </div>

          <div className="p-6 rounded-lg" style={{backgroundColor: 'var(--masters-green-dark)'}}>
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>⚙️ System Requirements</h3>
            <ul className="space-y-2 text-sm" style={{color: 'var(--text-white-secondary)'}}>
              <li>• macOS 10.14 or later</li>
              <li>• Camera or webcam for CV tracking</li>
              <li>• 4GB RAM minimum, 8GB recommended</li>
              <li>• 500MB available storage</li>
              <li>• Internet connection for sync</li>
              <li>• Python 3.8+ (auto-installed if needed)</li>
            </ul>
          </div>
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