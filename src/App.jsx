import './App.css'
import Footerx from './components/Footer/Footerx'
import Nav from './components/Header/Nav'
import Headerx from './components/Headerinfo/Headerx'
import Productsline from './components/Products/Productsline'
import wspwsp from '../src/assets/wsplogo.webp'



function App() {

  const numerowsp = '56984003044'; // Define el número de teléfono en formato internacional
 

  return (
    <>
    <div>
    <a href={`https://wa.me/${numerowsp}`} target="_blank" rel="noopener noreferrer"><img className='wsplogobutton' src={wspwsp} alt="" /></a>       
    <Nav />
    <Headerx />
    <Productsline />
    <Footerx />
    </div>
        </>
  )
}

export default App
