import 'animate.css';
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ProductDetails from './pages/ProductDetails'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  

  return (
    <>
    <Navbar/>
     <ProductDetails/>
     <Footer/>
    </>
  )
}

export default App
