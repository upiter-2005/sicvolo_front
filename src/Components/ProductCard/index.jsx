import React from "react";
import styles from "./ProductCard.module.scss";
import {Link} from "react-router-dom"

export default function ProductCard({ isCentered, name, img, price, link, id }) {
  return (
    <div
      className={
        isCentered ? `${styles.isCentered} ${styles.ProductCard}` : `${styles.ProductCard}`
      }>
      <Link to={`/product/${link}`}><img src={img} alt="" /></Link>  
      <p className={styles.ProductCard_title}>{name} </p>
      <div className={styles.ProductCard_price}>$ {price}</div>
      <Link to={`/product/${link}`} className={styles.ProductCard_link}>
        Details
      </Link>
    </div>
  );
}
