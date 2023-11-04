import {useCallback, useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import styles from "./Product.module.scss"
import ProductImagesSlider from "../../Components/ProductSlider"
import axios from "axios"
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../redux/slices/productsSlice"
import {addToCart, showCard} from "../../redux/slices/cardSlice"
import Carousel from "../../Components/Carousel"
import Runing from "../../Components/Runing"
import{Link} from "react-router-dom"
import RingSizeModal from "../../Components/RingSizeModal"
import BeltSizeModal from "../../Components/BeltSizeModal"
import Select from 'react-select'


const beltSizes = [65,70, 75, 80, 85, 90, 95, 100, 105, 110, 115];
const optionsRings = [
    { value: 18.47, label: "18.47 mm"},
    { value: 18.15, label: "18.15 mm" },
    { value: 18.79, label: "18.79 mm" },
    { value: 19.11, label: "19.11 mm" },
    { value: 19.43, label: "19.43 mm" },
    { value: 19.75, label: "19.75 mm" },
    { value: 20.06, label: "20.06 mm" },
    { value: 20.38, label: "20.38 mm" },
    { value: 20.70, label: "20.70 mm" },
    { value: 21.02, label: "21.02 mm" },
    { value: 21.34, label: "21.34 mm" },
    { value: 21.66, label: "21.66 mm" },
    { value: 21.97, label: "21.97 mm" },
    { value: 22.29, label: "22.29 mm" },
    { value: 22.61, label: "22.61 mm" },
    { value: 22.93, label: "22.93 mm" },
  ]

export default function Product() {
    const[product, setProduct] = useState();
    const[activeRingModal, setActiveRingModal] = useState(false);
    const[activeBeltModal, setActiveBeltModal] = useState(false);
    const[visualSizeSku, setVisualSizeSku] = useState("");



    
    const[sizeError, setSizeError] = useState(null);
    const[varError, setVarError] = useState(null);

    const[varId, setVarId] = useState(0);

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

    const switchVariation = (name, price, sku, id) => {
        setCartName(name) 
        setCartPrice(price)
        setCartSku(sku)
        setVarId(id)
    }

    const putInCart = () => {
        if(product?.meta_data[6].value === "belt" && !cartName){setVarError('Chose variation'); return;}
        if(product?.meta_data[6].value === "belt" && !cartSize){
            if (cartName.includes('Only buckle')){
                console.log("Only buckle");
            }else{
                setSizeError('Chose size'); return;
            }
        }
        //if(product?.meta_data[6].value === "belt" && !cartSize){setSizeError('Chose size'); return;}
        if(product?.meta_data[6].value === "ring" && !cartSize){setSizeError('Chose size'); return;}
        let item = {};
        if(product?.meta_data[6].value === "ring"){
             item = {
                
                id: product.id,
                url: window.location.href,
                name: cartName || product.name,
                price: cartPrice ||  product.price,
                sku: product.sku  + `${cartSize}`,
                img: product?.images[0].src,
                size: cartSize,
                qty: cartQty
               };
        }else{
            item = {
                id: varId || product.id,
                url: window.location.href,
                name: cartName || product.name,
                price: cartPrice ||  product.price,
                sku: product.sku || cartSku + `-${cartSize}`,
                img: product?.images[0].src,
                size: cartSize,
                qty: cartQty
               };
        }
        setSizeError(null);
        setVarError(null);
        
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
        setVisualSizeSku(event.value)
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
                     axios.post(`${process.env.REACT_APP_API_URL}/api/products/getProductById`, { id: el })
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
        findProduct();
        window.scrollTo(0, 0);
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

     {(product?.meta_data[6].value === "belt" || product?.meta_data[6].value === "ring") ? 
     (<p className={styles.productData_sku}>{product?.sku ?  (`${product?.sku}-${visualSizeSku}`) : (`${cartSku}-${visualSizeSku}`)   }</p>) 
        : 
     (<p className={styles.productData_sku}>{ cartSku || product?.sku}</p>)
     } 
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
                 title={obj.data.name}
                 className={obj.data.name === cartName ? `${styles.activeColor} ${styles.productColor}` : `${styles.productColor}`}
                
                 onClick={()=>{switchVariation(obj.data.name, obj.data.price, obj.data.sku, obj.data.id )}}
                 key={i}
                  ><img src={obj.data.images[0].src} alt="" /></button>
            )
            )}
         {varError && (<div className="errorProduct">{varError}</div>) }
     </div>

    )}
     
     {product?.meta_data[6].value === "belt" && (
        <div className={styles.productData_attrs}>
        <p className={styles.productAttrSubTitle}>Size</p>
        {beltSizes.map((el)=> 
        <button
                className={el === cartSize ? `${styles.activeSize} ${styles.productSize}` : `${styles.productSize}`}
                onClick={()=>{setCartSize(el); setVisualSizeSku(el)}}>
                    {el}
        </button>)}
        {sizeError && (<div className="errorProduct">{sizeError}</div>) }
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
              boxShadow: 'none',
            }),
            menu: (provided, state) => ({
                ...provided,
                border: "none",
                boxShadow: "none",
                backgroundColor: "#131313"
              }),
            option: (provided, state) => ({
                ...provided,
                color: "#fff",
                fontSize: 16,
                backgroundColor: state.isFocused ? "#333" : "#1a1a1a",
                cursor: "pointer",
                borderColor: "#333",
                outline: "none",
                border: "none"

            })

            
          }}
  classNamePrefix="react-select" />
       {/* {ringsSizes.map((el)=> <button className={styles.productSize} onClick={()=>{setCartSize(el)}}>{el}</button>)} */}
       {sizeError && (<div className="errorProduct">{sizeError}</div>) }
    </div>
     )}
      

    {product?.meta_data[6].value === "ring" && (<><a href="#" onClick={()=> setActiveRingModal(true)} className={styles.sizeDetermine} alt="">How to determine size</a> <a href=" https://www.youtube.com/watch?v=LfdPTxCo6_A&ab_channel=wikiHow" target="blank" className={styles.watchYoutube}><img src="/img/youtube_size.svg" alt="" /> Watch video guide</a></>)}

    {product?.meta_data[6].value === "belt" && (<><a href="#" onClick={()=> setActiveBeltModal(true)} className={styles.sizeDetermine} alt="">How to determine size</a> <a href="https://www.youtube.com/watch?v=izXvP07zhro&ab_channel=EngravedGiftIdeas" target="blank" className={styles.watchYoutube}><img src="/img/youtube_size.svg" alt="" /> Watch video guide</a></>)}
   

  <div className={styles.productAddBox}>
      <div className={styles.productQty}>
          {/* <button className={styles.productQtyPlus} onClick={minusQty}> <img src="/img/minusBtn.svg" alt="" /> </button> */}
          <button className={styles.productQtyPlus} onClick={minusQty}> - </button>
          <span className={styles.productQtyNum}>{cartQty}</span>
          {/* <button className={styles.productQtyMinus} onClick={plusQty}><img src="/img/plusBtn.svg" alt="" /></button> */}
          <button className={styles.productQtyMinus} onClick={plusQty}>+</button>
      </div>
   
    
      <a href="#" className={styles.addToCard} onClick={putInCart}>Add to Cart</a>
  </div>

</div>


  <div className={styles.productData_descr}>
      <p className={styles.productSubTitle}>Description</p>
      <div className={styles.productData_descr_text}>
      <div dangerouslySetInnerHTML={{ __html: product?.description }} />
         
      </div>
  </div>

</div>
</div>

<Runing />

<RingSizeModal active={activeRingModal} closeModal={()=>{setActiveRingModal(false)}} /> 
<BeltSizeModal active={activeBeltModal} closeModal={()=>{setActiveBeltModal(false)}} /> 
    </>
   
  )
}
