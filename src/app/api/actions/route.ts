// This API route is used to  write the metrics to the database
import { db } from '@/db';
import { createUserActionAndPost } from '@/lib/orm';
import { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  if (!body.sessionId || !body.action || !body.date) {
    return new Response(JSON.stringify({ message: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const userAction = createUserActionAndPost(body.sessionId, body.action, body.date);
  await db.userActions.create({
    data: userAction
  })

  return new Response(JSON.stringify({ userAction }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
