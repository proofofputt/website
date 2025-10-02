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
      <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 px-4" style={{color: 'var(--text-white)'}}>Transform practice into verifiable performance</p>

      <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-4">

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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto mb-12 sm:mb-16 px-4">
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🏌️</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Practice Anywhere</h4>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">⚡</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Instant Analytics</h4>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🏆</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Remote Duels</h4>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🌐</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Global Leagues</h4>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">📊</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Career Tracking</h4>
          </div>
        </div>
        <div className="flex items-start space-x-3 text-left">
          <span className="text-2xl flex-shrink-0">🔗</span>
          <div>
            <h4 className="font-semibold text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Verified Achievements</h4>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 rounded-lg max-w-4xl mx-auto" style={{backgroundColor: 'var(--masters-green-medium)'}}>
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>Start tracking today</h2>
        <div className="flex justify-center">
          <a href="https://app.proofofputt.com/login"
             className="px-6 py-3 rounded-lg font-semibold transition-colors text-center text-base sm:text-lg"
             style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
            Launch App
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

// Force deployment refresh - 2025-09-30
