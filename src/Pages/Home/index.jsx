import { useState, useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import Runing from "../../Components/Runing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Components/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {getFeatureProducts} from "../../redux/slices/productsSlice";
import styles from "./Home.module.scss";
import  HomeNavMain from "../../Components/HomeNavMain"
import axios from "axios";

export default function Home() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const featureItems = useSelector(state=>state.products.featureItems);
  const images = ["../../public/img/sl1.jpeg"];
  const [imageIndex, setImageIndex] = useState(0);
  const [sliderItems, setSliderItems] = useState([]);
  const [url, setUrl] = useState('');

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <img src="img/rightAr.svg" alt="" />
      </div>
    );
  };
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <img src="img/leftAr.svg" alt="" />
      </div>
    );
  };
  const settings = {
    className: "banerSliderMain",
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 1,
    centralMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  const settingsNew = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 4,
    centralMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      },
      
    ],
    beforeChange: (current, next) => setImageIndex(next),
  };

  useEffect(()=>{
    dispatch(getFeatureProducts())
    setUrl(window.location.pathname);
  }, [])
 
  useEffect(()=>{
    setSliderItems(featureItems)
  }, [featureItems])


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
    <div>
      <div className={styles.mainBanerSlider}>
      <HomeNavMain /> 
        <Slider {...settings}>
          <div className="slide">
            <img src="img/sl1.jpeg" alt="" />
          </div>
          <div className="slide">
            <img src="img/sl1.jpeg" alt="" />
          </div>
          <div className="slide">
            <img src="img/sl1.jpeg" alt="" />
          </div>
        </Slider>
        <div className={styles.mainBanerSlider_center}>

          <img src="img/logo_letter.svg" alt="" />
          <p>Be unique like a masterpiece</p>
          <img src="img/ring_g.png" className={styles.absRing} alt="" />
        </div>
      </div>

      <div className={styles.categories_home}>
        <div className="container">
          <div className="row">
            <Link to="/catalog/belts" className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it1.png" alt="" className={styles.item_img} />
              <p>Belts</p>
              <Link to="/catalog/belts">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </Link>
             <Link to="/catalog/rings" className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it2.png" alt="" className={styles.item_img} />
              <p>Rings</p>
              <Link to="/catalog/rings">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </Link>
            <Link to="/catalog/accessories" className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it3.png" alt="" className={styles.item_img} />
              <p>Accessories</p>
              <Link to="/catalog/accessories">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.home_light}>
        <img src="img/ring_w.svg" alt="" className={styles.home_light_ring} />
        <img src="img/l1.jpeg" alt="" className={styles.home_light_leftImg} />
        <img src="img/l2.jpg" alt="" className={styles.home_light_rightImg} />
        <div className={`${styles.light_descr} container`}>
          <div className={styles.home_light_inner}>
            <span>Sic Volo</span> adds elements of art to people's daily lives. Each of our works is
            a masterpiece <span>handcrafted by a master</span> , with its own meaning and style.
            Precious materials used in our works add a special
          </div>
          <p className={styles.t1}>energy of uniqueness</p>
          <p className={styles.t2}>luxury</p>
          <p className={styles.t3}>infinity</p>
        </div>
      </div>

      <div className={styles.newProducts}>
        <h2>New exclusives</h2>
        <div className="newProduct_slider">
          <Slider {...settingsNew}>
            {sliderItems?.map((obj, i)=>  <ProductCard isCentered={true}  name={obj.name} img={obj.images[0]?.src} price={obj.price} link={obj.slug} key={i}  /> )}
 
          </Slider>
        </div>
      </div>

      <div className={styles.individual}>
        <h2>Individual design</h2>
        <p>
        Our designers can develop any design and customize any item for you using precious materials. Anything you wish! 
        </p>
        <form onSubmit={contactHandler}>
          <div>
            <input type="text" value={name} name="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter your first name" required/>
          </div>
          <div>
            <input type="text" value={phone} name="phone" onChange={(e)=>setPhone(e.target.value)} placeholder="Enter your mobile phone" required/>
          </div>
         
          <div className={styles.inputBox_100}>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required />
          </div>
          <div className={styles.inputBox_100}>
                <textarea placeholder="Your question " onChange={(e)=>setComment(e.target.value)} value={comment}></textarea>
              </div>
          <button type="submit">Send a request</button>
        </form>
        <div className={styles.individual_stripe}>
          <img src="img/b1.png" alt="" />
          <img src="img/b2.png" alt="" />
          <img src="img/b3.png" alt="" />
          <img src="img/b4.png" alt="" />
          <img src="img/b1.png" alt="" />
          <img src="img/b2.png" alt="" />
          <img src="img/b3.png" alt="" />
          <img src="img/b4.png" alt="" />
          <img src="img/b1.png" alt="" />
          <img src="img/b2.png" alt="" />
          <img src="img/b3.png" alt="" />
        </div>
      </div>

      <div className={styles.cat_stripe}>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/haute-skull-couture">HAUTE SKULL COUTURE</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/nautical-treasures">NAUTICAL TREASURES</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/majestic-wildlife">MAJESTIC WILDLIFE</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/blossom-symphony">BLOSSOM SYMPHONY</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/for-him">FOR HIM</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="/catalog/for-her">FOR HER</a>
        </div>
      </div>

      <Runing />
    </div>
  );
}
