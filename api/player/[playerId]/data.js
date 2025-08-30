export default function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Log the request for debugging
    console.log('Player data request:', req.url, req.method);
    
    // For development - accept all requests without auth
    return res.status(200).json({
      player_id: 1,
      name: 'Pop',
      email: 'pop@proofofputt.com',
      membership_tier: 'premium',
      early_access_code: 'early',
      stats: {
        total_makes: 0,
        total_misses: 0,
        best_streak: 0,
        current_streak: 0,
        total_sessions: 0,
        avg_session_length: 0
      },
      sessions: [],
      calibration_data: {
        is_calibrated: false,
        last_calibration: null
      }
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}