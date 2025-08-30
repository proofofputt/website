const HomePage = () => {
  return (
    <div className="text-center py-16">
      <h1 className="text-6xl font-extrabold mb-6" style={{color: 'var(--highlighter-yellow)'}}>Proof of Putt</h1>
      <p className="text-2xl mb-12" style={{color: 'var(--text-white-secondary)'}}>Where practice meets competition</p>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg mb-8" style={{color: 'var(--text-white-secondary)'}}>
          Every putt matters. Every stroke counts. Transform your putting practice into verifiable performance 
          that opens doors to remote competition, detailed analytics, and skill validation.
        </p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://app.proofofputt.com" 
             className="px-8 py-4 rounded-lg text-xl font-semibold transition-colors"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Launch App
          </a>
          <a href="/download" 
             className="px-8 py-4 rounded-lg text-xl font-semibold transition-colors border-2"
             style={{backgroundColor: 'var(--masters-green-medium)', borderColor: 'var(--masters-green-light)', color: 'var(--text-white)'}}>
            Download Desktop
          </a>
        </div>
        
        <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>
          Start with our web app, upgrade to desktop for full computer vision tracking
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>For Every Player</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">🏌️</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>Practice Anywhere</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Home, office, or course - your putting green becomes a training ground</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">⚡</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>Instant Feedback</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Know your make percentage, streaks, and improvement areas immediately</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">🎯</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>Measurable Progress</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Track consistency, speed, and accuracy over time</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-left">
          <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>Beyond Practice</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl">🏆</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>Remote Duels</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Challenge friends anywhere with trusted, verifiable results</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">🌐</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>Global Leagues</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Join tournaments and competitions with players worldwide</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-xl">💡</span>
              <div>
                <h4 className="font-semibold" style={{color: 'var(--text-white)'}}>AI Insights</h4>
                <p className="text-sm" style={{color: 'var(--text-white-secondary)'}}>Get personalized coaching recommendations based on your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 rounded-lg max-w-4xl mx-auto" style={{backgroundColor: 'var(--masters-green-medium)'}}>
        <h2 className="text-2xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>Ready to elevate your game?</h2>
        <p className="mb-6" style={{color: 'var(--text-white-secondary)'}}>
          Join players who&apos;ve discovered that consistent practice with measurable results 
          is the key to putting excellence.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://app.proofofputt.com" 
             className="px-6 py-3 rounded-lg font-semibold transition-colors"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Start Training
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
