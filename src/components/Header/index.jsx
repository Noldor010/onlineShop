import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsCart, BsTrash, BsX } from 'react-icons/bs'

import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

const index = () => {

  const {totalPrice, items, totalCount} = useSelector(state => state.cart);

  console.log(totalCount)

  return (
    <Navbar bg="primary" variant="dark">
    <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
 
        <Link to = {`/ShopingCart`}>
          {totalCount !== 0 && 
            <Button variant = "warning">
              <span className='px-2'>{totalPrice}$</span>
              <BsCart/>
              <span className='px-1'>{totalCount}</span>
            </Button>}
        </Link>
    </Container>
  </Navbar>
  )
}

export default index