const DownloadPage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-3xl sm:text-4xl font-extrabold mb-8 sm:mb-12" style={{color: 'var(--highlighter-yellow)'}}>Download</h1>

      <div className="max-w-2xl mx-auto mb-12">

        <div className="p-6 sm:p-8 rounded-lg" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h3 className="text-xl sm:text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>🚧 Desktop Beta Coming Soon</h3>
          <p className="mb-6 text-sm sm:text-base" style={{color: 'var(--text-white-secondary)'}}>
            Signed macOS releases with computer vision tracking launching soon.
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