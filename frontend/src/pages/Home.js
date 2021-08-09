import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Main from '../components/Main';

export default class Home extends React.Component {
   render() {
   
      return (
         <>
            <Header/>
            <Hero />
            <Main/>
            <Footer />
         </>
      )
   }
}
