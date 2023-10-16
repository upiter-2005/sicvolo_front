import React from 'react'
import styles from "./Search.module.scss"

export default function Search() {
  return (
    <>
       <div className={styles.search}>
          <img src="img/search.svg" alt="" />
          <input type="text" placeholder="Search ..." />
        </div>
        <a href="#" className={styles.mobSearchOn}><img src="img/search.svg" alt="" /></a>
    </>
 
  )
}
