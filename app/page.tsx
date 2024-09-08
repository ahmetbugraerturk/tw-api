// app/page.tsx
"use client";
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [tweets, setTweets] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTweets = async () => {
            try {
                const response = await fetch('/api/tweets');
                const data = await response.json();
                setTweets(data.data || []);
            } catch (error) {
                console.error('Error fetching tweets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTweets();
    }, []);

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h1>Tweets</h1>
            <ul>
                {tweets.map((tweet: any) => (
                    <li key={tweet.id}>{tweet.text}</li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
