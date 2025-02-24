import './assets/css/style.css';
import About from './componnets/About';
import Blog from './componnets/Blog';
import Contact from './componnets/Contact';
import Footer from './componnets/Footer';
import Home from './componnets/Home';
import Menu from './componnets/Menu';
import Navbar from './componnets/Navbar';
import Product from './componnets/Product';
import Review from './componnets/Review';

function App() {
  return (
   <>
   <Navbar/>
    <Home/>
    <About/>
    <Menu/>
    <Product/>
    <Review/>
    <Contact/>
    <Blog/>
    <Footer/>
   </>
  );
}

export default App;
