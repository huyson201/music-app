import React from 'react'
import Home from './pages/Home/Home'
import LeftSide from './components/LeftSide/LeftSide'
import Header from './components/Header/Header'
import ContextProvider from './contexts'

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <LeftSide />
        <Header />
        <Home />
      </ContextProvider>
    </div>
  )
}

export default App
