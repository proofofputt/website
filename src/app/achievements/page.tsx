const AchievementsPage = () => {
  return (
    <div className="py-16 max-w-6xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-center" style={{color: 'var(--highlighter-yellow)'}}>
        Achievements & Statistics
      </h1>
      <p className="text-xl text-center mb-12" style={{color: 'var(--text-white)'}}>
        Comprehensive tracking and recognition of your putting progress
      </p>

      {/* Session Statistics Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📊 Session Statistics
        </h2>
        <div className="rounded-lg p-6 mb-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Every putting session is automatically analyzed using computer vision technology to capture detailed performance metrics.
            These statistics form the foundation of your achievement system and career progress tracking.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic Metrics */}
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Core Performance</h4>
              <ul className="space-y-2 text-sm" style={{color: 'var(--text-white)'}}>
                <li><strong>Total Putts:</strong> Every attempt tracked</li>
                <li><strong>Makes:</strong> Successful putts counted</li>
                <li><strong>Misses:</strong> Attempts that didn't score</li>
                <li><strong>Make Percentage:</strong> Accuracy calculation</li>
                <li><strong>Session Duration:</strong> Time from first to last putt</li>
              </ul>
            </div>

            {/* Advanced Metrics */}
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Advanced Analysis</h4>
              <ul className="space-y-2 text-sm" style={{color: 'var(--text-white)'}}>
                <li><strong>Best Streak:</strong> Longest consecutive makes</li>
                <li><strong>Putts Per Minute (PPM):</strong> Practice intensity</li>
                <li><strong>Makes Per Minute (MPM):</strong> Scoring rate</li>
                <li><strong>Most in 60s:</strong> Peak performance window</li>
                <li><strong>Fastest 21:</strong> Speed of 21 consecutive makes</li>
              </ul>
            </div>

            {/* Classification System */}
            <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <h4 className="font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>Smart Classification</h4>
              <ul className="space-y-2 text-sm" style={{color: 'var(--text-white)'}}>
                <li><strong>Make Types:</strong> Clean shots vs. bounces</li>
                <li><strong>Miss Categories:</strong> Return, catch, timeout</li>
                <li><strong>Session Type:</strong> Practice, duel, league</li>
                <li><strong>Difficulty Context:</strong> Time pressure analysis</li>
                <li><strong>Performance Trends:</strong> Improvement tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Career Statistics Aggregation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🌟 Career Statistics Dashboard
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Your session data is automatically aggregated into comprehensive career statistics that appear on your player profile.
            These stats provide a complete picture of your putting journey and improvement over time.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lifetime Totals */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-white)'}}>Lifetime Totals</h3>
              <div className="space-y-4">
                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Total Sessions</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>1,247</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Practice, duels, and leagues combined</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Career Makes</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>28,901</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>All successful putts across all sessions</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Career Accuracy</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>73.2%</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Overall make percentage across all attempts</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Practice Time</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>127.4 hrs</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Total time spent in putting sessions</div>
                </div>
              </div>
            </div>

            {/* Personal Records */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-white)'}}>Personal Records</h3>
              <div className="space-y-4">
                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Best Streak</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>87</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Longest consecutive makes in a session</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Fastest 21</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>34.7s</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Record time for 21 consecutive makes</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Best PPM</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>84.3</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Peak putts per minute in a session</div>
                </div>

                <div className="p-3 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex justify-between items-center">
                    <span style={{color: 'var(--text-white)'}}>Most in 60s</span>
                    <span className="font-mono font-bold" style={{color: 'var(--highlighter-yellow)'}}>47</span>
                  </div>
                  <div className="text-xs mt-1" style={{color: 'var(--text-white)'}}>Most makes in any 60-second window</div>
                </div>
              </div>
            </div>
          </div>

          {/* Session Category Breakdown */}
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-white)'}}>Performance by Category</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded text-center" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                <div className="text-2xl mb-2">🏸</div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Practice Sessions</h4>
                <div className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
                  <div>Sessions: <span className="font-mono">1,089</span></div>
                  <div>Accuracy: <span className="font-mono">74.8%</span></div>
                  <div>Best Streak: <span className="font-mono">87</span></div>
                </div>
              </div>

              <div className="p-4 rounded text-center" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                <div className="text-2xl mb-2">⚔️</div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Duels</h4>
                <div className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
                  <div>Sessions: <span className="font-mono">124</span></div>
                  <div>Win Rate: <span className="font-mono">68.5%</span></div>
                  <div>Pressure Accuracy: <span className="font-mono">71.2%</span></div>
                </div>
              </div>

              <div className="p-4 rounded text-center" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                <div className="text-2xl mb-2">🏆</div>
                <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>League Rounds</h4>
                <div className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
                  <div>Sessions: <span className="font-mono">34</span></div>
                  <div>Championships: <span className="font-mono">3</span></div>
                  <div>Tournament Accuracy: <span className="font-mono">69.9%</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement Milestones System */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🎯 Achievement Milestones
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            As you reach significant milestones in your putting journey, the system automatically recognizes and celebrates
            your achievements. These milestones track your progress across different aspects of skill and dedication.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Skill-Based Achievements */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-white)'}}>Skill Milestones</h3>
              <div className="space-y-4">
                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🎯</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Consecutive Excellence</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Awarded for consecutive putt streaks that demonstrate exceptional consistency and focus.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Levels:</strong> 21, 42, 50, 77, 100+ consecutive makes
                  </div>
                </div>

                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">💯</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Perfect Precision</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Recognize flawless sessions where every putt finds its target with 100% accuracy.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Requirements:</strong> 10+ putts, 100% make rate
                  </div>
                </div>

                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🎪</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Accuracy Mastery</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Career accuracy milestones that show long-term improvement and consistency.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Thresholds:</strong> 70%, 75%, 80%, 85%+ career accuracy
                  </div>
                </div>
              </div>
            </div>

            {/* Dedication-Based Achievements */}
            <div>
              <h3 className="text-xl font-bold mb-4" style={{color: 'var(--text-white)'}}>Dedication Milestones</h3>
              <div className="space-y-4">
                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">📈</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Session Dedication</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Reward consistent practice across all session types: practice, duels, and leagues.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Milestones:</strong> 10, 21, 50, 100, 210, 420, 1000, 2100 sessions
                  </div>
                </div>

                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">🏆</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Career Achievement</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Lifetime putting milestones that celebrate your total contribution to the sport.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Levels:</strong> 1K, 10K, 50K, 100K+ career makes
                  </div>
                </div>

                <div className="p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
                  <div className="flex items-center mb-2">
                    <span className="text-2xl mr-3">👑</span>
                    <h4 className="font-semibold" style={{color: 'var(--highlighter-yellow)'}}>Victory Champion</h4>
                  </div>
                  <p className="text-sm mb-2" style={{color: 'var(--text-white)'}}>
                    Competitive achievements from duels and league championships.
                  </p>
                  <div className="text-xs" style={{color: 'var(--text-white)'}}>
                    <strong>Types:</strong> First duel win, league championships, tournament victories
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Certificates Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          🔗 Permanent Achievement Certificates
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            For premium members, major achievements are immortalized as permanent, verifiable certificates using
            blockchain timestamping technology. These certificates provide lasting proof of your accomplishments
            that will exist as long as the internet itself.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-3xl mb-3">🔒</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Unforgeable</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Protected by the same cryptographic security that guards billions in digital value
              </p>
            </div>
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-3xl mb-3">⏰</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Permanent</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Your certificates will exist as long as the global internet infrastructure exists
              </p>
            </div>
            <div className="text-center p-4 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
              <div className="text-3xl mb-3">✅</div>
              <h4 className="font-semibold mb-2" style={{color: 'var(--highlighter-yellow)'}}>Verifiable</h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Anyone can independently confirm your achievements using public verification tools
              </p>
            </div>
          </div>

          <div className="p-6 rounded" style={{backgroundColor: 'var(--masters-green-dark)'}}>
            <h4 className="font-semibold mb-4" style={{color: 'var(--text-white)'}}>How Certificate Generation Works</h4>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <p style={{color: 'var(--text-white)'}}>Achievement detected by computer vision system</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🔐</div>
                <p style={{color: 'var(--text-white)'}}>Data converted to unique cryptographic fingerprint</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌳</div>
                <p style={{color: 'var(--text-white)'}}>Bundled with others using Merkle tree aggregation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl mb-2">🌐</div>
                <p style={{color: 'var(--text-white)'}}>Permanently timestamped on global blockchain</p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded" style={{backgroundColor: 'var(--masters-green-medium)'}}>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                <strong>Cost-Effective Innovation:</strong> Through mathematical bundling techniques, we can generate
                thousands of certificates for fractions of a penny each, making permanent verification affordable
                while maintaining the highest security standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6" style={{color: 'var(--highlighter-yellow)'}}>
          📈 Progress Tracking & Analytics
        </h2>
        <div className="rounded-lg p-6" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Your achievement system goes beyond simple counting. Advanced analytics track your improvement trends,
            identify strengths and weaknesses, and provide insights for continued development.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4" style={{color: 'var(--text-white)'}}>Trend Analysis</h3>
              <ul className="space-y-3 text-sm" style={{color: 'var(--text-white)'}}>
                <li className="flex items-start">
                  <span className="text-lg mr-2">📊</span>
                  <div>
                    <strong>Rolling Averages:</strong> Track your accuracy, speed, and consistency over
                    different time periods to identify improvement patterns.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">🎯</span>
                  <div>
                    <strong>Performance Contexts:</strong> Compare your performance across practice,
                    competitive duels, and timed league rounds.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">📅</span>
                  <div>
                    <strong>Session Quality:</strong> Analyze how factors like session length,
                    time of day, and practice frequency affect your performance.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4" style={{color: 'var(--text-white)'}}>Goal Setting & Rewards</h3>
              <ul className="space-y-3 text-sm" style={{color: 'var(--text-white)'}}>
                <li className="flex items-start">
                  <span className="text-lg mr-2">🎯</span>
                  <div>
                    <strong>Next Milestones:</strong> Always know what achievement you're working
                    toward next and how close you are to reaching it.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">🏆</span>
                  <div>
                    <strong>Rarity Tiers:</strong> Achievements are classified as rare, epic, or
                    legendary based on difficulty and exclusivity.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-lg mr-2">👥</span>
                  <div>
                    <strong>Social Sharing:</strong> Share your achievements and certificates with
                    friends, on social media, or embed them in your personal website.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <div className="rounded-lg p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>
            Start Your Achievement Journey
          </h2>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Every putt counts toward your next milestone. Join the comprehensive tracking system that turns
            practice into measurable progress and celebrates your dedication to the sport.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://app.proofofputt.com/register"
               className="px-6 py-3 rounded-lg font-semibold transition-colors"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              Begin Tracking
            </a>
            <a href="/download"
               className="px-6 py-3 rounded-lg font-semibold transition-colors border-2"
               style={{borderColor: 'var(--highlighter-yellow)', color: 'var(--text-white)'}}>
              Download Desktop App
            </a>
          </div>
          <p className="mt-4 text-xs" style={{color: 'var(--text-white)'}}>
            🎯 Comprehensive statistics • 🏆 Achievement milestones • 🔗 Blockchain certificates for premium members
          </p>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;