import Pagination from 'react-bootstrap/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { setPageAction } from '../redux';
  

const MyPagination = () => {

  const dispatch = useDispatch()
  const {currentPage, totalPages} = useSelector(state => state.products);
  let active = currentPage;
  let items = [];

  const updateFetch = (number) => {
    dispatch(setPageAction({currentPage: number}))
    
  }

  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item 
        key={number} 
        active={number === active}
        onClick = {() => updateFetch(number)}
        >
        {number}
      </Pagination.Item>,
    );
  }

  return (
    <div>
      <Pagination>{items}</Pagination>
  </div>
  )
}


export default MyPagination