import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"

import styles from "./Profile.module.scss";

export default function Profile() {
    const user = useSelector(state => state.user.user);

    const dispatch = useDispatch();
  return (
    <div className={styles.profile}>
        <h2>Profile</h2>
        <div className={styles.profile_item}>
            <input type="text" value="Stepan" placeholder='Enter your first name' />
        </div>
        <div className={styles.profile_item}>
            <input type="text" value="" placeholder="Enter your last name"  />
        </div>
        <div className={styles.profile_item}>
          <button><img src="/img/edit.svg" alt="edit" /> edit</button>
           <input type="text" value="380 73 123 45 67" className={styles.pureInput} />
        </div>
        <div className={styles.profile_item}>
          <button><img src="/img/edit.svg" alt="edit" /> edit</button>
           <input type="text" value="mail.gmail.com" className={styles.pureInput} />
        </div>
        <div className={styles.profile_item}>
          <button><img src="/img/edit.svg" alt="edit" /> edit</button>
           <input type="text" value="password" className={styles.pureInput} />
        </div>
        <button className={styles.saveBtn}>Save changes</button>
    </div>
  )
}
