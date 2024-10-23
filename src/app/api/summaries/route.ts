// This API route is used to fetch a summary by its ID.
import { fetchSummaryById, fetchSummaryPageData } from '@/lib/dao';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')


  if (typeof id === 'string') {
    try {
      // validate it is a valid mongo id
      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return new Response(JSON.stringify({ message: 'Invalid ID' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      const summary = await fetchSummaryById(id);
      if (summary) {
        return new Response(JSON.stringify({ summary }), {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return new Response(JSON.stringify({ message: 'Summary not found' }), {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }
    } catch (error) {
      console.error('Error fetching summary by ID:', error)
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  if (id === null) {
    const summaries = await fetchSummaryPageData();
    if (summaries) {
      return new Response(JSON.stringify({ summaries }), {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return new Response(JSON.stringify({ message: 'Summaries not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
}
