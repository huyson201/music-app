import React, { useEffect } from 'react'
import LeftSide from './components/LeftSide/LeftSide'
import Header from './components/Header/Header'
import ContextProvider from './contexts'
import { Outlet, useSearchParams } from 'react-router-dom'
import MainContent from './components/MainContent/MainContent'
import Footer from './components/Footer/Footer'
import BackDrop from './components/Backdrop/BackDrop'
import MusicPlayer from './components/MusicPlayer/MusicPlayer'
import axios from 'axios'
import md5 from 'md5'


function App() {
  // const [searchParams, setSearchPrams] = useSearchParams()
  // useEffect(() => {
  //   const token = searchParams.get("token")
  //   if (!token) return

  //   const params = {
  //     api_key: encodeURIComponent(import.meta.env.VITE_API_KEY),
  //     method: "auth.getSession",
  //     token: encodeURIComponent(token),
  //   };


  //   const sortedParams = Object.keys(params).sort().reduce((acc: { [key: string]: any }, key) => {
  //     let parseKey = key as "api_key" | "method" | "token"
  //     acc[parseKey] = params[parseKey];
  //     return acc;
  //   }, {});

  //   let paramString = '';
  //   for (const key in sortedParams) {
  //     if (sortedParams.hasOwnProperty(key)) {
  //       paramString += `${key}=${sortedParams[key]}`;
  //     }
  //   }

  //   paramString += encodeURIComponent(import.meta.env.VITE_API_SECRET);
  //   console.log(paramString)
  //   const sig = md5(paramString)

  //   axios.get("https://ws.audioscrobbler.com/2.0/", {
  //     params: {
  //       api_key: import.meta.env.VITE_API_KEY,
  //       token: token,
  //       method: "auth.getSession",
  //       format: "json",
  //       api_sig: sig
  //     }
  //   })
  // }, [])

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
