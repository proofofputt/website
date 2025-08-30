const RoadmapPage = () => {
  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-400">Roadmap & Future Vision</h1>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">2026 Financial Innovation Roadmap</h2>
        <p className="text-lg mb-4">Our strategic positioning for 2026 focuses on leveraging proven traction for ambitious financial innovation, attracting investor capital, and navigating regulatory landscapes.</p>
        
        <h3 className="text-2xl font-bold mb-2 text-green-300">Decentralized Escrow Architecture</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><strong>Multi-signature Bitcoin wallets:</strong> Platform never holds funds directly, reducing regulatory burden.</li>
          <li><strong>Smart contract automation:</strong> Automatic payouts upon competition completion via cryptographically verified data.</li>
          <li><strong>Dispute resolution capability:</strong> 2-of-3 arbitration without fund custody, creating a sustainable revenue model.</li>
          <li><strong>Regulatory advantage:</strong> Avoids money transmitter licensing, enabling faster expansion.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-2 text-green-300">Platform Fee Optimization (3-5%)</h3>
        <p className="text-lg mb-2">Lower than competitors (8-15% for DraftKings/FanDuel), allowing us to capture market share through superior value while maintaining healthy margins.</p>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><strong>Compliance-justified structure:</strong> Fees allocated to legal compliance, technical infrastructure, dispute resolution, and platform operations.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-2 text-green-300">US Regulatory Compliance Strategy</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><strong>Skill-based classification:</strong> Emphasizing verifiable skill improvement to avoid gambling regulations.</li>
          <li><strong>State-by-State registration:</strong> Strategic expansion prioritizing high-volume states.</li>
          <li><strong>Banking & AML compliance:</strong> Implementation of Anti-Money Laundering and Know Your Customer procedures.</li>
        </ul>
      </section>

      <section className="my-8 p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4">12-Month Business Forecast & Implementation</h2>
        <p className="text-lg mb-4">Our phased approach ensures sustainable growth, from foundational launch to ecosystem expansion and full ArkadeOS integration.</p>

        <h3 className="text-2xl font-bold mb-2 text-green-300">Revenue Streams</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li>Premium Subscriptions ($2/month)</li>
          <li>Wagering Platform Fees (5% of transaction volume)</li>
          <li>Fundraising Fees (2% of charity donations)</li>
          <li>Tournament Entry Fees (10% of prize pools)</li>
        </ul>

        <h3 className="text-2xl font-bold mb-2 text-green-300">Implementation Roadmap Highlights</h3>
        <ul className="list-disc list-inside space-y-1 text-base mb-4">
          <li><strong>Phase 1 (Months 1-3): Foundation Launch:</strong> Target 1,000 active users, 100 premium subscribers. Focus on golf-first messaging and local partnerships.</li>
          <li><strong>Phase 2 (Months 4-6): Competition Launch:</strong> Target 5,000 users, 750 premium. Introduce duels with small entry fees and weekly leagues with prize pools.</li>
          <li><strong>Phase 3 (Months 7-12): Ecosystem Expansion:</strong> Target 15,000 users, 2,250 premium. Full ArkadeOS integration for verifiable fundraising, corporate events, and instructor monetization.</li>
        </ul>

        <h3 className="text-2xl font-bold mb-2 text-green-300">Long-Term Vision</h3>
        <p className="text-lg">Establish Proof of Putt as the premier golf improvement app with Bitcoin-powered competition, then expand to other sports, creating a broader &quot;proof-of-performance&quot; ecosystem. Demonstrate that Bitcoin adoption happens naturally when the use cases are compelling.</p>
      </section>
    </div>
  );
};

export default RoadmapPage;