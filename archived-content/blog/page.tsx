const BlogPage = () => {
  const blogPosts = [
    {
      title: "Major Technical Lifts Complete: Ready for Market",
      date: "August 29, 2025",
      description: "Assessment confirming all major engineering challenges are complete, positioning Proof of Putt for immediate market entry and revenue generation.",
      link: "#"
    },
    {
      title: "2026 Financial Innovation Roadmap",
      date: "August 29, 2025",
      description: "Strategic business development timeline outlining decentralized escrow, platform fee optimization, and US regulatory compliance.",
      link: "#"
    },
    {
      title: "Desktop-Backend Integration Testing Summary",
      date: "August 29, 2025",
      description: "Comprehensive validation of seamless data flow from the Tauri desktop application to the Python Flask backend and web analytics system.",
      link: "#"
    },
    {
      title: "Desktop App Secret Protection Strategy",
      date: "August 29, 2025",
      description: "Guide on protecting proprietary computer vision algorithms and secret sauce while enabling web deployment.",
      link: "#"
    },
    {
      title: "Proof of Putt: Technical Engineering Portfolio Brief",
      date: "August 29, 2025",
      description: "Showcasing comprehensive development capabilities through AI-powered golf training application.",
      link: "#"
    },
    {
      title: "Neon Database Branching: Technical Partnership Briefing",
      date: "August 29, 2025",
      description: "Analysis of an optional database branching feature for isolated database copies for each pull request.",
      link: "#"
    },
    {
      title: "Single Repository Deployment Strategy",
      date: "August 29, 2025",
      description: "Recommendation for a single GitHub repository approach to minimize code changes and preserve existing dependencies.",
      link: "#"
    },
    {
      title: "Morning TODO List - August 30, 2025",
      date: "August 30, 2025",
      description: "Feature gap analysis and live testing preparation, focusing on completing backend API implementation.",
      link: "#"
    },
    {
      title: "Final Code Review & Checklist - Ready for Live Testing",
      date: "August 29, 2025",
      description: "Comprehensive review of all code components and resolution of critical desktop build issues, preparing for live testing.",
      link: "#"
    },
    {
      title: "Desktop Developer Onboarding Template",
      date: "August 29, 2025",
      description: "Documentation template for secure remote developer integration process.",
      link: "#"
    },
    {
      title: "Private Developer Access Strategy",
      date: "August 29, 2025",
      description: "Protocol for secure remote developer access and environment setup.",
      link: "#"
    },
    {
      title: "Desktop-Web Integration Architecture Guide",
      date: "August 28, 2025",
      description: "Guide connecting the desktop application's local computer vision processing with the web application's analytics and verification systems.",
      link: "#"
    },
    {
      title: "Prototype vs Current Implementation Analysis",
      date: "August 28, 2025",
      description: "Analysis identifying feature gaps and missing functionality by comparing the prototype to the current implementation.",
      link: "#"
    },
    {
      title: "Proof of Putt: \"Ball Drop Beats\" Marketing Campaign",
      date: "August 28, 2025",
      description: "Zero-budget viral launch strategy turning the sound of successful putts into musical compositions.",
      link: "#"
    },
  ];

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Latest News & Updates</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-2xl font-semibold mb-2 text-green-300">{post.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{post.date}</p>
            <p className="text-lg flex-grow">{post.description}</p>
            <a href={post.link} className="mt-4 text-green-400 hover:underline self-end">Read More &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;