export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    // Mock authentication for testing
    if (email === 'pop@proofofputt.com' && password === 'passwordpop123') {
      return Response.json({
        success: true,
        player_id: 1,
        name: 'Pop',
        email: email,
        token: 'mock-jwt-token'
      });
    } else {
      return Response.json({
        error: 'Invalid credentials'
      }, { status: 401 });
    }
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
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}