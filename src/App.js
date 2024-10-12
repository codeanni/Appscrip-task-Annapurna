import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './Components/Header'
import Section2 from './Components/Section2'
import Section3 from './Components/Section3'
import ProductsSection from './Components/ProductsSection';
import SubscribeSection from './Components/SubscribeSection';
import Footer from './Components/Footer';

import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <Section2 />
      <Section3 />
      <ProductsSection/>
      <SubscribeSection />
      <Footer />

    </div>
  )
}

export default App