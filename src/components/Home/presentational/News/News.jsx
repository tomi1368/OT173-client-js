import axios from "axios"
import React,{useEffect,useState} from "react"
import "./News.scss"
const News = () => {
    const [news,setNews] = useState([])
    useEffect(()=>{
        const responseNews = async ()=>{
            try{
                const response = await axios.get("")
                setNews(response.data.slice(0,4))
            }catch(err){
                console.log(err.message)
            }np
        }
        responseNews()
    },[])
  return (
    <div className='container'>
        <h2 className='news-title'>Lastest News</h2>
        <div className='news'>
            {news.map((newSlide,i)=>{
                return(
                    <div className='news__new'>
                        <div className='news__new--image'>
                            <img src={newSlide.image} alt="" />
                        </div>
                        <p className='news__new--info'>{newSlide.text}</p>
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