import React from 'react'
import LeftSide from './components/LeftSide/LeftSide'
import Header from './components/Header/Header'
import ContextProvider from './contexts'
import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <div className="App">
      <ContextProvider>
        <LeftSide />
        <Header />
        <MainContent>
          <Outlet />
          <Footer />
        </MainContent>
      </ContextProvider>
    </div>
  )
}

export default App
