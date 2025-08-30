const DevelopersPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">For Developers</h1>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Welcome, Developers!</h2>
        <p className="text-lg mb-4">Proof of Putt offers a unique opportunity to contribute to a cutting-edge sports technology platform. We prioritize secure, structured, and collaborative development.</p>
        <p className="text-lg">This section provides an overview of our development environment, security protocols, and how you can get involved.</p>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Developer Onboarding Checklist</h2>
        <p className="text-lg mb-4">A streamlined process to get you up and running quickly and securely.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Legal Documentation:</strong> Sign NDA, Developer Service Agreement, IP Assignment, and Security Protocol Acknowledgment.</li>
          <li><strong>Technical Prerequisites:</strong> Verify Rust (1.70+), Node.js (18+), Tauri CLI, and Git configuration.</li>
          <li><strong>Communication Setup:</strong> Access to Slack/Discord, project board, and emergency contacts.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Security & Access Strategy</h2>
        <p className="text-lg mb-4">We employ a robust security strategy to protect our proprietary algorithms and sensitive data while fostering collaboration.</p>
        <h3 className="text-2xl font-bold mb-2 text-green-300">Information Classification</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><span className="text-green-400">🟢 PUBLIC:</span> UI components, documentation, build scripts.</li>
          <li><span className="text-yellow-400">🟡 INTERNAL:</span> API integration, non-CV backend code.</li>
          <li><span className="text-red-400">🔴 CONFIDENTIAL:</span> Computer vision algorithms, YOLO models.</li>
          <li><span className="text-gray-400">⚫ RESTRICTED:</span> Training data, production secrets.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2 text-green-300">Proprietary Code Protection</h3>
        <p className="text-lg mb-4">Our desktop application, containing proprietary computer vision algorithms, is strategically separated and NOT included in public GitHub repositories. This protects our 18+ month development lead.</p>
        <p className="text-lg">Sensitive components like custom YOLO models, calibration logic, and Rust CV integration remain private. Public repositories contain only the web backend (business logic) and React frontend (user interface).</p>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Technical Setup & Development Guidelines</h2>
        <p className="text-lg mb-4">Get started with our secure development environment and adhere to our coding standards.</p>
        <h3 className="text-2xl font-bold mb-2 text-green-300">Repository Access</h3>
        <p className="text-lg mb-2">Access is granted to a private GitHub repository (`proof-of-putt-desktop-dev`) with role-based permissions. Mock interfaces are provided for restricted components to enable development without full access to proprietary code.</p>
        <h3 className="text-2xl font-bold mb-2 text-green-300">Code Standards</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><strong>Rust:</strong> Follow standard `rustfmt` formatting.</li>
          <li><strong>React:</strong> Use functional components with hooks.</li>
          <li><strong>TypeScript:</strong> Strict mode enabled, full type coverage.</li>
          <li><strong>Testing:</strong> Unit tests required for new features.</li>
          <li><strong>Documentation:</strong> Inline comments for complex logic.</li>
        </ul>
        <h3 className="text-2xl font-bold mb-2 text-green-300">Git Workflow</h3>
        <p className="text-lg">Use feature branches, commit with descriptive messages, and submit Pull Requests for review. All changes require owner approval before merging.</p>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Join Our Team!</h2>
        <p className="text-lg">We are looking for passionate developers to help us build the future of competitive putting. If you are interested in AI, sports tech, and cross-platform development, explore our opportunities and contribute to a project that bridges the physical and digital worlds.</p>
      </section>
    </div>
  );
};

export default DevelopersPage;