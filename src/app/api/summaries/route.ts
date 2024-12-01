// This API route is used to fetch a summary by its ID.
import { fetchSummaryById, fetchSummaryPageData } from '@/lib/dao';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const searchParams = request.nextUrl.searchParams
  const id = searchParams.get('id')


  if (typeof id === 'string') {
    try {
      // validate it is a valid mongo id
      if (!/^[0-9a-fA-F]{24}$/.test(id)) {
        return NextResponse.json({ message: 'Invalid ID' }, {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
      const summary = await fetchSummaryById(id);
      if (summary) {
        return NextResponse.json({ summary }, {
          headers: { 'Content-Type': 'application/json' },
        });
      } else {
        return NextResponse.json({ message: 'Summary not found' }, {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        });
      }

    } catch (error) {
      console.log('Error fetching summary by ID:', error)
      return NextResponse.json({ message: 'Internal Server Error' }, {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    
  }

  if (id === null) {
    const summaries = await fetchSummaryPageData();
    if (summaries) {
      return NextResponse.json({ summaries }, {
        headers: { 'Content-Type': 'application/json' },
      });
    } else {
      return NextResponse.json({ message: 'Summaries not found' }, {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }

  return  NextResponse.json({ message: 'Not Found' }, {
    status: 404,
    headers: { 'Content-Type': 'application/json' },
  });
}
