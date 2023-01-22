import { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { useDispatch, useSelector } from 'react-redux';
import { categoryFetch, fetchCarentlyAction, productsActions, productsFetch, setPageAction } from '../redux';
import { useGetCategoryReposQuery } from '../redux/slices/categoryApi';
import Dropdown from 'react-bootstrap/Dropdown';

const Category = ({setAllProduct}) => {

  const {data, error, isLoading} = useGetCategoryReposQuery()
  const dispatch = useDispatch()
  const {products, loading, totalPages, currentPage, skipPage, fetchCarently, CurentlyCarently} = useSelector(state => state.products);

  return (
    <>    
      {!isLoading &&
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              active = {fetchCarently === 'getAll' ? true : false} 
              onClick={() => dispatch(fetchCarentlyAction({fetchCarently: 'getAll'}))}
            >All Products</Dropdown.Item>
              {data.map((item)=>
                <Dropdown.Item
                  key={item}
                  active = {CurentlyCarently === item ? true : false} 
                  onClick={() => dispatch(fetchCarentlyAction({fetchCarently: 'getCategory', CurentlyCarently: item}))}
                >{item}</Dropdown.Item>
              )}
            </Dropdown.Menu>
        </Dropdown>
      }  
    </>
  )
}

export default Category