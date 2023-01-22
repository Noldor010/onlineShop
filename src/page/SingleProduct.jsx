import React, { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { curentlyProductFetch, curentlyProductSelector } from '../redux/slices/curentlyProductSlice'


const SingleProduct = () => {
  
  const {id} = useParams()
  const dispatch = useDispatch()
  const {curentProducts} = useSelector(curentlyProductSelector)

  console.log(curentProducts)

  useEffect(() => {
    dispatch(curentlyProductFetch({id:id}))
  }, []);

  return (
    <Container className='p-4'>
      <img src={curentProducts.thumbnail}/>
      <h3 className='pt-4'>{curentProducts.title}</h3>
      <p>{curentProducts.price}$</p>
      <Link to='/'>
        <Button variant="outline-danger">Go back</Button>
      </Link>
    </Container>
  )
}

export default SingleProduct