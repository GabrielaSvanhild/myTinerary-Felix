import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main';
import {useEffect} from 'react'

 const Home= ()=>{

   useEffect(()=>{
      window.scrollTo(0,0)
   },[])
  
      return (
         <>
            <Header/>
            <Hero />
            <Main/>
            <Footer />
         </>
      )
}

export default Home;
