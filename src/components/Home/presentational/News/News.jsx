import React from 'react'
import "./News.scss"
const News = () => {
  let news=["a","b","c"]
  return (
    <div className='container'>
        <h2 className='news-title'>Lastest News</h2>
        <div className='news'>
            {news.map((newN,i)=>{
                return(
                    <div className='news__new'>
                        <div className='news__new--image'>
                            <img src="https://img.remediosdigitales.com/e9f8f8/istock_000040965646_small/450_1000.jpg" alt="" />
                        </div>
                        <p className='news__new--info'>Hola a todos los pibes</p>
                    </div>
                )
            })}
        </div>
        <div className='news__btn'>
            <button className='news__btn__see'>See More</button>
        </div>
    </div>
  )
}

export default News