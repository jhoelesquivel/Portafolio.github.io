import React from 'react'

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
        <div className="carousel-item active">
            <img 
                src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="d-block w-100" 
                alt="Imagen Uno" 
            />
            <div className="carousel-caption">
                <h1 className="animated-text">Portafolio De</h1>
                <h2 className="animated-text">Jhoel Esquivel</h2>
            </div>
        </div>  
    </div>
</div>

  );
};

export default Carousel
