import React from 'react';
import './Product.css'

const Product = ({product}) => {
    return (
        
           
             
      
        < div className='product-container'>
         <img className='w-100'  src={product.picture} alt="product-img" />
      
     <p>{ product.name}</p>
          
      
        <p>
                <small className="text-muted">{ product.balance}</small>
        </p>
       </div>
               
                
       
    );
};

export default Product;