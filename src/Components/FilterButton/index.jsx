import { useState, useEffect } from "react";
import styles from "./FilterButton.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {plusActiveCat, minusActiveCat,setPageCat} from "../../redux/slices/productsSlice";



export default function FilterButton({ value, catId }) {

  const activeCats = useSelector(state=>state.products.activeCats);
  const pageCat = useSelector(state=>state.products.pageCat)
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  const changeHandler = (val) => {
    dispatch(setPageCat(null))
    console.log(activeCats.length);
    console.log(isActive);
    if(isActive === false){
      dispatch(plusActiveCat(val));
      setIsActive(true);
    }else{
      // if(activeCats.length === 0){
      //   return;
      // }else{
      //   console.log("12312312");
       
      // }
      dispatch(minusActiveCat(val));
      setIsActive(false);
    }
    if(val === 1 ){
      console.log("allllllllllllllllllll");
    }
    //changeCategory(val);
     
  };

  useEffect(()=>{
    // if(pageCat === 1){
    //   setIsActive(true);
    //   return
    // }
    console.log(activeCats);
    if( pageCat === catId){
      setIsActive(true);
    }else{setIsActive(false);}

    activeCats?.forEach(obj => {
      if(obj === catId){setIsActive(true)}
    })
  },[pageCat, catId, activeCats]);


  return (
    <button
      className={isActive ? `${styles.isActive} ${styles.filter_item} ` : `${styles.filter_item} `}
      onClick={() => changeHandler({ catId })}>
      {isActive ? <img src="/img/check.svg" alt="" /> : <img src="/img/plus.svg" alt="" />} {value}
    </button>
  );
}
