import React, { ReactNode } from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../../store/store';
export default function RootLayout() {
  return (
    <>
        <Provider store={store}>
          <Header/>
          <Outlet/>
        </Provider>
    </>
  )
}