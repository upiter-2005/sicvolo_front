import {useEffect, useState, useRef} from "react";
import FilterButton from "../../Components/FilterButton";
import ProductCard from "../../Components/ProductCard";
import Runing from "../../Components/Runing";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, setCurrentCat} from "../../redux/slices/productsSlice";
import {Link, useParams} from "react-router-dom";
import qs from "qs";
import Skeleton from "../../Components/Skeleton";

import styles from "./Catalog.module.scss";

const categoriesTop = [
  {id: 19, name: "Belts"},
  {id: 20, name: "Rings"},
  {id: 22, name: "Accessories"},
  {id: 18, name: "For her"},
  {id: 17, name: "For him"},
  {id: 1, name: "All products"},
];
const subCategories = [
  {id: 21, name: "Haute Skull Couture"},
  {id: 45, name: "Majestic Wildlife"},
  {id: 32, name: "Nautical Treasures"},
];

export default function Catalog() {
  const {cat} = useParams();
  const download = useRef(false);
  const[products, setProducts] = useState([])
  const[productsFiltered, setProductsFiltered] = useState([])
  const allProducts = useSelector(state=>state.products.items)
  const isLoaded = useSelector(state=>state.products.isLoaded)
  const currentCat = useSelector(state=>state.products.currentCat)
  const dispatch = useDispatch();

  const filterProduct = (categiriesArr, catId) => {
   return categiriesArr.some((el)=> el.id === catId);
  }


  const changeCategory = (catId) => {
    dispatch(setCurrentCat(catId))

    if(catId === 1){
      setProductsFiltered(products)
    }else{
      const filterArr = products?.filter((obj)=> filterProduct(obj.categories, catId));
      setProductsFiltered(filterArr);
    }
   
  };


  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    setProducts(allProducts);
    setProductsFiltered(allProducts)
  }, [allProducts]);

  useEffect(() => {
    console.log(cat)
   if (cat) {
      //const params = qs.parse(window.location.search.substring(1));
      const queryCat = categoriesTop.find(obj => cat === obj.name.toLocaleLowerCase()) 
      changeCategory(queryCat.id)
      const filterArr = products.filter((obj)=> filterProduct(obj.categories, queryCat.id));
     
      setProductsFiltered(filterArr)
      
    }
    
  }, [products, cat]);

  

  const items = productsFiltered?.map((obj, i)=> <ProductCard name={obj.name} img={obj.images[0]?.src} price={obj.price} link={obj.slug} key={i}  />)

  const skeleton = [...new Array(8)].map((item, i) => <Skeleton key={i} />);

  return (
    <> 
      <div className={styles.catalogWrapper}>
        <div className="breadcrumbs">
          <Link to="/">Home page</ Link>
          <span>Catalog</span>
        </div>
        <h1>Catalog</h1>

        <div className={styles.Productfilter}>
          <p>Choose category</p>
          <div className={styles.Productfilter_box}>
            {categoriesTop.map((obj, i) => (
              <FilterButton changeCategory={()=>changeCategory(obj.id)} value={obj.name} catId={obj.id} key={i} />
            ))}
            <br />
            {subCategories.map((obj, i) => (
              <FilterButton changeCategory={()=>changeCategory(obj.id)} value={obj.name} catId={obj.id} key={i} />
            ))}
          </div>
          <p>Results ({productsFiltered?.length})</p>
        </div>
        <div className={styles.productList}>
       
          {isLoaded === false ? skeleton : items  }
        </div>
        <div className={styles.showMoreWrap}>
          <button>Show more</button>
        </div>
      </div>
      <Runing />
    </>
  );
}
