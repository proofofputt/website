import Image from 'next/image';

const AppShowcasePage = () => {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold mb-4 text-center" style={{color: 'var(--highlighter-yellow)'}}>
        Application Showcase
      </h1>
      <p className="text-xl text-center mb-12" style={{color: 'var(--text-white)'}}>
        Explore the web application and desktop features that power competitive putting
      </p>

      {/* Web Application Section */}
      <section className="mb-20">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{color: 'var(--highlighter-yellow)'}}>
          🌐 Web Application Features
        </h2>

        {/* Dashboard & Statistics */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--text-white)'}}>
            📊 Dashboard & Career Statistics
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                  Session History & Classifications
                </h4>
                <p className="mb-4" style={{color: 'var(--text-white)'}}>
                  Comprehensive session tracking with detailed categorization of makes and misses.
                  View your complete putting history with precise performance metrics and timing data.
                </p>
                <Image
                  src="/screenshots/Webapp.Dashboard.Session.History.Category.Classifications.png"
                  alt="Dashboard Session History with Category Classifications"
                  width={800}
                  height={600}
                  className="rounded-lg border-2"
                  style={{borderColor: 'var(--masters-green-light)'}}
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                  Performance Overview & Consecutive Makes
                </h4>
                <p className="mb-4" style={{color: 'var(--text-white)'}}>
                  Track your putting consistency with streak analysis, consecutive make records,
                  and performance trends over time.
                </p>
                <Image
                  src="/screenshots/Webapp.Stats.Performance.Overview.Consecutive.png"
                  alt="Performance Overview and Consecutive Makes Statistics"
                  width={800}
                  height={600}
                  className="rounded-lg border-2"
                  style={{borderColor: 'var(--masters-green-light)'}}
                />
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Makes & Misses Analysis
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Detailed breakdown of your putting accuracy with visual analytics.
                Understand your strengths and identify areas for improvement.
              </p>
              <Image
                src="/screenshots/Webapp.Stats.Makes.Misses.png"
                alt="Makes and Misses Statistical Analysis"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Duels & Leagues Career Stats
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Comprehensive competitive history showing your performance in duels and league competitions.
                Track wins, losses, and tournament achievements.
              </p>
              <Image
                src="/screenshots/Webapp.Stats.Duels.Leagues.png"
                alt="Duels and Leagues Career Statistics"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>
          </div>
        </div>

        {/* Duel System */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--text-white)'}}>
            ⚔️ Duel Competition System
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Active & Completed Duels
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Real-time duel management showing active competitions, completed results,
                scoring summaries, and rematch options. Challenge players worldwide with instant updates.
              </p>
              <Image
                src="/screenshots/Webapp.Duels.Active.Completed.Scoring.Results.Rematch.png"
                alt="Active and Completed Duels with Scoring and Rematch Options"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                  Duel Invitations
                </h4>
                <p className="mb-4" style={{color: 'var(--text-white)'}}>
                  Receive and manage duel invitations from other players.
                  Accept challenges and start competitive sessions instantly.
                </p>
                <Image
                  src="/screenshots/Webapp.Duel.Invitations.Received.Create.Duel.Button.png"
                  alt="Duel Invitations Received with Create Duel Button"
                  width={800}
                  height={400}
                  className="rounded-lg border-2"
                  style={{borderColor: 'var(--masters-green-light)'}}
                />
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                  Duel Creation Modal
                </h4>
                <p className="mb-4" style={{color: 'var(--text-white)'}}>
                  Create custom duels with flexible settings. Choose competition modes,
                  time limits, and invite players by username or email.
                </p>
                <Image
                  src="/screenshots/Webapp.Duel.Creation.Modal.png"
                  alt="Duel Creation Modal with Settings"
                  width={800}
                  height={400}
                  className="rounded-lg border-2"
                  style={{borderColor: 'var(--masters-green-light)'}}
                />
              </div>
            </div>
          </div>
        </div>

        {/* League System */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-6" style={{color: 'var(--text-white)'}}>
            🏆 League Tournament System
          </h3>
          <p className="text-lg mb-8" style={{color: 'var(--text-white)'}}>
            Create and participate in multi-round tournaments with comprehensive settings and automated progression.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* First row of league screenshots */}
            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                General Settings & Privacy
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Configure league basics including name, description, privacy settings,
                and in-real-life (IRL) tournament options.
              </p>
              <Image
                src="/screenshots/Webapp.League.Creation.Modal.General.Privacy.IRL.png"
                alt="League Creation Modal - General Privacy and IRL Settings"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Permissions & Start Date
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Set league permissions for player invites, late joiners, and catch-up submissions.
                Schedule tournament start times and registration periods.
              </p>
              <Image
                src="/screenshots/Webapp.League.Creation.Modal.permissions.start.date.png"
                alt="League Creation Modal - Permissions and Start Date"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-8">
            {/* Second row of league screenshots */}
            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Competition Mode & Schedule
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Choose between Time Limit and Shoot Out modes. Configure round structure,
                duration, and automated progression schedules.
              </p>
              <Image
                src="/screenshots/Webapp.League.Creation.Modal.CompetitionMode.Rounds.Schedule.png"
                alt="League Creation Modal - Competition Mode, Rounds, and Schedule"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Shoot Out Mode Settings
              </h4>
              <p className="mb-4" style={{color: 'var(--text-white)'}}>
                Configure Shoot Out tournaments with specific putt count targets.
                Choose from preset options or create custom challenges.
              </p>
              <Image
                src="/screenshots/Webapp.League.Creation.Modal.shootout.numberofputts.png"
                alt="League Creation Modal - Shoot Out Number of Putts Settings"
                width={800}
                height={600}
                className="rounded-lg border-2"
                style={{borderColor: 'var(--masters-green-light)'}}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Application Section */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{color: 'var(--highlighter-yellow)'}}>
          🖥️ Desktop Application
        </h2>
        <p className="text-xl text-center mb-8" style={{color: 'var(--text-white)'}}>
          Advanced computer vision tracking with real-time performance monitoring
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
              Header Configuration & Active Competitions
            </h4>
            <p className="mb-4" style={{color: 'var(--text-white)'}}>
              Desktop application interface showing header configuration options and active competition tracking.
              Monitor ongoing duels and leagues directly from the tracking interface.
            </p>
            <Image
              src="/screenshots/Desktop.App.1.Header.Config.ActiveCompetitions.png"
              alt="Desktop App Header Configuration and Active Competitions"
              width={800}
              height={600}
              className="rounded-lg border-2"
              style={{borderColor: 'var(--masters-green-light)'}}
            />
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
              Live Competition Tracking
            </h4>
            <p className="mb-4" style={{color: 'var(--text-white)'}}>
              Real-time computer vision tracking during competitive sessions.
              Monitor active competitions including Shoot Out leagues with metronome pacing and live scoring.
            </p>
            <Image
              src="/screenshots/Desktop.App.2.Active.Competions.Shootout.League.Metronome.png"
              alt="Desktop App Active Competitions with Shoot Out League and Metronome"
              width={800}
              height={600}
              className="rounded-lg border-2"
              style={{borderColor: 'var(--masters-green-light)'}}
            />
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h4 className="text-xl font-semibold mb-4" style={{color: 'var(--highlighter-yellow)'}}>
            Desktop Application Features
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold mb-2" style={{color: 'var(--text-white)'}}>Computer Vision Tracking</h5>
              <ul className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Real-time putt detection and classification</li>
                <li>• Automatic make/miss scoring</li>
                <li>• Precise timing measurements</li>
                <li>• Visual feedback and confirmation</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-2" style={{color: 'var(--text-white)'}}>Competition Integration</h5>
              <ul className="space-y-1 text-sm" style={{color: 'var(--text-white)'}}>
                <li>• Live duel and league participation</li>
                <li>• Automatic score submission</li>
                <li>• Real-time opponent updates</li>
                <li>• Synchronized web app integration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System Integration */}
      <section className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center" style={{color: 'var(--highlighter-yellow)'}}>
          🔗 Integrated Experience
        </h2>
        <div className="rounded-lg p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Web Platform
              </h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Comprehensive competition management, statistics analysis, and social features
                accessible from any device with internet connection.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🖥️</div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Desktop Tracking
              </h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Advanced computer vision technology for precise putt detection,
                real-time scoring, and automated competition participation.
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-xl font-semibold mb-3" style={{color: 'var(--highlighter-yellow)'}}>
                Seamless Sync
              </h4>
              <p className="text-sm" style={{color: 'var(--text-white)'}}>
                Instant synchronization between desktop tracking and web platform
                ensures all performance data and competition results are always current.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-8">
        <div className="rounded-lg p-8" style={{backgroundColor: 'var(--masters-green-medium)'}}>
          <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--highlighter-yellow)'}}>
            Experience the Complete System
          </h2>
          <p className="mb-6" style={{color: 'var(--text-white)'}}>
            Start with the web application for competition management and analytics,
            then upgrade to desktop tracking for the full competitive experience.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://app.proofofputt.com/login"
               className="px-6 py-3 rounded-lg font-semibold transition-colors"
               style={{backgroundColor: 'var(--highlighter-yellow)', color: 'var(--masters-green-dark)'}}>
              Launch Web App
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

export default AppShowcasePage;