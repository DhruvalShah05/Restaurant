import React from 'react'
import { product } from '../Data'
const Product = () => {
    return (
        <section className='products' id='products'>
            <h1 className='heading'>
                <span>Our </span>Products
            </h1>
            <div className='box-container'>
                {
                    product.map((item, index) => (
                        <div className='box'>
                            <div className='icons'>
                                <a href='#' className='fa fa-shopping-cart' ></a>
                                <a href='#' className='fa fa-heart' ></a>
                                <a href='#' className='fa fa-eye' ></a>
                            </div>
                            <div className='image'>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className='content'>
                                <h3>Fresh Food</h3>
                            </div>
                            <div className='stars'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star-half'></i>

                            </div>
                            <div className='price'>
                                $15.99 <span>25.99</span>
                            </div>
                        </div>


                    ))
                }
            </div>
        </section>
    )
}

export default Product
