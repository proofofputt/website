const FeaturesPage = () => {
  return (
    <div className="py-8 sm:py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center" style={{color: 'var(--highlighter-yellow)'}}>
        Features
      </h1>

      {/* Data Tracking Overview */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📊 Computer Vision Tracking
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Core Metrics</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Makes & misses</li>
                <li>• Streaks & sequences</li>
                <li>• Speed (PPM/MPM)</li>
                <li>• Make percentage</li>
                <li>• Session duration</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Advanced Stats</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Fastest 21 makes</li>
                <li>• Most in 60 seconds</li>
                <li>• Classification types</li>
                <li>• Performance trends</li>
              </ul>
            </div>
          </div>
        </div>
      </section>


      {/* Session Categories */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🎮 Play Modes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Practice</h3>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
              Unlimited skill development
            </p>
          </div>

          <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Duels</h3>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
              1v1 remote competition
            </p>
          </div>

          <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Leagues</h3>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
              Multi-round tournaments
            </p>
          </div>
        </div>
      </section>


      {/* Leaderboards */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🏅 Leaderboards
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
            <div>• Global rankings</div>
            <div>• Friends leaderboard</div>
            <div>• League standings</div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <div className="rounded-lg p-6 sm:p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="https://app.proofofputt.com/login"
               className="px-6 py-3 rounded-lg font-semibold transition-colors"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              Launch App
            </a>
            <a href="/download"
               className="px-6 py-3 rounded-lg font-semibold transition-colors border-2"
               style={{borderColor: 'var(--highlighter-yellow)', color: 'var(--text-white)'}}>
              Download Desktop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;