import React,{ useState, useEffect} from "react";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import styled from 'styled-components';

const StyledTopDiv = styled.div`
background-color: #000000;
padding: 12px 0px 12px 15px;
color: #ffffff;
font-size: 12px;
font-weight: 700;
font-family: sans-serif;
`;
const StyledModal = styled(Modal)`
padding:0px;
`;
const Cart = ({cartItems}) => {

    const [open, setOpen] = useState(false);

    useEffect(()=>{
       setOpen(true);
    },[])
    const onCloseModal = () => setOpen(false);

    console.log(cartItems)
   return(
       <StyledModal open={open} onClose={onCloseModal}>
           <StyledTopDiv>My Cart ({cartItems.length} item)</StyledTopDiv>

           {cartItems.length === 0 &&
             <div>no cartItems are there.</div>
           }

           <div>
               {cartItems.map((item)=>{
                   return(
                   <div key={item.product.id}>
                       <img src={item.product.imageURL} alt={item.product.name} />
                       <h5>{item.product.name}</h5>
                       <span>{item.product.price}</span>
                       <span>
                           {item.quantity}
                       </span>
                   </div>
                   )
               })}
           </div>
       </StyledModal>
   )
}
export default Cart;