import { useState, useEffect } from "react";
import styles from "./FilterButton.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setCurrentCat} from "../../redux/slices/productsSlice";

export default function FilterButton({ changeCategory, value, catId }) {

  const currentCat = useSelector(state=>state.products.currentCat);
  const [isActive, setIsActive] = useState(false);


  const changeHandler = (val) => {
    changeCategory(val);
     setIsActive((state) => !state);
  };

  useEffect(()=>{
    
    if(currentCat === catId){
      setIsActive(true)
    }else{
      setIsActive(false)
    }
  },[currentCat])
  return (
    <button
      className={isActive ? `${styles.isActive} ${styles.filter_item} ` : `${styles.filter_item} `}
      onClick={() => changeHandler({ value })}>
      {isActive ? <img src="/img/check.svg" alt="" /> : <img src="/img/plus.svg" alt="" />} {value}
    </button>
  );
}
