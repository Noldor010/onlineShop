import { Button, Stack } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { addItemAction, minusItemAction, removeItemAction } from "../redux/slices/cartSlice"
import { AiFillPlusCircle, AiFillMinusCircle} from 'react-icons/ai'

export function CartItem({item}) {

  const dispatch = useDispatch()

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center gap-3">
        <img
          src={item.thumbnail}
          style={{ width: "125px", height: "75px", objectFit: "cover" }}
        />
        <div className="">
          <div>
            {item.name}{" "}
            {item.count > 1 && (
              <span className="text-muted" style={{ fontSize: ".65rem" }}>
                x{item.count}
              </span>
            )}
          </div>
          <div className="text-muted" style={{ fontSize: ".75rem" }}>
            {item.price}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <AiFillPlusCircle
          color="red"
          size="25px"
          onClick={()=>dispatch(addItemAction(item))}
        />
          <div className="px-2"> {item.count}</div>
        <AiFillMinusCircle
          color="red"
          size="25px"
          onClick={()=>dispatch(minusItemAction(item.id))}
        />
      </div>
      <p className="mb-0">{item.count* item.price}$</p>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => dispatch(removeItemAction(item.id))}
      >
        &times;
      </Button>
      
    </Stack>
  )
}
