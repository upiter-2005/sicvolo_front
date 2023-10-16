import React from "react";
import styles from "./Footer.module.scss";

export default function Footer() {
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
              <a href="#">
                <img src="/img/insta.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/fb.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/twitter.svg" alt="" />
              </a>
              <a href="#">
                <img src="/img/youtube.svg" alt="" />
              </a>
            </div>
          </div>
          <div className={styles.footer_col_2}>
            <div className={styles.footer_column}>
              <p>Sicvolo</p>
              <ul>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Partnership</a>
                </li>
                <li>
                  <a href="#">Care</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_column}>
              <p>Categories</p>
              <ul>
                <li>
                  <a href="#">Rings</a>
                </li>
                <li>
                  <a href="#">Belts</a>
                </li>
                <li>
                  <a href="#">Accessories</a>
                </li>
              </ul>
            </div>
            <div className={styles.footer_column}>
              <p>Conditions</p>
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Payment & Shipping</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Return Policy</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.footer_col_3}>
            <p>Subscribe to receive special offers and promotions</p>
            <div className={styles.subscribe_block}>
              <img src="img/search.svg" alt="" />
              <input type="text" placeholder="Enter you email..." />
            </div>
            <div className={styles.copy}>Copyright © 2023 Sicvolo. All rights reserved</div>
          </div>
          <div className={styles.copyMob}>Copyright © 2023 Sicvolo. All rights reserved</div>
        </div>
       
      </div>
     
    </footer>
  );
}
