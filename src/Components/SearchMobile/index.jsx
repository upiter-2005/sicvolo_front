import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slices/productsSlice";
import {setSearchMob} from "../../redux/slices/userSlice";
import {Link} from "react-router-dom"
import styles from "./SearchMobile.module.scss"

export default function SearchMobile() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state=>state.products.items)
  const searchMob = useSelector(state=>state.user.searchMob);
  const [val, setVal] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  
  const searchHandle = (e) => {
    setVal(e.target.value)
    if(val.length <2){setSearchResult([]);return false}
    
    const res = allProducts?.filter(obj => obj.name.toLowerCase().includes(val));
    console.log(e.target.value);
    setSearchResult(res);
    console.log(res);
  }


  
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
   

       <div className={searchMob ? `${styles.SearchMobile} ${styles.activeMobMnu}` : ''}>
       <img src="/img/close-cart.svg" className={styles.close} alt="" onClick={()=> dispatch(setSearchMob(false))} />
          
          <input type="text" value={val} placeholder="Search ..." onChange={e => searchHandle(e)} />
          <div className={styles.searchList}>
            <ul>
              {searchResult.map(obj => <li><Link to={`/product/${obj.slug}`} onClick={()=> dispatch(setSearchMob(false))}>{obj.name}</Link></li>)}
            </ul>
          </div>
        </div>
        
    </>
 
  )
}
