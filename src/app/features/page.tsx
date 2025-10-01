const FeaturesPage = () => {
  return (
    <div className="py-8 sm:py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4 text-center" style={{color: 'var(--highlighter-yellow)'}}>
        Feature Overview
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center mb-8 sm:mb-12" style={{color: 'var(--text-white)'}}>
        Comprehensive performance tracking and competitive play
      </p>

      {/* Data Tracking Overview */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📊 Advanced Data Tracking
        </h2>
        <div className="rounded-lg p-4 sm:p-6 mb-6 sm:mb-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-4 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>
            Proof of Putt uses cutting-edge computer vision technology to track every putt with precision.
            Our system captures comprehensive data points that transform your practice into measurable progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Real-Time Metrics</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Makes and misses with classification</li>
                <li>• Consecutive streak tracking</li>
                <li>• Putts per minute (PPM)</li>
                <li>• Makes per minute (MPM)</li>
                <li>• Session duration tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-sm sm:text-base" style={{color: 'var(--text-white)'}}>Advanced Analytics</h4>
              <ul className="space-y-1 text-xs sm:text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Fastest 21 consecutive makes</li>
                <li>• Most makes in 60 seconds</li>
                <li>• Make percentage by category</li>
                <li>• Miss classification (return, catch, timeout)</li>
                <li>• Performance trend analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Session History */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📝 Comprehensive Session History
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Every practice session is automatically recorded and stored with detailed performance metrics. 
            Access your complete putting history to track improvement over time.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">📅</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Session Timeline</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Chronological history of all sessions with date, time, and duration
              </p>
            </div>
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">📈</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Performance Metrics</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Detailed stats for each session including makes, streaks, and speeds
              </p>
            </div>
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-2xl mb-2">🎯</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Category Breakdown</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Makes and misses classified by type for targeted improvement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Session Categories */}
      <section className="mb-8 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🎮 Session Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-xl font-bold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Practice Sessions</h3>
            <p className="mb-4 text-sm" style={{color: 'var(--text-white)'}}>
              Unlimited practice mode for skill development and consistency training.
            </p>
            <ul className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
              <li>✓ No time limits or pressure</li>
              <li>✓ Focus on technique and rhythm</li>
              <li>✓ Track personal records</li>
              <li>✓ Identify weaknesses</li>
            </ul>
          </div>

          <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-xl font-bold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Duels</h3>
            <p className="mb-4 text-sm" style={{color: 'var(--text-white)'}}>
              Head-to-head competitions with friends or rivals, anywhere in the world.
            </p>
            <ul className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
              <li>⚔️ Challenge players directly</li>
              <li>⚔️ Timed fair competition</li>
              <li>⚔️ Real-time status updates</li>
              <li>⚔️ Win/loss record tracking</li>
            </ul>
          </div>

          <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
            <h3 className="text-xl font-bold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Leagues</h3>
            <p className="mb-4 text-sm" style={{color: 'var(--text-white)'}}>
              Multi-round tournaments with structured competition and rankings.
            </p>
            <ul className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
              <li>🏆 Multiple round windows</li>
              <li>🏆 Automated progression</li>
              <li>🏆 League-wide leaderboards</li>
              <li>🏆 Championship scoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Stats */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🌟 Career Statistics
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Your complete putting career at a glance. Track lifetime achievements and monitor long-term progress 
            with comprehensive statistical analysis.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-3" style={{color: 'var(--text-white)'}}>All-Time Records</h4>
              <ul className="space-y-2 text-sm" style={{color: 'var(--text-white)'}}>
                <li>📊 Best single-session performance</li>
                <li>📊 Longest consecutive streak</li>
                <li>📊 Fastest completion times</li>
                <li>📊 Highest makes per minute</li>
                <li>📊 Total career statistics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3" style={{color: 'var(--text-white)'}}>Competition History</h4>
              <ul className="space-y-2 text-sm" style={{color: 'var(--text-white)'}}>
                <li>🎯 Duel win/loss records</li>
                <li>🎯 League participation and rankings</li>
                <li>🎯 Head-to-head statistics</li>
                <li>🎯 Competition performance trends</li>
                <li>🎯 Achievement milestones</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leaderboards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🏅 Dynamic Leaderboards
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Multiple leaderboard contexts let you compete and compare performance across different groups 
            and metrics. See where you stand among the best.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Global Rankings</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Compete with players worldwide across all performance metrics
              </p>
            </div>
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Friends Leaderboard</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Track performance among your connected friends and rivals
              </p>
            </div>
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>League Rankings</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Tournament-specific standings with round-by-round progression
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
            <h4 className="font-semibold mb-3" style={{color: 'var(--text-white)'}}>Ranking Metrics</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm" style={{color: 'var(--text-white)'}}>
              <div>• Total Makes</div>
              <div>• Best Streak</div>
              <div>• Make Percentage</div>
              <div>• Fastest 21</div>
              <div>• Most in 60s</div>
              <div>• Putts Per Minute</div>
              <div>• Makes Per Minute</div>
              <div>• Session Count</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <div className="rounded-lg p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>
            Ready to Track Your Progress?
          </h2>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Join the community of players using data-driven practice to improve their putting game.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://app.proofofputt.com/login" 
               className="px-6 py-3 rounded-lg font-semibold transition-colors"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              Start Now
            </a>
            <a href="/download" 
               className="px-6 py-3 rounded-lg font-semibold transition-colors border-2"
               style={{borderColor: 'var(--highlighter-yellow)', color: 'var(--text-white)'}}>
              Download Desktop App
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;