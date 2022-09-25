import React from 'react';
import { Card } from 'react-bootstrap';

const Product = ({product}) => {
    return (
        <div>
            <img style={{ width: '50px' }} src={product.picture} alt="" />
             
      
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
                <Card.Title>{ product.name}</Card.Title>
          <Card.Text>
            {product.dis}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
                <small className="text-muted">{ product.balance}</small>
        </Card.Footer>
               
                
        </div>
    );
};

export default Product;