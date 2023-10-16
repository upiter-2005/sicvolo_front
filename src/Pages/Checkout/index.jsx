import {useEffect} from 'react'
import styles from"./Checkout.module.scss"
import CartStatic from '../../Components/CartStatic'
import { showCard} from "../../redux/slices/cardSlice"
import {useDispatch} from "react-redux";

export default function Checkout() {

    const dispatch = useDispatch();

useEffect(()=>{
    dispatch(showCard(false))
},[])
  return (
    <div className={styles.checkout}>
        <div className={styles.checkout_mobTitle}>
        <h2>Placing an order</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        </div>
        <div className={styles.left}>
            <h2>Placing an order</h2>
            <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <form>

                <div className={styles.fomrBlock}>
                    <div className={styles.fomrBlock_title}>
                        <span>1</span> Contacts
                    </div>
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter your second name" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Phone number" />
                </div>



                <div className={styles.fomrBlock}>

                    <div className={styles.fomrBlock_title}>
                        <span>2</span> Delivery adress
                    </div>

                    <div className={styles.fomrBlock_box}> <input type="checkbox" id="delivery-input"  /> <label htmlFor="delivery-input">I am the recipient of the order</label></div>
                    <select> Country/region
                        <option value="0">Country/region</option>
                        <option value="1">Ukraine</option>
                        <option value="1">Poland</option>
                        <option value="1">France</option>
                        <option value="1">USA</option>
                    </select>
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="Street" />
                    <input type="text" placeholder="Entrance" />
                    <input type="text" placeholder="Company name (optional)" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Apartment number" />
                    <input type="text" placeholder="ZIP Code" />
                </div>


                <div className={styles.fomrBlock}>
                    <div className={styles.fomrBlock_title}>
                        <span>3</span> Payment method
                    </div>


                   <div className={styles.radio}>
                        
                         <input type="radio" id="cash" value="Cash" name="payment" /> <label htmlFor="cash" className={styles.checkmark}>Cash</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="Payoneer" value="Payoneer" name="payment" /> <label htmlFor="Payoneer" className={styles.checkmark}>Payoneer</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="Paypal" value="Paypal" name="payment" /> <label htmlFor="Paypal" className={styles.checkmark}>Paypal</label>
                    </div>
                    <div className={styles.radio}>
                        <input type="radio" id="master" value="master" name="payment" /> <label htmlFor="master" className={styles.checkmark}>Mastercard, visa</label>
                    </div>
                  
                  <textarea name="" id="" placeholder='Additional Information'></textarea>
                  <div className={styles.fomrBlock_box}> <input type="checkbox" id="privacy"  /> <label htmlFor="privacy">By clicking the "Make an order" button, I agree to the terms of the offer agreement</label></div>
                </div>
                <button type="submit" className={styles.orderSubmit}>Order</button>


            </form>
        </div>
        <div className={styles.right}>
            <CartStatic popup={false} />
        </div>
        
    </div>
  )
}

