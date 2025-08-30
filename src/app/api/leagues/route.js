export async function GET() {
  return Response.json({
    leagues: [
      { id: 1, name: "Masters Champions", member_count: 24, is_member: true }
    ]
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    return Response.json({ 
      success: true, 
      league: { id: Date.now(), ...body } 
    });
  } catch (error) {
    return Response.json({
      error: 'Invalid request'
    }, { status: 400 });
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}