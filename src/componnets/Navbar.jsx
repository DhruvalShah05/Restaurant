import React,{useRef} from 'react'
import Logo from '../assets/images/logo.png';
import { cart } from "../Data";


const Navbar = () =>
  {
  const searchRef = useRef();
  const NavRef = useRef();
  const cartRef = useRef();
  
  const searchHandler = () =>{
    searchRef.current.classList.toggle('active');
    cartRef.current.classList.remove("active");
    NavRef.current.classList.remove('active');
  }
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    NavRef.current.classList.remove("active");
  };
  const navbarHandler = () =>{
      NavRef.current.classList.toggle('active');
      searchRef.current.classList.remove('active');
      cartRef.current.classList.remove("active");
  }
  return (
    <>
      <header className='header'>
        <a href='#' className='logo'>
          <img src={Logo} alt='' />
        </a>
        <nav className='navbar' ref={NavRef}>
          <a href='#home'>home</a>
          <a href='#about'>about</a>
          <a href='#menu'>Menu</a>
          <a href='#products'>products</a>
          <a href='#review'>review</a>
          <a href='#contact'>contact</a>
          <a href='#blogs'>blogs</a>
        </nav>
        <div className='icons'>
          <div className='fa fa-search' onClick={searchHandler}></div>
          <div className='fa fa-shopping-cart' onClick={cartHandler}></div>
          <div className='fa fa-bars' id='menu-btn' onClick={navbarHandler}></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type='sealrch' placeholder='Search Here...'/>
          <label htmlFor='search-box' className='fa fa-search'></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
          { cart.map((item, index) => (
            <div className="cart-item" key={index * Math.random()}>
              <span className="fa fa-times"></span>
              <img src={item.img} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">$15.99/-</div>
              </div>
            </div>
          ))}
          <a href="#" className="btn">
            checkout now
          </a>
        </div>
        
      </header>
    </>
  )
}

export default Navbar
