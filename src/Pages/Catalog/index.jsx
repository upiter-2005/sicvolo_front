import {useEffect, useState} from "react";
import FilterButton from "../../Components/FilterButton";
import ProductCard from "../../Components/ProductCard";
import Runing from "../../Components/Runing";
import {useDispatch, useSelector} from "react-redux";
import {getProducts, plusActiveCat, setActiveCats, setPageCat} from "../../redux/slices/productsSlice";
import {Link, useParams} from "react-router-dom";
import qs from "qs";
import Skeleton from "../../Components/Skeleton";

import styles from "./Catalog.module.scss";

const allCats = [
  {id: 19, name: "Belts", link: "belts"},
  {id: 20, name: "Rings", link: "rings"},
  {id: 22, name: "Accessories", link: "accessories"},
  {id: 18, name: "For her", link: "for-her"},
  {id: 17, name: "For him", link: "for-him"},
  {id: 1, name: "All products", link: "All products"},
  {id: 21, name: "Haute Skull Couture", link: "haute-skull-couture"},
  {id: 45, name: "Majestic Wildlife", link: "majestic-wildlife"},
  {id: 32, name: "Nautical Treasures", link: "nautical-treasures"},
  {id: 47, name: "Blossom symphony", link: "blossom-symphony"},
];

const categoriesTop = [
  {id: 19, name: "Belts", link: "belts"},
  {id: 20, name: "Rings", link: "rings"},
  {id: 22, name: "Accessories", link: "accessories"},
  {id: 18, name: "For her", link: "for-her"},
  {id: 17, name: "For him", link: "for-him"},
  {id: 1, name: "All products", link: "All products"},
];
const subCategories = [
  {id: 21, name: "Haute Skull Couture", link: "haute-skull-couture"},
  {id: 45, name: "Majestic Wildlife", link: "majestic-wildlife"},
  {id: 32, name: "Nautical Treasures", link: "nautical-treasures"},
  {id: 47, name: "Blossom symphony", link: "blossom-symphony"},
];

export default function Catalog() {
  const {cat} = useParams();
 // const[products, setProducts] = useState([])
  const[productsFiltered, setProductsFiltered] = useState([])
  const allProducts = useSelector(state=>state.products.items)
  const isLoaded = useSelector(state=>state.products.isLoaded)
  const activeCats = useSelector(state=>state.products.activeCats)
  const dispatch = useDispatch();

  const filterProduct = (categiriesArr, catId) => {
   return categiriesArr.some((el)=> el.id === catId);
  }


  useEffect(() => {
    console.log(activeCats);
    let filterArr = [];
    if(activeCats.length == 0 ){
      console.log("0cats");
    }
      if(activeCats.length > 0){
      
        activeCats.forEach(catId => {
          console.log(catId);

          if(catId === 1){
            filterArr = allProducts;
            return;
          }else{
            let temp = allProducts?.filter((obj)=> filterProduct(obj.categories, catId)) ;
            console.log(temp)
            filterArr = filterArr.concat(temp)
          }
          
           

        });
        setProductsFiltered(filterArr);
        console.log(filterArr);
      }else{
        console.log("non active cats");
        // let temp = products?.filter((obj)=> filterProduct(obj.categories, 1)) ;
        // setProductsFiltered(temp);
      }
  }, [activeCats]);


  useEffect(() => {
    // const queryCat = categoriesTop.find(obj => cat === obj.name.toLocaleLowerCase()) 
    // dispatch(plusActiveCat(queryCat.id));
    dispatch(getProducts());
   
    window.scrollTo(0, 0);

  }, []);

  // useEffect(() => {
  //   setProducts(allProducts); //DB product all list
  //   //setProductsFiltered(allProducts)
  // }, [allProducts]);

 
  


  useEffect(() => {
    //setProducts(allProducts);

   if (cat) {
      const queryCat = allCats.find(obj => cat === obj.link) 
     
       const filterArr = allProducts.filter((obj)=> filterProduct(obj.categories, queryCat.id));
       setProductsFiltered(filterArr);
       dispatch(setPageCat(queryCat.id));
    //dispatch(plusActiveCat(queryCat.id));
    
    }else{
      console.log("all prod");
      setProductsFiltered(allProducts);
      dispatch(setPageCat(1))
      dispatch(setActiveCats())
    }
    
  }, [allProducts, cat]);

  
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
              <FilterButton  value={obj.name} catId={obj.id} key={obj.id} />
            ))}
            
          </div>
          <div className={styles.Productfilter_box}>
            
            {subCategories.map((obj, i) => (
              <FilterButton  value={obj.name} catId={obj.id} key={obj.id} />
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
