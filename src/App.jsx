import './App.css'
import About from './components/about/About'
import Category from './components/category/Category'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Products from './components/products/Products'
import Subscribe from './components/subscribe/Subscribe'
// import Single from './pages/single/Single'
import {Routes , Route} from "react-router-dom"


function App() {

  return (
    <>
      <Header />
      {/* <Routes>
        <Route path="/single/:id" element={<Single />} />
      </Routes> */}
      <Hero />
      <Category />
      <Products />
      <About />
      <Subscribe />
      <Footer />
    </>
  )
}

export default App
