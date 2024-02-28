import React from 'react'
import { Link } from 'react-router-dom'
import MainButton from '../MainButton'
import './NewsCard.scss'
import NewItem from '../../interfaces/NewItem'


function NewsCard({id, image, shortDescription}: NewItem) {
  return (
    <>
        <div className="news-card">
              <div className="news-card__head">
                <Link to={`/news/${id}`}>
                    <img src={image}/>
                </Link>
              </div>
              <div className="news-card__body">
              <p>
                        { shortDescription }
                    </p>

                    <MainButton link={`/news/${id}`} text='Read More'/>
              </div>
        </div>
    </>
  )
}

export default NewsCard