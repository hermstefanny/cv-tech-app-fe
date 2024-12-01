//UNIT TESTs
import {NextRequest, NextResponse} from 'next/server'
import {GET} from '@/app/api/summaries/route'; 
import { fetchSummaryById, fetchSummaryPageData } from '@/lib/dao'; 
import { mock } from 'node:test';

jest.mock('@/lib/dao');

describe('GET /api/summaries', () =>{
// TEST for invalid MongoID GET action  
it('return 400 for invalid ID', async() => {
    const request = new NextRequest('http://localhost/api/summaries?id=invalid-id');
    const response = await GET (request);
    expect(response.status).toBe(400);
    const json = await response?.json();
    expect(json.message).toBe('Invalid ID');

});

// TEST for summary not found GET action
it('return 404 for summary not found', async() => {
    (fetchSummaryById as jest.Mock).mockResolvedValue(null);
    const request = new NextRequest('http://localhost/api/actions?id=672247d17deba0d57b6d5c10')
    const response = await GET (request);
    expect (response.status).toBe(404);
    const json = await response.json();
    expect(json.message).toBe('Summary not found');
}); 


// TEST for summary data GET action
it('return 200 with summary', async() => {
    const mockSummary ={id: '672247d17deaa0d57b6d5c10',  
                        document_id: 'Test-acta_064',
                        act_name: 'Test-SesionConmemorativa',
                        date: 'Test-2024-05-24',
                        document_url:'Test-URL',
                        content: ['Test: El alcalde inauguro...', 'Se procedio a...'], };

    (fetchSummaryById as jest.Mock).mockResolvedValue(mockSummary);
    const request = new NextRequest('http://localhost/api/summaries?id=672247d17deba0d57b6d5c10');
    const response = await GET (request);
    expect (response.status).toBe(200);
    const json = await response.json();
    expect(json.summary).toEqual(mockSummary);
    }); 

// TEST for server error
it('return 500 for server error', async() => {
    (fetchSummaryById as jest.Mock).mockRejectedValue(new Error('Database error'));
    const request = new NextRequest('http://localhost/api/summaries?id=672247d17deba0d57b6d5c10');
    const response = await GET (request);
    expect (response.status).toBe(500);
    const json = await response.json();
    expect(json.message).toBe('Internal Server Error');
    }); 

// TEST for summaries found
it('return 200 for summary list', async() => {
    const mockSummaries =[
        {id: '672247d17deaa0d57b6d5c10',  
        document_id: 'Test-acta_064',
        act_name: 'Test-SesionConmemorativa',
        date: 'Test-2024-05-24',
        document_url:'Test-URL',
        content: ['Test: El alcalde inauguro...', 'Se procedio a...'], }];

    (fetchSummaryPageData as jest.Mock).mockResolvedValue(mockSummaries);
    const request = new NextRequest('http://localhost/api/summaries');
    const response = await GET (request);
    expect (response.status).toBe(200);
    const json = await response.json();
    expect(json.summaries).toEqual(mockSummaries);
    });

// TEST for summaries not found 
it('return 404 for no summaries in database', async() => {
    (fetchSummaryPageData as jest.Mock).mockResolvedValue(null);
    const request = new NextRequest('http://localhost/api/summaries');
    const response = await GET (request);
    expect (response.status).toBe(404);
    const json = await response.json();
    expect(json.message).toBe('Summaries not found');
    }); 

});
