const DownloadPage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12" style={{color: 'var(--highlighter-yellow)'}}>Download</h1>

      <div className="max-w-2xl mx-auto mb-12">

        <div className="p-6 sm:p-8 rounded-lg mb-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>🖥️ Desktop App (Beta)</h3>
          <p className="mb-4 text-sm sm:text-base" style={{color: 'var(--text-white-secondary)'}}>
            Download the Proof of Putt desktop app with computer vision tracking for macOS (Apple Silicon).
          </p>
          <p className="mb-6 text-xs sm:text-sm" style={{color: 'var(--text-white-secondary)'}}>
            ✅ Officially notarized by Apple for secure installation.
          </p>
          <a href="/ProofOfPutt-0.1.1-aarch64.dmg"
             download
             className="px-6 py-3 rounded-lg font-semibold transition-colors inline-block mb-4"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Download for macOS (Apple Silicon)
          </a>
        </div>

        <div className="p-6 sm:p-8 rounded-lg" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>🌐 Web App</h3>
          <p className="mb-6 text-sm sm:text-base" style={{color: 'var(--text-white-secondary)'}}>
            Access Proof of Putt from any device with our web application.
          </p>
          <a href="https://app.proofofputt.com/login"
             className="px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Launch Web App
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-3xl sm:text-4xl mb-3">📹</div>
          <h3 className="text-base sm:text-lg font-bold" style={{color: 'var(--text-white)'}}>Computer Vision</h3>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl mb-3">📊</div>
          <h3 className="text-base sm:text-lg font-bold" style={{color: 'var(--text-white)'}}>Real-time Analytics</h3>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-4xl mb-3">🔄</div>
          <h3 className="text-base sm:text-lg font-bold" style={{color: 'var(--text-white)'}}>Cloud Sync</h3>
        </div>
      </div>
    </div>
  );
};

export default DownloadPage;