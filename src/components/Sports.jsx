import React, { useEffect, useState } from 'react';
import Card from './Card';

const Sports = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const api = await fetch('https://newsapi.org/v2/everything?q=sports&from=2024-06-22&sortBy=publishedAt&apiKey=ebd04963961943019b59ccbc3fb38266');
                const res = await api.json();
                setData(res.articles);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
            {data.map((el, id) => (
                <div key={id}>
                    <Card el={el} />
                </div>
            ))}
        </div>
    );
};

export default Sports;