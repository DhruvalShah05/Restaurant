import React from 'react'
import { menu } from '../Data'
const Menu = () => {
  return (<>
   <section className='menu' id='menu'>
   <h1 className='heading'>
      <span>Our </span>Menu
    </h1>
    <div className='box-container'>
        {
            menu.map((item, index) => (
                <div className='box'>
                    <img src={item.img} alt={item.name} />
                    <h3>tasty and healty</h3>
                    <div className='price'>
                        $15.99 <span>25.99</span>
                    </div>
                    <a className='btn'>Add To cart</a>
                    </div>
            ))
        }
    </div>
   </section>
    </>
  )
}

export default Menu
