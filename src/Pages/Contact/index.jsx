import {useState} from "react";
import axios from "axios";
import Runing from "../../Components/Runing";
import { useNavigate } from "react-router-dom";
import styles from "./Contact.module.scss";

export default function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  

  const contactHandler = async(e) => {
    e.preventDefault();
    const params = {name, phone, email, comment};
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/api/mail/sendMail`, params);
      console.log(data);
      if(data.status === 200){
        navigate('/thank');
      }
      return data;
    } catch (e) {
      console.log(e.message);
    }

  }
  return (
    <>
      <div className={styles.contactWrapper}>
        <div className="row">
          <div className={styles.contactWrapper_left}>
            <p>Let’s</p>
            <p>gET IN</p>
            <p>TOUCH</p>
            <img src="img/ring_g.png" alt="" />
          </div>
          <div className={styles.contactWrapper_right}>
            <p className={styles.contactWrapper_title}>Customer Care:</p>
            <div className={styles.contactWrapper_contacts}>
              <div className={styles.contact_item}>
                <span>Message us:</span>
                <a href="#">
                  <img src="img/tg-r.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/wh-r.svg" alt="" />
                </a>
                <a href="#">
                  <img src="img/viber-r.svg" alt="" />
                </a>
                <p>
                  <a href="tel:+393888957741">+39-388-895-77-41</a>
                </p>
              </div>

              <div className={styles.contact_item}>
                <span>E-mail us:</span>
                <p>
                  <a href="mailto:vetolgold@gmail.com">vetolgold@gmail.com</a>
                </p>
              </div>
            </div>

            <p className={styles.contactWrapper_title}>Contact us:</p>
            <form onSubmit={contactHandler}>
              <div className={styles.input_50}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" required />
              </div>
              <div className={styles.input_50}>
                <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your mobile phone" required />
              </div>
              <div className={styles.input_100}>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
              </div>
              <div className={styles.input_100}>
                <textarea placeholder="Your question " onChange={(e)=>setComment(e.target.value)} value={comment}></textarea>
              </div>
              <div className={styles.submit_wrap}>
                <button className={styles.submitBtn}>
                  <img src="img/submit.svg" alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Runing />
    </>
  );
}
