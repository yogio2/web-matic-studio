// News.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StyleJS/news.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('http://localhost:5000/news'); // Adjust the URL based on your backend server's address
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching news: {error.message}</div>;
  }

  return (
    <div className='newsStructContainer'>
        <h4 style={{textAlign:'center'}}>Latest in Technology</h4>
            <Swiper className='newsSlider' pagination={{dynamicBullets: true,}} autoplay={{delay: 5000, disableOnInteraction: false}}  grabCursor={false} modules={[Autoplay, Pagination, Navigation]}>
            {articles.map((article) => (
                <SwiperSlide key={article.url} className='newsCard'>
                    <article className='newsArticle'>
                        <div className="banner">
                            <img src={article.urlToImage} alt="" />
                        </div>
                        <div className="newsContent">
                            <title>{article.title}</title>
                            <h6 className='newsTitle'>{article.title}</h6>
                            <p className='newsDesc'>{article.description}</p>
                        </div>
                        <div className="bottom">
                            <div className="source">{article.source.name}</div>
                            <div className="link">
                              <a href={article.url} className="link--top">link</a>
                              <a href={article.url} className="link--bottom">link</a>
                            </div>
                            
                        </div>
                    </article>
                </SwiperSlide>
            ))}
            </Swiper>
    </div>
  );
};

export default News;

 /*       <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
            <p>{article.description}</p>
        </li> */