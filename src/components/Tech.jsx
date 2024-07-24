import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IoMdSearch } from 'react-icons/io';

const Tech = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const api = await fetch('https://newsapi.org/v2/everything?q=tech&sortBy=publishedAt&apiKey=ebd04963961943019b59ccbc3fb38266');
                const res = await api.json();
                setData(res.articles);
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        };
        getData();
    }, []);
    const filter=data.filter((item)=>item.title.toLowerCase().includes(searchQuery.toLowerCase()))

    return (
        <>
        <div className="relative w-full max-w-sm mx-auto my-4">
        <input
          type="text"
          onChange={(e)=>setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search By Title"
          className="border-2 border-blue-700 rounded-md w-full px-5 py-3 pl-12"
        />
        <IoMdSearch className="absolute  top-1/2 left-3 transform -translate-y-1/2 text-blue-700 text-xl" />
      </div>


        <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
            {filter.map((el, id) => (
                <div key={id}>
                    <Card el={el} />
                </div>
            ))}
        </div>
        </>

    );
};

export default Tech;