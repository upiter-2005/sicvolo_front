import React from 'react'
import styles from "./Thank.module.scss"
import {Link} from "react-router-dom"
import Runing from "../../Components/Runing"

export default function Thank() {
  return (
    <>
     <div className={styles.NotFound}>
      <div className={styles.NotFoundWrapper}>
        <div className={styles.left}>
         <p className={styles.firstTitle}>Thank you for  </p>
         <p className={styles.secondTitle}>your request! <img src="/img/thank-ring.svg" alt="" /></p>
            <span>We will contact you soon.</span>
            <Link to="/" className={styles.homeBtn}>Home page</Link>
        </div>
        <div className={styles.right}>
          <img src="/img/thank.jpg" alt="" />
        </div>
      </div>
    </div>
    <Runing />
    </>
   
  )
}
