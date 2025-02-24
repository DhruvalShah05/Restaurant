import React from 'react'
import { review } from '../Data'
import qouteImg from '../assets/images/quote-img.png'
const Review = () => {
  return (
   <section className='review' id='review'>
     <h1 className='heading'>
                <span>Coustomer's </span>Reviwe
            </h1>
       <div className='box-container'>
                {
                    review.map((item, index) => (
                         <div className='box'>
                            <div 
                         className='image user '>
                                <img src={qouteImg} alt={item.name} className='qoute'/>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro debitis perspiciatis accusamus, dolorem excepturi molestias totam ipsam consectetur minus voluptatem!
                            </p>
                            <img src={item.img} alt={item.name} className=''/>
                            <h3>John Deo</h3>
                            <div className='stars'>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star'></i>
                                <i className='fa fa-star-half'></i>

                            </div>

                            </div>
                            

                    ))
}
</div>
        </section>
    )
}

export default Review
