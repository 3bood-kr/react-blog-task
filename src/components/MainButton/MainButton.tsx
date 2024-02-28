import React from 'react'
import { NavLink } from 'react-router-dom'
import './MainButton.scss';

interface Props{    
    link: string,
    text: string,
}
function MainButton({ link, text }: Props) {
  return (
    <>
        <NavLink to={link} className='main-button'>
            {text}
        </NavLink>
    </>
  )
}

export default MainButton