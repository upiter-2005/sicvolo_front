import React from 'react'
import styles from "./Faq.module.scss"
import Accordion from '../../Components/Accordion'

export default function Faq() {
  return (
    <>
         <div className={styles.faqWrapper_title}> <h2>frequently asked questions</h2></div>
         <div className={styles.faqWrapper}>
        <img src="img/faqFon.svg" alt="" className={styles.faqFon} />
   
       
        <div className={styles.left}>
            <img src="img/faq.jpg" alt="" />
        </div>
        <div className={styles.right}>
            <Accordion 
            title="What does SIC VOLO mean?"
            content="SIC VOLO - 'I want so!' in Latin, encapsulates the essence of our brand, which is dedicated to creating exceptional accessories that embody luxury and personal expression"
            />
            <Accordion 
            title="What materials are used in your accessories?"
            content="Our accessories are crafted from high-quality materials, including genuine silver, gold, and exotic materials such as alligator and python leather. "  />
            <Accordion 
            title="Are your products made of genuine silver and gold?"
            content="Yes, we guarantee that all our products are made of genuine materials. We take pride in using authentic precious metals and stones. In our creations, we do not use gold plating technology. We use 14, 18, and 24-carat gold and 925 silver." />
            <Accordion 
            title="Do you offer customization options for your accessories?"
            content="SIC VOLO is an exclusive design studio. We work with individual orders creating unique, one-of-a-kind masterpieces. Connect with us and we will make your wishes come true. Please contact our customer service team for more information and personalized options."/>
            <Accordion 
            title="What types of precious stones do you incorporate in your designs?"
            content=" Our designs may feature a variety of precious stones such as diamonds, rubies, sapphires, emeralds, and more. Each product description will provide specific details. "/>
            <Accordion 
            title="Are your belts made from genuine alligator and python leather?"
            content="Absolutely! Our belts are meticulously crafted from genuine exotic leather." />
            <Accordion 
            title="How can I determine my belt size?"
            content="To determine your belt size, we recommend measuring your waist or an existing belt that fits you well. Please refer to our size guide for detailed instructions." />
            <Accordion 
            title="What is your return and exchange policy?"
            content="We offer a hassle-free return and exchange policy within 30 days. Please review our Returns and Exchanges page for detailed information."/>
            <Accordion 
            title="Do you offer a warranty for your products?"
            content="Yes, we stand behind the quality of our products. We offer a warranty against manufacturing defects. Contact our service center at service@sicvolo.com, and we will resolve your issue." />
            <Accordion 
            title="Are your accessories handmade?"
            content="Yes, skilled artisans who specialize in working with precious materials and leather meticulously craft our accessories. Each piece receives careful attention to details." />
            <Accordion 
            title="Can I request a personalized engraving on my purchase?"
            content="We offer personalized engraving services on select products. Please contact our customer service team for engraving options and instructions. " />
            <Accordion 
            title="What payment methods do you accept?"
            content="We accept major credit cards, debit cards, PayPal and crypto currencies for online purchases. The available payment options will be displayed during the checkout process." />
            <Accordion 
            title="Do you offer gift wrapping and personal messages?"
            content="Yes, we offer gift wrapping services for a luxurious presentation. During the checkout process, you can also include a personalized message for the recipient. Make a request to our customer service." />
            <Accordion 
            title="How can I contact your customer service team?"
            content="You can reach our customer service team by email service@sicvolo.com , phone, or through the contact form on our website. Visit our Contact Us page for the relevant contact details." />
            <Accordion 
            title="Are your products limited edition or part of a seasonal collection?"
            content="Some of our products may be limited edition or part of a seasonal collection. Please refer to the product descriptions for availability and collection information." />
            <Accordion 
            title="Can I track the status of my order?"
            content="Yes, once your order is processed and shipped, we will provide you with a tracking number. You can use this number to track the status of your order on our website or with the shipping carrier." />
            <Accordion 
            title="Do you offer discounts or promotions?"
            content="We occasionally offer discounts, promotions, or exclusive offers. To stay updated, sign up for our newsletter and follow us on social media to be the first to know about our special deals." />
        </div>
      
    </div>
         </>
   
  )
}
