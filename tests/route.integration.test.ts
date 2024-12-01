//INTEGRATION TESTS
import {GET} from '@/app/api/summaries/route'; 
import { NextRequest } from 'next/server';


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
       //id not in database
        const request = new NextRequest('http://localhost/api/actions?id=672247d17deba0d57b6d5c10') 
        const response = await GET (request);
        expect (response.status).toBe(404);
        const json = await response.json();
        expect(json.message).toBe('Summary not found');
    }); 
    
    
    // TEST for summary data GET action
    it('return 200 with summary', async() => {

        const request = new NextRequest('http://localhost/api/summaries?id=672247d17deaa0d57b6d5c10');
        const response = await GET (request);
        expect (response.status).toBe(200);
        const json = await response.json();

        }); 
    

    // TEST for summaries found
    it('return 200 for summary list', async() => {

        const request = new NextRequest('http://localhost/api/summaries');
        const response = await GET (request);
        expect (response.status).toBe(200);
        const json = await response.json();

        });

 
    });
    