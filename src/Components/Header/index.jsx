import {useState, useEffect} from "react";
import NavMain from "../NavMain";
import styles from "./Header.module.scss";
import Search from "../../Components/Search";
import {Link, useLocation} from "react-router-dom";
import { useSelector} from "react-redux";
import {showCard} from "../../redux/slices/cardSlice"
import {useDispatch } from "react-redux";


export default function Header() {
  const location = useLocation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const user = useSelector(state=>state.user.user);
  const items = useSelector(state=>state.card.items);


  useEffect(()=>{
    setUserName(user?.user_nicename);
    
  }, [user]);

  const cartOpen = () => {
    dispatch(showCard(true))
    console.log("open")
  }




  return (
    <>
    
    <div className="container">
      <div className={styles.header}>
        <div className={styles.header_left}>
          <a href="#" className={styles.mobMnu} alt="menu"><img src="/img/bar.svg" alt="" /></a>
          <Search />
        </div>
       
        
        <Link to="/" alt="sic volo" className={styles.logo}>
          <img src="/img/logo.svg" alt="" />
        </Link >

        <div className={styles.headerLinks}>
          {userName ? (
            <Link to="/account">
            {userName}
            <img src="/img/user.svg" alt="" />
          </Link>
          ) : (
            <Link to="/login">
            {userName}
            <img src="/img/user.svg" alt="" />
          </Link>
          )}
          
          {location.pathname === "/checkout" ? '' : (
            <div href="#" className={styles.cartHeaderWrap} onClick={cartOpen}  id="popupCartBtn">
            <img src="/img/cart.svg" alt="" /> <span>{items.length}</span>
          </div>
          ) }
          
        </div>
      </div>
     
    </div>
     <NavMain />
    </>
    
  );
}
