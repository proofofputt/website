// import { notFound } from 'next/navigation';

interface ReferralPageProps {
  params: Promise<{
    referral: string;
  }>;
}

const ReferralPage = async ({ params }: ReferralPageProps) => {
  const { referral } = await params;
  
  // Decode referral parameter
  const decodedReferral = decodeURIComponent(referral);
  
  return (
    <div className="text-center py-16">
      <div className="mb-8">
        <span className="bg-green-600 px-4 py-2 rounded-full text-sm font-semibold">
          Referred by {decodedReferral}
        </span>
      </div>
      
      <h1 className="text-6xl font-extrabold mb-6 text-green-400">Proof of Putt</h1>
      <p className="text-2xl mb-8 text-white">Join the putting revolution</p>
      
      <div className="max-w-4xl mx-auto mb-12">
        <p className="text-lg text-white mb-8">
          {decodedReferral} recommends Proof of Putt for AI-powered putting training. 
          Track your progress, compete with friends, and elevate your game with precision analytics.
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href={`https://app.proofofputt.com?ref=${referral}`}
             className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Get Started Free
          </a>
          <a href="/download" 
             className="bg-gray-700 hover:bg-gray-600 px-8 py-4 rounded-lg text-xl font-semibold transition-colors">
            Download Desktop
          </a>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-green-400">Special Invitation</h3>
        <p className="text-white">
          You&apos;ve been personally invited to experience next-generation putting training. 
          Join thousands of players improving their game with AI-powered precision tracking.
        </p>
      </div>
    </div>
  );
};

export default ReferralPage;