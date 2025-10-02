const AchievementsPage = () => {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center" style={{color: 'var(--highlighter-yellow)'}}>
        Achievements
      </h1>


      {/* Career Statistics Aggregation */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📊 Career Stats
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
            <div>Total sessions</div>
            <div>Career makes</div>
            <div>Best streak</div>
            <div>Make percentage</div>
            <div>Fastest 21</div>
            <div>Most in 60s</div>
            <div>Practice time</div>
            <div>Win/loss record</div>
          </div>
        </div>
      </section>

      {/* Achievement Milestones System */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🎯 Milestones
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--highlighter-yellow)'}}>Skill-Based</h4>
              <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                Streak records • Perfect sessions • Accuracy tiers
              </p>
            </div>
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--highlighter-yellow)'}}>Dedication</h4>
              <p className="text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                Session count • Career makes • Competition wins
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Certificates Section */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🔗 Blockchain Certificates
        </h2>
        <div className="rounded-lg p-4 sm:p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-4 sm:mb-6 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
            Premium members receive permanent, verifiable achievement certificates via blockchain timestamping.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
            <div className="text-center p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">🔒</div>
              <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Secure</h4>
            </div>
            <div className="text-center p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Permanent</h4>
            </div>
            <div className="text-center p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">✅</div>
              <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Verifiable</h4>
            </div>
          </div>
        </div>
      </section>


      {/* Call to Action */}
      <section className="text-center py-8">
        <div className="rounded-lg p-6 sm:p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <a href="https://app.proofofputt.com/register"
               className="px-6 py-3 rounded-lg font-semibold transition-colors"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              Start Tracking
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

export default AchievementsPage;