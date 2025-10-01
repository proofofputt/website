import Image from 'next/image';

const HomePage = () => {
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
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-4" style={{color: 'var(--text-white)'}}>Where practice meets competition</p>
      
      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">
        <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed" style={{color: 'var(--text-white)'}}>
          Every putt matters. Every stroke counts. Transform your putting practice into verifiable performance
          that opens doors to remote competition, detailed analytics, and skill validation.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <a href="/features"
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors text-center"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Feature Overview
          </a>
          <a href="/app-showcase"
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 text-center"
             style={{backgroundColor: 'var(--masters-green-medium)', borderColor: 'var(--masters-green-light)', color: 'var(--text-white)'}}>
            App Showcase
          </a>
          <a href="/download"
             className="px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-colors border-2 text-center"
             style={{backgroundColor: 'var(--masters-green-medium)', borderColor: 'var(--masters-green-light)', color: 'var(--text-white)'}}>
            Download Desktop
          </a>
        </div>

        <p className="text-xs sm:text-sm px-4" style={{color: 'var(--text-white)'}}>
          Start with our web app, upgrade to desktop for full computer vision tracking
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>For Every Player</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">🏌️</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Practice Anywhere</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Home, office, or course - your putting green becomes a training ground</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">⚡</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Instant Feedback</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Know your make percentage, streaks, and improvement areas immediately</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">🎯</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Measurable Progress</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Track consistency, speed, and accuracy over time</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>Beyond Practice</h2>
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">🏆</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Remote Duels</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Challenge friends anywhere with trusted, verifiable results</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">🌐</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Global Leagues</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Join tournaments and competitions with players worldwide</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-lg sm:text-xl flex-shrink-0">💡</span>
              <div>
                <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>AI Insights</h4>
                <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>Get personalized coaching recommendations based on your data</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-lg max-w-4xl mx-auto" style={{backgroundColor: 'var(--masters-green-medium)'}}>
        <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4" style={{color: 'var(--highlighter-yellow)'}}>Ready to elevate your game?</h2>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>
          Join players who&apos;ve discovered that consistent practice with measurable results
          is the key to putting excellence.
        </p>
        <div className="flex justify-center">
          <a href="https://app.proofofputt.com/login"
             className="px-6 py-3 rounded-lg font-semibold transition-colors text-center text-base sm:text-lg"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Start Training
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// Force deployment refresh - 2025-09-30
