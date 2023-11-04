import React from "react";
import { Link, useNavigate  } from "react-router-dom";
import styles from "./SearchMobile.module.scss";
import { setmobMnu} from "../../redux/slices/userSlice"
import {useDispatch, useSelector} from "react-redux";

export default function SearchMobile() {
  const mobMnu = useSelector(state=>state.user.mobMnu);
  const dispatch = useDispatch();

  return (
    <nav className={mobMnu ? `${styles.MnuMobile} ${styles.activeMobMnu}` : ''}>
      <img src="/img/close-cart.svg" className={styles.close} alt="" onClick={()=> dispatch(setmobMnu(false))} />
      <ul>
        <Link to="/" alt="sic volo" className={styles.logo} onClick={()=> dispatch(setmobMnu(false))}>
          <img src="/img/logo.svg" alt="" />
        </Link >
        <li>
          <Link to="/about"  className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            About us
          </Link>
        </li>
        <li>
          <a href="/catalog/belts"  className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            Belts
          </a>
        </li>
        <li>
        <a href="/catalog/rings" className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            Rings
            </a>
        </li>
        <li>
        <a href="/catalog/accessories" className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            Accessories
            </a>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            Contact us
          </Link>
        </li>
        <li>
          <Link to="/faq" className={styles.navLink} onClick={()=> dispatch(setmobMnu(false))}>
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
