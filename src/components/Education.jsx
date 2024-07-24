import React, { useEffect, useState } from 'react'
import Card from './Card'

const Education = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const api = await fetch('https://newsapi.org/v2/everything?q=education&sortBy=publishedAt&apiKey=ebd04963961943019b59ccbc3fb38266'); // Adjust the date to a valid range
                const res = await api.json();
                if (res.status === 'error') {
                    throw new Error(res.message);
                }
                setData(res.articles);
            } catch (error) {
                setError(error.message);
            }
        };
        getData();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
            {data && data.length > 0 ? (
                data.map((el, id) => (
                    <div key={id}>
                        <Card el={el} />
                    </div>
                ))
            ) : (
                <div>No articles found.</div>
            )}
        </div>
    );
};

export default Education
