import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import styles from "./NavMain.module.scss";
import { showCard} from "../../redux/slices/cardSlice"
import {useDispatch} from "react-redux";

export default function NavMain() {

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const dispatchThenRoute = ( myPath) => {

//     return ()=>{
// console.log("nav")
//     dispatch(showCard(false))
//     navigate(myPath);
//     }
    
// }; 


  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link to="/about"  className={styles.navLink}>
            About us
          </Link>
        </li>
        <li>
          <a href="/catalog/belts"  className={styles.navLink}>
            Belts
          </a>
        </li>
        <li>
        <a href="/catalog/rings" className={styles.navLink}>
            Rings
            </a>
        </li>
        <li>
        <a href="/catalog/accessories" className={styles.navLink}>
            Accessories
            </a>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/faq" className={styles.navLink}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
