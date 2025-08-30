export async function GET(request, { params }) {
  const { playerId } = params;

  return Response.json({
    player_id: parseInt(playerId),
    name: 'Pop',
    email: 'pop@proofofputt.com',
    membership_tier: 'premium',
    early_access_code: 'early',
    stats: {
      total_makes: 0,
      total_misses: 0,
      best_streak: 0,
      make_percentage: 0,
      total_putts: 0,
      avg_distance: 0,
      sessions_played: 0
    },
    sessions: [],
    calibration_data: {
      is_calibrated: false,
      last_calibration: null
    }
  });
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}