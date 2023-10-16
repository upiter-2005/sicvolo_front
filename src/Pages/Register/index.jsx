import { useState, useEffect } from "react";
import styles from "./Register.module.scss";
import Runing from "../../Components/Runing";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {registerUser} from "../../redux/slices/userSlice"



export default function Register() {
  const [isShow, setIsShow] = useState(false);
  const [username, setUsername] = useState(false);
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const [repeatPassword, setRepeatPassword] = useState(false);
  const navigate = useNavigate();

  const user = useSelector(state => state.user.user);
  const wasRegistered = useSelector(state => state.user.wasRegistered);

  const dispatch = useDispatch();

  const submitHandler = async(e) => {
    console.log('submit')
    e.preventDefault();
    const data = {
      username,
      email,
      password,
    }
    
    dispatch(registerUser(data));
  }

  useEffect(()=>{
    if(wasRegistered) navigate('/login');
  }, [wasRegistered]);

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
          <form onSubmit={submitHandler}>
            <h1>Sign up</h1>

            <input type="text" placeholder="Login name" required={true} onChange={(e)=>setUsername(e.target.value)} />
            <input type="text" placeholder="User name or email adress" required={true} onChange={(e)=>setEmail(e.target.value)}/>
            <div className={styles.passwordBlock}>
              <input type="password" placeholder="Password" required={true} onChange={(e)=>setPassword(e.target.value)} />
              <button className={styles.showPass}>
                <img src="img/show.svg" alt="" />
              </button>
            </div>
            <div className={styles.passwordBlock}>
              <input type="password" placeholder="Confirm password" onChange={(e)=>setRepeatPassword(e.target.value)} />
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
            <div className={styles.formCheck}>
              <button className={styles.remember}>
                <img src="img/greenCheck.svg" alt="" />
              </button>{" "}
              Subscribe for newsletter
            </div>

            <button type="submit" class={styles.accBtn} >
              Sign up
            </button>
            
            
          </form>
        </div>
      </div>
      <Runing />
    </>
  );
}
