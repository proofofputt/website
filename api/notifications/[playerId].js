export default function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { playerId } = req.query;

  return res.status(200).json({
    notifications: [
      { id: 1, type: "duel_challenge", title: "New Challenge", read: false }
    ],
    unread_count: 1
  });
}