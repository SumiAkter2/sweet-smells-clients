import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Banner = () => {
    return (
        <div style={{'height':'600px'}} className="container-fluid ">
               <Carousel fade className='mx-auto container-fluid w-75'
       >
       
      <Carousel.Item >
                <img
                   style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100" 
          src="https://i.ibb.co/QNKh3yb/bg5.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MOST POPULAR PERFUME & COLOGNE BRANDS</h3>
          <p className='text-sm'>Free shipping on thousands of fragrances. Save up to 80% off retail.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img   style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100"
          src="https://i.ibb.co/RY9d7xv/bg3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>BEST SELLERS FOR WOMEN</h3>
          <p className='text-sm'>Free shipping on thousands of fragrances. Save up to 80% off retail.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img     style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100"
          src="https://i.ibb.co/9p40FXw/bg4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption >
          <h3 className='my-4'>Shop a selection of the best fragrances from Sweet Smells.</h3>
          <p className='text-sm'>
           Free shipping on thousands of fragrances. Save up to 80% off retail.
          </p>
        </Carousel.Caption>
                </Carousel.Item>
                  <Carousel.Item>
        <img     style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100"
          src="https://i.ibb.co/qFT4XxB/bg6.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>LUXURY BRANDS. LOWEST PRICES.</h3>
          <p className='text-sm'>
           Free shipping on thousands of fragrances. Save up to 80% off retail.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
          
      
        </div>
        
    );
};

export default Banner;