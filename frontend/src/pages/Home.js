import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Carrousel from '../components/Carrousel'
import Navbaar from '../components/Navbar';

export default class Home extends React.Component {
   render() {
   
      return (
         <>
        <Navbaar/>
         <div className="row">
         <Hero />
         </div>
         
            
         <div className="row">
            <Carrousel/>
         </div>
            <Footer />
         </>
      )
   }
}
