import './App.css'
import Footerx from './components/Footer/Footerx'
import Nav from './components/Header/Nav'
import Headerx from './components/Headerinfo/Headerx'
import Productsline from './components/Products/Productsline'
import wspwsp from '../src/assets/wsplogo.webp'



function App() {
 

  return (
    <>
    <div>
    <a href=""><img className='wsplogobutton' src={wspwsp} alt="" /></a>       
    <Nav />
    <Headerx />
    <Productsline />
    <Footerx />
    </div>
        </>
  )
}

export default App
