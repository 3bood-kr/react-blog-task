import React from 'react'
import { Link } from 'react-router-dom'
import './MainButton.scss';

interface Props{    
    link: string,
    text: string,
}
function MainButton({ link, text }: Props) {
  return (
    <>
        <Link to={link} className='main-button'>
            {text}
        </Link>
    </>
  )
}

export default MainButton