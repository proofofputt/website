const TechnologyPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Our Technology Stack</h1>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Comprehensive Technical Stack</h2>
        <p className="text-lg mb-4">Proof of Putt is built on a robust, modern, and scalable technology stack designed for performance, security, and maintainability.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-300">Computer Vision & AI</h3>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li><strong>YOLO-based Object Detection:</strong> Custom-trained neural network for golf ball tracking.</li>
              <li><strong>Real-time Video Processing:</strong> Frame-by-frame analysis with OpenCV integration.</li>
              <li><strong>ROI Calibration System:</strong> Interactive region definition for putting mat analysis.</li>
              <li><strong>Putt Classification Algorithm:</strong> Physics-based trajectory analysis for make/miss determination.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-300">Cross-Platform Development</h3>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li><strong>Desktop Application:</strong> Rust + Tauri framework for native performance and local processing.</li>
              <li><strong>Web Application:</strong> React frontend with responsive design and Vite bundler.</li>
              <li><strong>Mobile-Ready:</strong> Progressive Web App capabilities.</li>
              <li><strong>Unified Build System:</strong> Optimized asset management for all platforms.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-300">Backend Architecture</h3>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li><strong>RESTful API Design:</strong> Comprehensive Flask-based backend with 25+ endpoints.</li>
              <li><strong>Database Engineering:</strong> PostgreSQL with SQLAlchemy ORM and migration system.</li>
              <li><strong>Authentication & Security:</strong> bcrypt password hashing, session management.</li>
              <li><strong>Error Handling:</strong> Structured logging and comprehensive exception management.</li>
            </ul>
          </div>

          <div className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2 text-green-300">Cloud Infrastructure & DevOps</h3>
            <ul className="list-disc list-inside space-y-1 text-base">
              <li><strong>Production Deployment:</strong> Vercel serverless architecture for scalability.</li>
              <li><strong>CORS Configuration:</strong> Multi-origin support for seamless integration.</li>
              <li><strong>Environment Management:</strong> Secure configuration with environment variables.</li>
              <li><strong>Performance Optimization:</strong> Database connection pooling and query optimization.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Architectural Design Excellence</h2>
        <p className="text-lg mb-4">Our system is designed for modularity, scalability, and security, ensuring a robust and reliable platform.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Modular Component Architecture:</strong> Clear separation of concerns across Computer Vision, Data Processing, API Service, Frontend, Desktop Integration, and Deployment layers.</li>
          <li><strong>Scalable Database Design:</strong> Optimized for performance with detailed player, session, duel, and league data.</li>
          <li><strong>Security-First Development:</strong> Comprehensive input validation, SQL injection prevention, bcrypt hashing, and strict CORS policies.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">Desktop-Web Integration</h2>
        <p className="text-lg mb-4">A seamless bridge connects local computer vision processing with cloud-based analytics, maintaining privacy and performance.</p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li><strong>Local Session Management:</strong> Desktop app handles real-time session data capture and management.</li>
          <li><strong>Data Submission Pipeline:</strong> Secure HTTP API for submitting detailed session data to the backend.</li>
          <li><strong>Analytics Integration:</strong> Real-time synchronization with web analytics dashboard for comprehensive insights.</li>
          <li><strong>Verification System:</strong> Multi-level validation ensures data integrity and accuracy.</li>
        </ul>
      </section>
    </div>
  );
};

export default TechnologyPage;