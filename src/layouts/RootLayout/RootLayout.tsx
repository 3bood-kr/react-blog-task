import React, { ReactNode } from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import ScrollToTop from '../../components/ScrollToTop';
export default function RootLayout() {
  return (
    <>
        <Provider store={store}>
          <ScrollToTop />
          <Header/>
          <Outlet/>
        </Provider>
    </>
  )
}