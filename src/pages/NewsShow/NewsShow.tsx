import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../hooks';
import './NewsShow.scss'

function NewsShow() {

    const params = useParams();
    const id = Number(params.id);
    const post = useAppSelector(state => state.news.find(item => item.id == id));

    if(!post){
        return (
            <>
              <div className="main-container d-flex align-items-center justify-content-center">
                <h1>No Such Post...</h1>  
              </div>
            </>
        )
    }

  return (
    <main className='news-show main-container'>
        <div className="row p-0 m-0 w-100">
            <div className="col-12 col-lg-8 mx-auto">
                <img src={post?.image}/>
                <h1>{post?.title}</h1>
                <p>{ post?.description }</p>
            </div>
        </div>
    </main>
  )
}

export default NewsShow