
import { useDispatch, useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { remove } from "./cartSlice";

const Cart =()=>{
    const Products = useSelector(state=>state.cart);
    const dispatch = useDispatch()
    const removeToCart=(id)=>{
        //dispatch a remove action
        dispatch(remove(id));

    }

    const cards = Products.map(product=>(
        <div className="col-md-12" style={{marginBottom:'10px'}}>
             <Card key={product.id} className="h-100">
             <div className="text-center">
      <Card.Img variant="top" src={product.image} style={{width:'100px', height:'130px'}} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
        INR: {product.price}
        </Card.Text>
      </Card.Body>
      <Card.Footer style={{background:'white'}}>
      <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
      </Card.Footer>
      </div>
    </Card>
    </div>



    ))
    return(
        <>
        <div className="row">
            {cards}

        </div>
        
        </>
    )
}

export default Cart;