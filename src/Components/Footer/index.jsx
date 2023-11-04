import {useState} from "react";
import styles from "./Footer.module.scss";
import {Link} from "react-router-dom"
import { toast } from 'react-toastify';
export default function Footer() {
const[subscVal, setSubscVal] = useState();
  const subscribeHandler = (e) => {
    e.preventDefault();
    toast("Your subscribe is succesfull")
    setSubscVal('')
  }
  return (
    <footer>
      <div className="container">
        <div className={styles.footerWrap}>
          <div className={styles.footer_col_1}>
            <a href="#">
              <img src="/img/logo.svg" alt="" />
            </a>
            <div className={styles.follow}>
              <p>Follow us</p>
              <a href="https://instagram.com/sicvolo.brand/" target="blank">
                <img src="/img/insta.svg" alt="" />
              </a>
              <a href="https://www.facebook.com/sicvolo.brand/" target="blank">
                <img src="/img/fb.svg" alt="" />
              </a>
              {/* <a href="#">
                <img src="/img/twitter.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/youtube.svg" alt="" />
              </a> */}
            </div>
          </div>
          <div className={styles.footer_col_2}>
            <div className={styles.footer_column}>
              <p>Sicvolo</p>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/partnership">Partnership</Link>
                </li>
                <li>
                  <Link to="/care">Care</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_column}>
              <p>Categories</p>
              <ul>
                <li>
                  <a href="catalog/rings">Rings</a>
                </li>
                <li>
                  <a href="/catalog/belts">Belts</a>
                </li>
                <li>
                  <a href="/catalog/accessories">Accessories</a>
                </li>
               


              </ul>
            </div>
            <div className={styles.footer_column}>
              <p>Conditions</p>
              <ul>
                <li>
                  <Link to="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/payment">Payment & Shipping</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/return">Return Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col_3}>
            <p>Subscribe to receive special offers and promotions</p>
            <form className={styles.subscribe_block} onSubmit={subscribeHandler}>
              <img src="/img/search.svg" alt="" />
              <input type="text" value={subscVal} onChange={e=>setSubscVal(e.target.value)} placeholder="Enter you email..." required />
            </form>
            <div className={styles.copy}>Copyright © 2023 Sicvolo. All rights reserved</div>
          </div>
          <div className={styles.copyMob}>Copyright © 2023 Sicvolo. All rights reserved</div>
        </div>
       
      </div>
     
    </footer>
  );
}
