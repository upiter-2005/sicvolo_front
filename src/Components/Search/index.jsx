import {useState, useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slices/productsSlice";
import {Link} from "react-router-dom"
import styles from "./Search.module.scss"

export default function Search() {
  const dispatch = useDispatch();
  const allProducts = useSelector(state=>state.products.items)
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
       <div className={styles.search}>
          <img src="/img/search.svg" className={styles.searchIco} alt="" />
           <img src="/img/close-cart.svg" className={styles.closeSearch} alt="" onClick={()=> {setSearchResult([]); setVal('')}} /> 
          <input type="text" value={val} placeholder="Search ..." onChange={e => searchHandle(e)} />
          <div className={styles.searchList}>
            <ul>
              {searchResult.map(obj => <li><Link to={`/product/${obj.slug}`} >{obj.name}</Link></li>)}
            </ul>
          </div>
        </div>
        <a href="#" className={styles.mobSearchOn}><img src="img/search.svg" alt="" /></a>
    </>
 
  )
}
