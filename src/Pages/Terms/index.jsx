import React from 'react'
import styles from "./Terms.module.scss"
import {Link} from "react-router-dom"
import { useEffect } from 'react'
export default function Terms() {


  useEffect(()=>{ window.scrollTo(0, 0);}, [])
  return (
    <div className={styles.policy_wrapper}>
      <h1 >Terms of Service</h1>
   

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Introduction</p>
        <div className={styles.policy_item_text}>
            <p>Welcome to sicvolo.com, your distinguished online destination for luxury goods, specializing in the sale of exquisite accessories made from precious materials. By accessing and utilizing our website, you hereby agree to adhere to the following Terms of Service. We urge you to review these terms meticulously before engaging in any transactions.</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Agreement</p>
        <div className={styles.policy_item_text}>
            <p>Through your access to our website and participation in purchases, you affirm your understanding, acknowledgment, and consent to these Terms of Service, in conjunction with our Privacy Policy and any other pertinent regulations. Placing an order for the purchase of items on the sicvolo.com website is considered an act of consent and confirmation. Should you disagree with any aspect of these terms, we kindly request that you abstain from using our services. You declare that you have reached the age of majority, and you have provided us with your consent to allow any of your minor dependents to use this website.
            Any offer for any product or service made on this site is void where prohibited.
            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Product descriptions and information</p>
        <div className={styles.policy_item_text}>
            <p>We take immense pride in providing accurate, detailed descriptions, and imagery of our luxury accessories. Kindly note that minor variations may occur due to the unique nature of our products. The weight and characteristics of the product may differ slightly from those indicated on the website. We encourage you to carefully review product details and reach out to our customer service team for any necessary clarifications before finalizing a purchase.  <br />
            We cannot guarantee that your monitor's display of any color will be accurate. <br />
            We reserve the right to modify the content of this website at any time, but we are not obligated to update any information on our site. You agree that you are responsible for tracking changes on our website.
            The prices of our products may be changed without prior notice.  <br />
            We reserve the right to modify or terminate the Service (or any part of it or content) at any time without prior notice. <br />
            We shall not be liable to you or any third party for any modifications, price changes, suspension, or termination of the Service.

            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Ordering and payment</p>
        <div className={styles.policy_item_text}>
              <p>Upon placing an order on sicvolo.com, you assert that the information submitted, including billing details, is accurate and complete. Secure processing of payments is facilitated through authorized payment gateways. Our prices are listed in your preferred currency and may be subject to relevant taxes and fees. Please note that we retain the right to modify product prices without prior notice. 
              We reserve the right to limit the sale of our products or services to any person, geographic region, or jurisdiction. We may exercise this right on a case-by-case basis. <br />
              You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. If we need to clarify certain details at the time of ordering, making changes or canceling an order, we may attempt to notify you by contacting the email address and/or billing address/phone number provided at the time of ordering.
            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Intellectual property</p>
        <div className={styles.policy_item_text}>
              <p>The intellectual property encompassing content, design, and branding featured on sicvolo.com is owned by Fancy-Style LLC and protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. Any reproduction, modification, distribution, or utilization of our website's elements and models necessitates obtaining explicit written consent.
            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Third-party links</p>
        <div className={styles.policy_item_text}>
              <p>Certain content, products and services available via our Service may include materials from third-parties. <br />
                Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties. <br />
                We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.
                </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Privacy</p>
        <div className={styles.policy_item_text}>
              <p>We value your privacy profoundly. Comprehensive insights into data collection, usage, and protection can be gleaned from our <Link to="/policy" >Privacy Policy</Link>. 
                </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Severability</p>
        <div className={styles.policy_item_text}>
              <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Termination</p>
        <div className={styles.policy_item_text}>
              <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes. <br />
              These Terms of Service are effective unless and until terminated by either you or us.
              </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Limitation of Liability</p>
        <div className={styles.policy_item_text}>
              <p>Kindly note that sicvolo.com and its affiliates shall not be held accountable for any direct, indirect, incidental, consequential, or punitive damages stemming from the use of our website or products.</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Governing law</p>
        <div className={styles.policy_item_text}>
              <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of Ukraine.</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Contact information</p>
        <div className={styles.policy_item_text}>
              <p>
              Questions about the Terms of Service should be sent to us at <a href="mailto:info@sicvolo.com">info@sicvolo.com</a>  <br />

              Sicvolo.com is operated by LLC “Fancy Style” (Ukraine, Kyiv, 22/24 Franka Street).  <br />

              Thank you for selecting sicvolo.com and as your preferred purveyor of luxury accessories. We are committed to delivering an unparalleled shopping experience, embodying refinement and exclusivity. Should you require any assistance or have inquiries, our dedicated customer service team is at your service (service@sicvolo.com).

              </p>
        </div>
      </div>









    </div>
  )
}
