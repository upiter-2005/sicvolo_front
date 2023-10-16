import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from "./Account.module.scss";
import {logout} from "../../redux/slices/userSlice";


import Profile from "../../Components/Profile";


export default function Account() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  const isAuth = useSelector(state => state.user.isAuth);
  const [tab, setTab] = useState("profile");


  const handlerLogout = () => {
    dispatch(logout());
    navigate('/login');
  }

  

  return (
    <div className={styles.accountWrapper}>
      <div className={styles.left}>
        <button onClick={() => setTab('orders')}>My orders</button>
        <button onClick={() => setTab('profile')}>Profile</button>
        <button onClick={() => setTab('adress')}>Adresses</button>
        <button onClick={handlerLogout}>Exit</button>

      </div>
      <div className={styles.right}>
        {tab === "profile" && <Profile />}
      </div>
    </div>
  )
}
