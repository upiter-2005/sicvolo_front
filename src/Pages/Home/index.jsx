import { useState } from "react";
import {Link} from "react-router-dom"
import Runing from "../../Components/Runing";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../Components/ProductCard";
import styles from "./Home.module.scss";

export default function Home() {
  const images = ["../../public/img/sl1.jpeg"];
  const [imageIndex, setImageIndex] = useState(0);
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

  return (
    <div>
      <div className={styles.mainBanerSlider}>
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
            <div className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it1.png" alt="" className={styles.item_img} />
              <p>Belts</p>
              <Link to="/catalog/belts">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </div>
            <div className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it2.png" alt="" className={styles.item_img} />
              <p>Rings</p>
              <Link to="/catalog/rings">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </div>
            <div className={styles.item}>
              <img src="img/ring_g.png" alt="" className={styles.greenRing} />
              <img src="img/ring_b.png" alt="" className={styles.blackRing} />
              <img src="img/it3.png" alt="" className={styles.item_img} />
              <p>Accessories</p>
              <Link to="/catalog/accessories">
                Show me <img src="img/carret-r.png" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.home_light}>
        <img src="img/ring_w.svg" alt="" className={styles.home_light_ring} />
        <img src="img/l1.jpeg" alt="" className={styles.home_light_leftImg} />
        <img src="img/l2.jpeg" alt="" className={styles.home_light_rightImg} />
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
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
            <ProductCard isCentered={true} />
          </Slider>
        </div>
      </div>

      <div className={styles.individual}>
        <h2>Individual design</h2>
        <p>
          You can choose your belt and buckle combination. Choose from what metal you want the
          buckle and also place precious stones on the buckle. Anything you wish!
        </p>
        <form>
          <div>
            <input type="text" placeholder="Enter your first name" />
          </div>
          <div>
            <input type="text" placeholder="Enter your mobile phone" />
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
          <a href="#">New exclusives</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="#">skulls</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="#">FOR HER</a>
        </div>
        <div style={{ backgroundImage: "url(/img/bg1.jpeg)" }} className={styles.cat_stripe_item}>
          <a href="#">FOR HIM</a>
        </div>
      </div>

      <Runing />
    </div>
  );
}
