const FeaturesPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Key Features</h1>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">AI-Powered Putting Analysis</h2>
        <p className="text-lg mb-4">Leveraging cutting-edge computer vision and AI, Proof of Putt provides unparalleled insights into your putting stroke and performance.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>YOLO-based Ball Detection:</strong> Custom-trained neural network for precise golf ball tracking in real-time.</li>
          <li><strong>Real-time Video Processing:</strong> Frame-by-frame analysis with OpenCV integration for immediate feedback.</li>
          <li><strong>ROI Calibration System:</strong> Interactive region definition for accurate putting mat analysis, adapting to any setup.</li>
          <li><strong>Putt Classification Algorithm:</strong> Advanced physics-based trajectory analysis for accurate make/miss determination.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Cross-Platform Experience</h2>
        <p className="text-lg mb-4">Seamlessly transition between dedicated practice and engaging social competition.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Desktop Application:</strong> Rust + Tauri framework for native performance, ideal for focused practice sessions.</li>
          <li><strong>Web Application:</strong> Responsive React frontend for social features, analytics, and community engagement.</li>
          <li><strong>Mobile-Ready:</strong> Progressive Web App capabilities ensure access on the go.</li>
          <li><strong>Unified Data:</strong> All your putting data syncs across platforms, providing a holistic view of your progress.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Engaging Competition & Community</h2>
        <p className="text-lg mb-4">Transform your practice into thrilling competition with verifiable performance data.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Verifiable Performance Data:</strong> AI-generated, tamper-proof statistics enable trusted remote duels and leagues.</li>
          <li><strong>Asynchronous Duels:</strong> Challenge friends or rivals across time zones, competing on your own schedule.</li>
          <li><strong>Leagues & Leaderboards:</strong> Join structured competitions, climb the ranks, and see how you stack up globally.</li>
          <li><strong>Freemium Model:</strong> Start with basic session tracking and upgrade for full career stats, unlimited competitions, and advanced analytics.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Advanced Analytics & Insights</h2>
        <p className="text-lg mb-4">Dive deep into your putting performance with comprehensive data visualization.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Detailed Session History:</strong> Review every putt, every session, and track your progress over time.</li>
          <li><strong>Key Performance Indicators:</strong> Analyze make percentages, streaks, putts per minute, and more.</li>
          <li><strong>Personalized Feedback:</strong> Gain insights to identify strengths and weaknesses, guiding your practice.</li>
          <li><strong>AI Coach Integration:</strong> Leverage intelligent feedback to refine your technique and improve faster.</li>
        </ul>
      </section>
    </div>
  );
};

export default FeaturesPage;