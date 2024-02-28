import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss';

export default function Header() {
  return (
    <header className='header'>
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/news">News</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
