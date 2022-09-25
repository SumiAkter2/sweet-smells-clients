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
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img   style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100"
          src="https://i.ibb.co/RY9d7xv/bg3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img     style={{'height':'350px', 'borderRadius':'20px'}}
          className="d-block w-100"
          src="https://i.ibb.co/9p40FXw/bg4.jpg"
          alt="Third slide"
        />

        <Carousel.Caption >
          <h3 className='my-4'>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
            </Carousel>
          
      
        </div>
        
    );
};

export default Banner;