import React from 'react';
import styles from "./About.module.scss";
import {Link} from "react-router-dom";
import Runing from "../../Components/Runing"

export default function About() {

  
  return (
    <>
     <div className={styles.about_1}>
      
        <div className={styles.about1_row}>
            <div className={styles.about1_row_breadcrumb}>
                <Link to="/">Home page / </ Link>
                <span>About us</span>
            </div>
            <p className={styles.about_title_1}>SIC VOLO -</p>
            <p className={styles.about_title_2}>"I want so!"</p>
            <img src="/img/ring_a.svg" className={styles.about_ring_1} alt="" />
            <p className={styles.text}>in Latin, encapsulates the essence of our brand, which is dedicated to creating exceptional accessories that embody luxury and personal expression. Through our expertise in contemporary art and our passion for fashion, we have combined our talents to create a unique line of accessories that are both beautiful and luxurious.</p>
        </div>
        <div className={styles.about_1_img}><img src="/img/about.jpg" alt="" /></div>
    </div>

     <div className={styles.about_2}>
        <div className={styles.about_2_img1}><img src="/img/about1.jpg" alt="" /></div>
        <div className={styles.about_2_img2}><img src="/img/about2.jpg" alt="" /></div> 
        <div className={styles.about2_row}>
        <div className={styles.about2_row_wrapper}>
        <div className={styles.bigText}>Sic Volo creates garments and accessories that combine the nobility of <span>precious materials</span>, the complexity of <span>execution techniques</span>, and the centuries-old traditions of <span>art</span>, allowing us to decorate our daily life, feel our <span>uniqueness</span>. <img src="img/ring_text.svg" className={styles.bigTextImg} alt="" /></div>
            <div className={styles.about_2_img2_mob}><img src="/img/about2.jpg" alt="" /></div>
            <div className={styles.about_text1}>
              <p>All of our products are handmade by highly skilled artisans who pay meticulous attention to every detail. We use only precious materials, such as gold, silver, diamonds, emeralds, rubies, sapphires, and pearls. They captivate at first glance.</p>
              <p>Special pride of Sic Volo is the use of sophisticated patination techniques </p>
            </div>
            <div className={styles.about_text2}>
              <p>that give our pieces a special charm and look even more spectacular over time.</p>
              <p>We are excited to share our passion for fashion and art with you and look forward to having you join us on this journey of creativity and beauty. Thank you for visiting our website and we hope to hear from you soon.</p>
            </div>
        </div>
            
            
        </div>
       
    </div>


     <div className={styles.about_3}>
        <div className={styles.about_3_img1}>
          <img src="/img/about_logo.svg" className={styles.about_3_abs} alt="" />
          <p className={styles.about_3_text}>Philosophy of Sic Volo</p>
          <img src="/img/about3.jpg" className={styles.about_3_sheap}  alt="" />
        </div>
        
        <div className={styles.about3_row}>
          <div className={styles.about3_t1}>Art enriches the inner world of people, it helps to expand the boundaries of thinking, brings aesthetic satisfaction and inspiration, makes our world better and more beautiful.</div>
          <div className={styles.about3_title}>SIC VOLO adds elements of art to people's daily lives.</div>
          <div className={styles.about3_t2}>Each of our works is a masterpiece handcrafted by a master with meticulous attention to every detail, with its own meaning and style. Precious materials used in our works add a special energy of uniqueness, luxury and infinity.</div>
          <div className={styles.about3_title}> Be unique like a masterpiece!</div>
             
        </div>
       
    </div>

    <Runing />
    </>
   
  )
}
