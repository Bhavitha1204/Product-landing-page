import React from 'react';
export default function Hero(){
  return (
    <section className="hero">
      <h1 className="hero">Discover the Brand Products.</h1>
      <p className='hero'>Get the best deals on the Brand .</p>
       <img src="data:image/jpeg;base64,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" alt="image1"/>
      <p></p> 
      <button className='hero'>Shop Now</button><p></p>

      <button1 className='hero'>Add to Cart</button1>
    </section>
  );
};""