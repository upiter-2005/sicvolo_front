import React from "react";

import Runing from "../../Components/Runing";

import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className="row">
          <div className={styles.contactWrapper_left}>
            <p>Let’s</p>
            <p>gET IN</p>
            <p>TOUCH</p>
            <img src="img/ring_g.png" alt="" />
          </div>
          <div className={styles.contactWrapper_right}>
            <p className={styles.contactWrapper_title}>Customer Care:</p>
            <div className={styles.contactWrapper_contacts}>
              <div className={styles.contact_item}>
                <span>Message us:</span>
                <a href="#">
                  <img src="img/tg-r.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/wh-r.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/viber-r.svg" alt="" />
                </a>
                <p>
                  <a href="tel:+393888957741">+39-388-895-77-41</a>
                </p>
              </div>

              <div className={styles.contact_item}>
                <span>E-mail us:</span>
                <p>
                  <a href="mailto:info@sicvolo.com">info@sicvolo.com</a>
                </p>
              </div>
            </div>

            <p className={styles.contactWrapper_title}>Contact us:</p>
            <form>
              <div className={styles.input_50}>
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className={styles.input_50}>
                <input type="tel" placeholder="Enter your mobile phone" />
              </div>
              <div className={styles.input_100}>
                <input type="email" placeholder="Email" />
              </div>
              <div className={styles.input_100}>
                <textarea placeholder="Your question "></textarea>
              </div>
              <div className={styles.submit_wrap}>
                <button className={styles.submitBtn}>
                  <img src="img/submit.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Runing />
    </>
  );
}
