export default function handler(req, res) {
  // Set CORS headers for all requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { method } = req;
  
  if (method === 'POST') {
    return res.status(200).json({ success: true, duel: { id: Date.now() } });
  }

  if (method === 'GET') {
    return res.status(200).json({
      duels: [
        { id: 1, challenger_name: "Pop", opponent_name: "Tiger", status: "active" }
      ]
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}