import {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Product.module.scss"
import ProductImagesSlider from "../../Components/ProductSlider"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slices/productsSlice"
import {addToCart, showCard} from "../../redux/slices/cardSlice"
import Carousel from "../../Components/Carousel"
import{Link} from "react-router-dom"
import Select from 'react-select'


const beltSizes = [65,70, 75, 80, 85, 90, 95, 100, 105, 110, 115];
const optionsRings = [
    { value: 18.47, label: 18.47},
    { value: 18.15, label: 18.15 },
    { value: 18.79, label: 18.79 },
    { value: 19.11, label: 19.11 },
    { value: 19.43, label: 19.43 },
    { value: 19.75, label: 19.75 },
    { value: 20.06, label: 20.06 },
    { value: 20.38, label: 20.38 },
    { value: 20.70, label: 20.70 },
    { value: 21.02, label: 21.02 },
    { value: 21.34, label: 21.34 },
    { value: 21.66, label: 21.66 },
    { value: 21.97, label: 21.97 },
    { value: 22.29, label: 22.29 },
    { value: 22.61, label: 22.61 },
    { value: 22.93, label: 22.93 },
  ]

export default function Product() {
    const[product, setProduct] = useState();

    
    const[cartName, setCartName] = useState('');
    const[cartPrice, setCartPrice] = useState(0);
    const[cartSku, setCartSku] = useState(0);
    const[cartSize, setCartSize] = useState(0);
    const[cartQty, setCartQty] = useState(1);

    const[variations, setVariations] = useState([]);
    const allProducts = useSelector(state=>state.products.items)
    const dispatch = useDispatch();

const {id} = useParams();

    const findProduct = useCallback(()=>{
        if(allProducts.length > 0){
            console.log("exist!");
        }else{
            dispatch(getProducts());
            console.log("new req!");
        }
    }, [])

    const switchVariation = (name, price, sku) => {
        setCartName(name) 
        setCartPrice(price)
        setCartSku(sku)
    }

    const putInCart = () => {
        if(product?.meta_data[6].value === "belt" && !cartName){alert('Chose variation'); return;}
        if(product?.meta_data[6].value === "belt" && !cartSize){alert('Chose size'); return;}
        let item = {};
        if(product?.meta_data[6].value === "ring"){
             item = {
                
                id: product.id,
                name: cartName || product.name,
                price: cartPrice ||  product.price,
                sku: product.sku,
                img: product?.images[0].src,
                size: cartSize,
                qty: cartQty
               };
        }else{
            item = {
                id: product.id,
                name: cartName || product.name,
                price: cartPrice ||  product.price,
                sku: cartSku + cartSize || product.sku,
                img: product?.images[0].src,
                size: cartSize,
                qty: cartQty
               };
        }
       
       dispatch(addToCart(item));
       dispatch(showCard(true));
    }


    const plusQty = () => {
        setCartQty(cartQty + 1)
    }
    const minusQty = () => {
        if(cartQty === 1){  return false; }
        setCartQty(cartQty - 1)
        
    }

    const find = (event) => {
        setCartSize(event.value)
        console.log(event.value)
      }

    useEffect(()=>{
        const data = allProducts.find(obj => obj.slug === id);
        setProduct(data)
    },[allProducts]);

    useEffect(()=>{
        if(product?.variations){
             try {
                 const fetchvariationsromises =  product.variations.map(el =>
                     axios.post(`http://localhost:5000/api/products/getProductById`, { id: el })
                 );
                 Promise.all(fetchvariationsromises).then((values) => {
                     setVariations(prev => [...prev, values]);
                 
                 });
                 

             } catch (err) {
                 console.log(err);
             }
         }
    },[product])

    useEffect(()=>{
        findProduct()
    },[])

  return (
    <>
    
     <div className={styles.productWrapp}>
     <div className="breadcrumbsProduct" >
          <Link to="/">Home page</Link>
          <Link to="/catalog">Catalog</Link>
          <span>{product?.name}</span>
        </div>
<div className={styles.SliderWrap}>
      
    {product?.images && <Carousel images={product?.images} />}
    

</div>
<div className={styles.productData}>

  <div className={styles.productData_top}>
      <h1 className={styles.productData_name}>{cartName || product?.name } </h1>
      <p className={styles.productData_sku}>{ cartSku || product?.sku}</p>
      <div className={styles.productData_price}>$ {cartPrice || product?.price} </div>

      <div className={styles.productData_item}>
          <p className={styles.productSubTitle}>Materials</p>
          <span>{product?.meta_data[2].value}</span>
      </div>

{product?.meta_data[4].value && (
     <div className={styles.productData_item}>
     <p className={styles.productSubTitle}>Proportions and total weight of buckle</p>
     <span>{product?.meta_data[4].value}</span>
 </div>
)}
     


    {variations[0]?.length > 0 && (
         <div className={styles.productData_attrs}>
         <p className={styles.productAttrSubTitle}>Colors</p>
         {console.log(variations[0])}
            {variations[0]?.map((obj, i) => (
                
                <button 
                 className={styles.productColor}
                 onClick={()=>{switchVariation(obj.data.name, obj.data.price, obj.data.sku )}}
                 key={i}
                  ><img src={obj.data.images[0].src} alt="" /></button>
            )
            )}
        
     </div>

    )}
     
     {product?.meta_data[6].value === "belt" && (
        <div className={styles.productData_attrs}>
        <p className={styles.productAttrSubTitle}>Size</p>
        {beltSizes.map((el)=> <button className={styles.productSize} onClick={()=>{setCartSize(el)}}>{el}</button>)}
    </div>
     )}

     {product?.meta_data[6].value === "ring" && (
        <div className={styles.productData_attrs}>
        <p className={styles.productAttrSubTitle}>Size</p>
        <Select options={optionsRings}
         onChange={find}
           className="ring-sizes-select"
           styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              boxShadow: 'none'
            }),
            option: (provided, state) => ({
                ...provided,
                color: "#fff",
                fontSize: 16,
                backgroundColor: state.isFocused ? "#333" : "#1a1a1a",
                cursor: "pointer",
                borderColor: "transparent"
              })
          }}
  classNamePrefix="react-select" />
       {/* {ringsSizes.map((el)=> <button className={styles.productSize} onClick={()=>{setCartSize(el)}}>{el}</button>)} */}
        
    </div>
     )}
      

      <a href="#" className={styles.sizeDetermine} alt="">How to determine size</a>

  <div className={styles.productAddBox}>
      <div className={styles.productQty}>
          <button className={styles.productQtyPlus} onClick={minusQty}><img src="/img/minusBtn.svg" alt="" /></button>
          <span className={styles.productQtyNum}>{cartQty}</span>
          <button className={styles.productQtyMinus} onClick={plusQty}><img src="/img/plusBtn.svg" alt="" /></button>
      </div>
   
    
      <a href="#" className={styles.addToCard} onClick={putInCart}>Add to Cart</a>
  </div>

</div>


  <div className={styles.productData_descr}>
      <p className={styles.productSubTitle}>Description</p>
      <div className={styles.productData_descr_text}>
          <p>The "Skull" buckle is a mystical and powerful accessory that embodies deep symbolism and significance of the skull. The skull symbolizes death and rebirth, metamorphosis, and transformation, reminding us of the impermanence of life and the importance of savoring every moment.</p>
             <p> The "Skull" Ring is also associated with wisdom, resilience, and strength of spirit. Wearing such an accessory can be an expression of courage, individuality, and resistance against societal stereotypes and limitations.</p>
      </div>
  </div>

</div>
</div>
    </>
   
  )
}
