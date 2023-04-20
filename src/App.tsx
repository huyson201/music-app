import React from 'react'
import LeftSide from './components/LeftSide/LeftSide'
import Header from './components/Header/Header'
import ContextProvider from './contexts'
import { Outlet } from 'react-router-dom'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import BackDrop from './components/Backdrop/BackDrop'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'


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
        <MusicPlayer />
        <BackDrop />
      </ContextProvider>
    </div>
  )
}

export default App
