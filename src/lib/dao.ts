// This runs on the server side and is used to fetch data from the database
import { db } from '@/db';

export async function fetchSummaries() {
    try {
        const summaries = await db.summary.findMany();
        return summaries;
    } catch (error) {
        console.error('Error fetching summaries:', error);
        throw new Error('Failed to fetch summaries');
    }
}

export async function fetchSummaryPageData() {
    try {
        const summaries = await db.summary.findMany(
            {
                select: {
                    id: true,
                    date: true,
                    act_name: true,
                    document_id: true,
                },
            }
        );
        return summaries;
    } catch (error) {
        console.error('Error fetching summaries:', error);
        throw new Error('Failed to fetch summaries');
    }
}


export async function fetchSummaryById(id: string) {
    try {
        const summary = await db.summary.findFirst({
            where: {
                id
            },
        });
        return summary;
    } catch (error) {
        console.error('Error fetching summaries in db:', error);
        throw new Error('Failed to fetch summaries');
    }
}