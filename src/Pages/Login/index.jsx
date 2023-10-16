import { useState, useEffect } from "react";

import styles from "./Login.module.scss";
import Runing from "../../Components/Runing";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {setAuth, setUser} from "../../redux/slices/userSlice";
import axios from 'axios';


export default function Login() {
  const isAuth = useSelector(state => state.user.isAuth);
  const user = useSelector(state => state.user.user);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();


const handleSubmit = (e) =>{
  e.preventDefault();
  console.log("submit")
  const data = {
    username: login, 
    password
  }

  axios.post( `${process.env.REACT_APP_SITE_URL}/wp-json/jwt-auth/v1/token`, data )
				.then( res => {

					if ( undefined === res.data.token ) {
						console.log( { error: res.data.message, loading: false } );
           
						return;
					}

					const { token, user_nicename, user_email } = res.data;

					localStorage.setItem( 'token', token );
					localStorage.setItem( 'userName', user_nicename );

          dispatch(setAuth(token));
          dispatch(setUser({ token, user_nicename, user_email }));
					console.log( res.data );
          navigate('/account');
          //getMe()
				} )
				.catch( err => {
          alert(err.response.data.message);
					console.log( { error: err.response.data.message, loading: false } );
				} )


}

useEffect(()=>{
  if(localStorage.getItem('token') || isAuth){
    navigate('/account');
  }
}, [isAuth])

  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className={styles.loginWrapper}>
        <img src="img/rings_3.png" alt="" className={styles.absImg} />
        <div className={styles.loginWrapper_left}>
          <p>wE’D LOVE YOU TO</p>
          <p>BECAME A PART OF OUR</p>
          <p>community </p>
        </div>
        <div className={styles.loginWrapper_right}>
          <form onSubmit={handleSubmit}>
            <h1>Log In</h1>

            <input 
              type="email"
              name="email"
              value={login}
              onChange={(e)=>setLogin(e.target.value)}
              placeholder="User name or email adress"
            />

            <div className={styles.passwordBlock}>
              <input
               type="password"
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" 
              />

              <button className={styles.showPass}>
                <img src="img/show.svg" alt="" />
              </button>
            </div>

            <div className={styles.formCheck}>
              <button className={styles.remember}>
                <img src="img/greenCheck.svg" alt="" />
              </button>{" "}
              Remember me
            </div>

            <button type="submit" disabled={isAuth} class={styles.accBtn}>
              Log In
            </button>
            {/* <p className={styles.ask}>
              Forgot your <a href="#">password</a>?
            </p> */}
            <p className={styles.ask}>
              Don't have an account yet? <Link to="/register">Register</Link>
            </p>
          </form>
        </div>
      </div>
      <Runing />
    </>
  );
}
