import React from 'react'
import './HomePage.scss'
import MainButton from '../../components/MainButton'
function HomePage() {
  return (
    <>
        <main className='home-page main-container'>
          <div className="row g-0 w-100">
            <div className="col-12 col-lg-6">
              <h1 className='mb-5'>
                Welcome to our Blog
              </h1>
              <MainButton link='/news' text='Check Out News'/>
            </div>
          </div>
        </main>
    </>
  )
}

export default HomePage