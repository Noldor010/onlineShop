 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemAction } from '../redux/slices/cartSlice';
import Count from './UI/Count/Count';
import { Rating } from './UI/Rating';

const ProductBlock = ({
  title,
  description,
  price,
  stock,
  brand,
  category,
  thumbnail,
  rating,
  id
  }) => {

  const dispatch = useDispatch()

  const {items, totalPrice, totalCount} = useSelector(state => state.cart);
  console.log(totalPrice)

  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;

  console.log(addedCount)
  
  const onClickAdd = ()=>{
    const item = {
      title,
      description,
      price,
      stock,
      brand,
      category,
      thumbnail,
      rating,
      id
    }
    dispatch(addItemAction(item))
  }

  return (

    <Card style={{ width: '18rem' }}>
    <Card.Img 
      variant="top" 
      src={thumbnail} 
      style = {{height: '18rem', objectFit:'cover'}}
    />

    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text
        style = {{height: '5rem', overflow:'auto'}}
      >
        {description}
      </Card.Text>
      <div className="d-flex justify-content-between">
        <Button 
          variant = "primary"
          onClick={onClickAdd}
          >Add to Cart 
          {addedCount !== 0 &&         
            <Count
              count={addedCount}
            />
          }
          </Button>
        <Link to = {`SingleProduct/${id}`}>        
          <Button variant = "warning">Watch</Button>
        </Link>
      </div>
      <div className="d-flex aling-items-center justify-content-between pt-4">
        <p>{price}$</p>
        <div className="d-flex gap-3 pt-1 justify-content-end">
          <Rating value = {rating}/>
          <p>{rating}</p>
        </div>
      </div>
    </Card.Body>
  </Card>
  )
}

export default ProductBlock