import React from 'react'
import './NewsPage.scss'
import { Link } from 'react-router-dom'
import MainButton from '../../components/MainButton'
import NewsCard from '../../components/NewsCard'
import { useSelector } from 'react-redux'
import { useAppSelector } from '../../hooks'
export default function NewsPage() {
  const news = useAppSelector((state) => state.news);
  return (
    <main className='news-page main-container'>
        <div className="row w-100 g-3 g-md-5 p-0 m-0">
          {
            news.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4">
                <NewsCard id={item.id} image={item.image} shortDescription={item.shortDescription}  key={item.id}/>
              </div>
            ))
          }      
        </div>
    </main>
  )
}
