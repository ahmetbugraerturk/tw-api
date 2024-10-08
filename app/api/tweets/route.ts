// app/api/tweets/route.ts
import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: Request) {
    const url = 'https://api.twitter.com/2/tweets/search/recent'; // Example endpoint
    const query = 'Searc Query'; // Replace with your search query
    const bearerToken = process.env.TWITTER_BEARER_TOKEN; // Replace with your Bearer Token

    try {
        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${bearerToken}`,
            },
            params: {
                query: query,
            },
        });

        return NextResponse.json(response.data);
    } catch (error: any) {
        console.error('Error fetching tweets:', error.response?.status, error.response?.data || error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
