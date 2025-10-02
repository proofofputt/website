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
        <div className="rounded-lg p-4 sm:p-6 mb-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-4 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>
            Advanced AI tracks every putt with precision. Get instant feedback on makes, misses, streaks, and performance patterns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Real-Time Metrics</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Makes & misses with classification</li>
                <li>• Consecutive streak tracking</li>
                <li>• Putts per minute (PPM)</li>
                <li>• Makes per minute (MPM)</li>
                <li>• Session duration & timing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Performance Analysis</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Fastest 21 consecutive makes</li>
                <li>• Most makes in 60 seconds</li>
                <li>• Make percentage by category</li>
                <li>• Historical trend analysis</li>
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
              Unlimited sessions to build consistency and track personal records
            </p>
          </div>

          <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Duels</h3>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
              Head-to-head remote competition with friends anywhere in the world
            </p>
          </div>

          <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-lg sm:text-xl font-bold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Leagues</h3>
            <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
              Multi-round tournaments with structured progression and rankings
            </p>
          </div>
        </div>
      </section>


      {/* Leaderboards */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🏅 Leaderboards & Rankings
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-4 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>
            Compare your performance across multiple contexts and see where you rank among the best.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
            <div>
              <strong>Global Rankings:</strong> Compete worldwide across all metrics
            </div>
            <div>
              <strong>Friends:</strong> Track performance among your connections
            </div>
            <div>
              <strong>League Standings:</strong> Tournament-specific rankings
            </div>
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