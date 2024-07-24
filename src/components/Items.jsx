import React, { useEffect, useState } from 'react';
import Card from './Card';
import { IoMdSearch } from 'react-icons/io';

const Items = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5; // Adjust the number of articles per page

  useEffect(() => {
    const fetchData = async () => {
      const url = 'https://newsapi.org/v2/everything?q=tesla&from=2024-07-15&sortBy=publishedAt&apiKey=ebd04963961943019b59ccbc3fb38266';

      try {
        const api = await fetch(url);
        const res = await api.json();
        if (res.articles) {
          setData(res.articles);
        } else {
          setError('No articles found');
        }
        console.log(res);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);
  
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Calculate the current articles to display based on pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredData.slice(indexOfFirstArticle, indexOfLastArticle);

  const totalPages = Math.ceil(filteredData.length / articlesPerPage);

  return (
    <>
      <div className="relative w-full max-w-sm mx-auto my-4">
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Search By Title"
          className="border-2 border-black rounded-md w-full px-5 py-3 pl-12"
        />
        <IoMdSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black text-xl" />
      </div>

      {error ? (
        <div>Error: {error}</div>
      ) : (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 text-center'>
            {currentArticles.length > 0 ? (
              currentArticles.map((el, id) => (
                <div key={id}>
                  <Card el={el} />
                </div>
              ))
            ) : (
              <div>No articles available</div>
            )}
          </div>
          <div className="flex justify-center my-4">
            <button
              className="px-4 py-2 mx-1 border rounded-md"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span className="px-4 py-2 mx-1">
              Page {currentPage} of {totalPages}
            </span>
            <button
              className="px-4 py-2 mx-1 border rounded-md"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Items;
