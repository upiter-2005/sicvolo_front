import { useState, useEffect } from "react";

import styles from "./Login.module.scss";
import Runing from "../../Components/Runing";
import {Link, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {setAuth, setUser, setAditionalDataUser, setAddresses} from "../../redux/slices/userSlice";
import axios from 'axios';


export default function Login() {
  const isAuth = useSelector(state => state.user.isAuth);
  const user = useSelector(state => state.user.user);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passType, setPassType] = useState('password');
  const [remember, setRemember] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

console.log(remember);
  const getMe = async() => {
    const token = localStorage.getItem('token');
    axios.get( `${process.env.REACT_APP_SITE_URL}/wp-json/wp/v2/users/me`, 
                {
                  headers: {
                    Authorization: `Bearer ${token}`
                  }
                } 
   ).then(res=>{
        console.log(res.data);
  
          localStorage.setItem( 'userPhone', res.data.acf.user_phone );
          localStorage.setItem( 'userName', res.data.acf.user_first_name );
          localStorage.setItem( 'userLastName', res.data.acf.user_last_name );
          localStorage.setItem( 'city_1', res.data.acf.city_1 );
          localStorage.setItem( 'city_2', res.data.acf.city_2 );
          localStorage.setItem( 'city_3', res.data.acf.city_3 );
          localStorage.setItem( 'city_4', res.data.acf.city_4 );
          localStorage.setItem( 'country_1', res.data.acf.country_1 );
          localStorage.setItem( 'country_2', res.data.acf.country_2 );
          localStorage.setItem( 'country_3', res.data.acf.country_3 );
          localStorage.setItem( 'country_4', res.data.acf.country_4 );
          localStorage.setItem( 'entry_1', res.data.acf.entry_1 );
          localStorage.setItem( 'entry_2', res.data.acf.entry_2 );
          localStorage.setItem( 'entry_3', res.data.acf.entry_3 );
          localStorage.setItem( 'entry_4', res.data.acf.entry_4 );
          localStorage.setItem( 'flat_1', res.data.acf.flat_1 );
          localStorage.setItem( 'flat_2', res.data.acf.flat_2 );
          localStorage.setItem( 'flat_3', res.data.acf.flat_3 );
          localStorage.setItem( 'flat_4', res.data.acf.flat_4 );
          localStorage.setItem( 'postcode_1', res.data.acf.postcode_1 );
          localStorage.setItem( 'postcode_2', res.data.acf.postcode_2 );
          localStorage.setItem( 'postcode_3', res.data.acf.postcode_3 );
          localStorage.setItem( 'postcode_4', res.data.acf.postcode_4 );
          localStorage.setItem( 'street_1', res.data.acf.street_1 );
          localStorage.setItem( 'street_2', res.data.acf.street_2 );
          localStorage.setItem( 'street_3', res.data.acf.street_3 );
          localStorage.setItem( 'street_4', res.data.acf.street_4 );


          localStorage.setItem( 'userId', res.data.id );
          localStorage.setItem( 'rememberMe', true );
       
        // const addresses = {
        //   city_1: res.data.acf.city_1,
        //   city_2: res.data.acf.city_2,
        //   city_3: res.data.acf.city_3,
        //   city_4: res.data.acf.city_4,
        //   country_1: res.data.acf.country_1,
        //   country_2: res.data.acf.country_2,
        //   country_3: res.data.acf.country_3,
        //   country_4: res.data.acf.country_4,
        //   entry_1: res.data.acf.entry_1,
        //   entry_2: res.data.acf.entry_2,
        //   entry_3: res.data.acf.entry_3,
        //   entry_4: res.data.acf.entry_4,
        //   flat_1: res.data.acf.flat_1,
        //   flat_2: res.data.acf.flat_2,
        //   flat_3: res.data.acf.flat_3,
        //   flat_4: res.data.acf.flat_4,
        //   postcode_1: res.data.acf.postcode_1,
        //   postcode_2: res.data.acf.postcode_2,
        //   postcode_3: res.data.acf.postcode_3,
        //   postcode_4: res.data.acf.postcode_4,
        //   street_1: res.data.acf.street_1,
        //   street_2: res.data.acf.street_2,
        //   street_3: res.data.acf.street_3,
        //   street_4: res.data.acf.street_4,
        // }
        // dispatch(setAddresses ( addresses));
        dispatch(setAditionalDataUser(
          {
            user_phone: res.data.acf.user_phone,
            user_last_name: res.data.acf.user_last_name,
            user_first_name: res.data.acf.user_first_name,
            id: res.data.id
          }
        ));
        
          navigate('/account');
        
      }
    ).catch(err => console.log(err))
  }

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
          localStorage.setItem( 'userEmail', user_email );
         
					

          dispatch(setAuth(token));
          dispatch(setUser({ token, user_nicename, user_email }));
          getMe();
					console.log( res.data );
      
          
				} )
				.catch( err => {
          alert(err.response.data.message);
					console.log( { error: err.response.data.message, loading: false } );
				} )
}

useEffect(()=>{
  
}, [isAuth])

const toggleType = () => {
  if( passType === "password"){
    setPassType('text');
  }else{
    setPassType('password');
  }
}

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
              type="text"
              name="email"
              value={login}
              onChange={(e)=>setLogin(e.target.value)}
              placeholder="User name or email adress"
            />

            <div className={styles.passwordBlock}>
              <input
               type={passType}
                name="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="Password" 
              />

              <span className={styles.showPass} onClick={toggleType}>
              {(passType === "password") ? (<img src="img/hide.svg" alt="" />) : (<img src="img/show.svg" alt="" />)}
                
              </span>
            </div>

            <div className={styles.formCheck} onClick={()=> setRemember(!remember)}>
              <span className={styles.remember} >
                {remember && (<img src="img/greenCheck.svg" alt="" />)}
              </span>{" "}
              Remember me
            </div>

            <button type="submit" disabled={isAuth} class={styles.accBtn}>
              Log In
            </button>
            <p className={styles.ask}>
              Forgot your <Link to="/recovery">password</Link>?
            </p>
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
