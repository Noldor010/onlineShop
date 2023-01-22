import React, { useCallback, useEffect, useMemo, useState } from 'react'
import {Col, Container, Row, Button} from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import Category from '../components/Category'
import MyPagination from '../components/MyPagination'
import ProductBlock from '../components/ProductBlock'
import Search from '../components/Search/Search'
import { categoryFetch, productsFetch, setPageAction, setSort } from '../redux'
 
 

const Home = () => {

  const dispatch = useDispatch()
  const {products, loading, totalPages, currentPage, fetchCarently, CurentlyCarently, skipPage} = useSelector(state => state.products);
  const [allProduct, setAllProduct] = useState(false);

  console.log(products)


  useEffect(() =>{
    dispatch(setPageAction({currentPage:1}))
  }, [fetchCarently])

  useEffect(()=>{
    fetchCarently === 'getAll' && dispatch(productsFetch({skip:skipPage}))
    fetchCarently === 'getCategory' && dispatch(categoryFetch({category: CurentlyCarently, skip:skipPage}))   
  }, [fetchCarently, currentPage, CurentlyCarently, skipPage])

  return (
    <Container className="pt-3">
      <Row className="justify-content-md-center">
        <Col xs className='pb-3'>
          <Search/>
        </Col>
        <Col xs lg="5">
          <div className="d-flex gap-4 pb-3">
            <Category setAllProduct = {setAllProduct}/>
            <Button 
              variant="success"
              onClick={() => dispatch(setSort())}
            >Sort rating</Button>
          </div>
        </Col>
      </Row>
      
        

      <Row className="pt-3">
        {!loading && products.map((item)=>(
        <Col
          className='d-flex justify-content-center p-3'
          key={item.id}>        
          <ProductBlock
            key={item.id}
            {...item}
          />
        </Col>
        ))}
      </Row>
      <MyPagination/>
    </Container>
  )
}

export default Home