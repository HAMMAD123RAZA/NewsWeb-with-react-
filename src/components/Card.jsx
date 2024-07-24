import React from 'react'

const Card = ({el}) => {
  return (
    <>
    <div className="parent w-full max-w-lg px-10 shadow-md mx-2 my-2 md:px-5 py-5 ">

            <img src={el.urlToImage} alt="" />
              <p className='py-2 font-bold text-2xl'>{el.title}</p> 
              <div className="content py-2 font-serif">{el.content}</div>
              <p className='py-2 font-serif' >{el.description}</p> 
              <a className='py-2  text-blue-500 fontbo hover:text-blue-700'  href={el.url}>Read more</a> 
              <div className="flex justify-between ">
              <div className="publsih py-2 font-mono ">{el.publishedAt}</div>
              <div className="author  font-semibold py-2">{el.author}</div>
              </div>
              </div>

    </>
  )
}

export default Card