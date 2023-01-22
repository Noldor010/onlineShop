import React from 'react'
import { CartItem } from '../components/CartItem'
import { useSelector } from "react-redux"
import { Button, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShopingCart = () => {

  const {items, totalPrice}  = useSelector(state => state.cart);

  console.log(items)

  return (
    <Container className='pt-3'
      style={{maxWidth: "600px"}}
    >
      
      <Stack gap = {3}>
        {items.map(item => (
          <CartItem 
            key={item.id}
            item = {item}
            />
        ))}
      <div className="d-flex align-items-center justify-content-between">        
        <Link to = '/'>
          <Button>Go back</Button>
        </Link>
        <p className='mb-0'>{totalPrice}$</p>
      </div>
      </Stack>

    </Container>
  )
}

export default ShopingCart