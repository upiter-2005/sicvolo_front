import {useEffect, useState, useRef} from 'react'
import styles from "./Cart.module.scss"
import CartItem from "../CartItem"
import { useSelector, useDispatch } from "react-redux";
import {showCard} from "../../redux/slices/cardSlice"
import {useNavigate} from "react-router-dom"

export default function Cart({popup}) {
  const [disable, setDisable] = useState(false)
  const dispatch = useDispatch();
  const total = useSelector(state=>state.card.total);
  const items = useSelector(state=>state.card.items);
  const cartWindow = useRef();
  const closeBtn = useRef();
 const navigate = useNavigate()

  useEffect(()=>{
    const handleClick = (event) => {
      const callBtn = document.getElementById('popupCartBtn');
      document.getElementById('popupCartBtn').addEventListener('click', function(e){
        e.stopPropagation()
        dispatch(showCard(true));
      })
      // const path = event.path || (event.composedPath && event.composedPath());
      // console.log(callBtn)
      // if (cartWindow.current && !path.includes(cartWindow.current)) {
      //   dispatch(showCard(false));
      // }
      // if (closeBtn.current && !path.includes(closeBtn.current)) {
      //   dispatch(showCard(false));
      // }
    };
    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);

  }, [showCard])

  const toCheckout = ()=>{
    if (total>0) {
      navigate('/checkout')
    }else return;
  }
 
  return (
    <div className={popup === true ? `${styles.cart} ${styles.cartAbsolut}` : `${styles.cart}`  } ref={cartWindow} >
      <button className={styles.closeCart} ref={closeBtn} onClick={()=>{ dispatch(showCard(false));}}><img src="/img/close-cart.svg" alt="" /></button>
        <p className={styles.cart_title}>Cart</p>
        <div className={styles.cart_container}>
        <div className={styles.cart_containerInner}>
          
          {items.length>0 ? items.map(obj =>  <CartItem {...obj} />) : <p className={styles.emptyCart}><img src="/img/empty.svg" alt="" /> Your cart is emtpy</p> }
        
        </div>
        
        </div>
        <div className={styles.promo}>
          <input type="text" placeholder="Enter your promo code" />
          <img src="/img/promo.svg" alt="" />
        </div>
        <div className={styles.total}>
          <span>Total</span>
          <span>{total}$</span>
        </div>
        <button className={styles.makeOrder} onClick={toCheckout} >Make order</button>
    </div>
  )
}
