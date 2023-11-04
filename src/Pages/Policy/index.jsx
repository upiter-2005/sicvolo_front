import React from 'react'
import styles from "./Policy.module.scss"
import { useEffect } from 'react'
export default function Policy() {


  useEffect(()=>{ window.scrollTo(0, 0);}, [])
  return (
    <div className={styles.policy_wrapper}>
      <h1 >Privacy Policy</h1>
      {/* <p className={styles.policy_wrapper}>The purpose of this Global Privacy Policy (the "Policy") is to describe how Louis Vuitton Malletier SAS, a French company with registered office at 2 rue du Pont Neuf, 75001 Paris, France and/or its affiliates (“LV"), each in their quality of controller, process personal information about its clients and prospects in order to provide you with the best possible service.</p>
      <p className={styles.policy_wrapper}>You can get the name and address of the entity acting as data controller in your jurisdiction, here.</p>
      <p className={styles.policy_wrapperLast}>Louis Vuitton Malletier and/or Your responsible local LV entity, as described in this Policy (hereinafter: "We", "Our", or "Us") collects, stores, processes, uses and discloses personal information about you in connection with your use of LV web sites, LV apps, your use of our connected products (if and when available), or when you visit our stores or visit our social media pages, in your jurisdiction.</p> */}
      <p className={styles.policy_wrapper}>At sicwolo, accessible from sicwolo.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by sicwolo and how we use it.</p>
      <p className={styles.policy_wrapperLast}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. </p>


      {/* <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>1. What type of personal information do we collect?</p>
        <div className={styles.policy_item_text}>
            <p>For the purposes described in this Policy, LV may collect the following categories of personal information:</p>
            <p>a) Identification and Contact information (such as name, address, phone number or e-mail address), when you are willing to provide them for instance to sign up for an online account or fill out a customer information card in store, to participate in an event, to make a purchase, , or ID information necessary when you request a VAT-refund or a “click and collect” service in store .</p>
            <p>b) Payment information: for instance credit card details, bank account numbers, paypal account details or other payment details which you must provide to receive products or services you have ordered from us</p>
            <p>c) Demographic information like your gender and birthday.</p>
            <p>d) Your image when you visit our stores (as CCTVS are in place), or Your voice when you call LV Clients Services (since your call may be recorded)</p>
            <p>e) Preferences and interests which you choose to disclose in the course of your privileged contacts or encounters with our client advisors (which may include your preferences about our collections or other luxury brands, your size, your lifestyle, or basic information on your family circle)</p>
            <p>f) information, which may include health information, related to possible adverse effect caused by our cosmetic products</p>
            <p>g) Information you submit or post in a public space, on our social media pages or our websites, for example for a product review.</p>
            <p>h) Information about your purchases online or in stores. This could include the products you purchased and their prices.</p>
            <p>i) If you use our web sites, we may collect information about the browser you are using, and your browsing behaviour.</p>
            <p>j) If you use our mobile app, we may collect your GPS location, subject to your consent when required. We might also look how often you use the app and where you downloaded it. We may collect information about the browser you are using, and your browsing behaviour.</p>
            <p>k) If you use our connected products, we may collect information regarding your use of such products (such as which features on our product you use the most, or battery level information), as well as geolocation information if necessary to provide you the service you requested;</p>
            <p>l) We may also collect information posted on third party websites or social media platforms about LV products and services, when necessary for the purposes defined hereunder.</p>
            <p>Your personal information is collected either directly from you (e.g., if you create an account on one of our sites/apps or make a purchase or otherwise interact with our client advisors in stores or with our LV Client Services), or from you passively (e.g., when using tracking tools like browser cookies), or from third parties (e.g. through social media platforms).</p>
            <p>If you choose not to submit any personal information when requested to perform a contract or when required by law, you will not be able to receive the product or service you ordered or otherwise register on our web sites, apps or other media.</p>
        </div>
      </div>



      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>2. How do we use your personal information?</p>
        <div className={styles.policy_item_text}>
            <p>We use the information described above for the purposes specified at the time of collection or hereafter in this Policy:</p>
            <p>a) to improve our understanding of your interests and concerns, and to improve our understanding of your use of our products: we may use your information to make our website, apps and products/services better. We may use your information to customize your experience with Us and to tailor our marketing activities to fit your needs and interests as we believe that it is also in our legitimate interest to better serve you and respond to your needs.</p>
            <p>b) to provide you with our connected services, to process your order, respond to your requests or questions, and manage your complaints: for example, we use your information to process your order and deliver your products. Or, we may use your information to send you information you requested, or to communicate with you about your account or our relationship: we may contact you about changes to the Site or about service updates. We may also contact you about feedback or about this Policy or website terms. In such case, your information is processed to perform the contract we have with you.</p>
            <p>c) for security purposes: we may use information to protect Our company, Our customers, Our associates, and Our websites or apps against fraud, theft or any wrongdoing which may affect our activity as it is our legitimate interest to ensure the security of our activity online and offline.</p>
            <p>d) to manage the possible adverse effect caused by our cosmetic products in accordance with our legal obligations as cosmetic manufacturer.</p>
            <p>e) for anti-counterfeiting purposes, and fight against illegal resale channels for LV products in violation of LV's general terms and conditions of sale and LV's selective distribution network (by monitoring in particular, quantities or frequency of products purchased), as it is our legitimate interest to protect against online counterfeiting and preserve our distribution network.</p>
            <p>f) for marketing purposes: we may use your information to contact you, subject to your consent when applicable, about new products and special offers we think you will find valuable.</p>
            <p>g) for analytics purposes, we may use your information to analyse the e-reputation of LV or Our products and to measure the effectiveness of our online or offline campaigns or events, as it is our legitimate interest to preserve LV's image and optimise our marketing campaigns.</p>
            <p>h) other purposes: we use information to maintain transaction and other business records for legal, administrative and audit purposes. We also use information to meet legal, insurance and processing requirements.</p>
        </div>
      </div>




      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>3. Who do we share your personal information with?</p>
        <div className={styles.policy_item_text}>
            <p>We do not disclose or otherwise share your personal information We collect, except:</p>
            <p>a) with Our parent and affiliated companies within Louis Vuitton Group of Companies: only authorized personnel with a need to know have access to the information, for purposes of internal audit, billing or administrative and to provide you with the same level of services around the world. Please find a list of Our affiliate here;</p>
            <p>b) with service providers and agents who perform services on Our behalf: for example, We share information with vendors who send emails for Us. We may also share personal information with service providers that help Us operate our websites.</p>
            <p>c) with banks or other online payment services companies.</p>
            <p>d) Subject to your consent, with Our business partners: for example We will share information with third parties who jointly sponsor an event or promotion with Us. ;</p>
            <p>e) with any third party as part of any business restructuring or reorganization (including dissolution or liquidation). This includes if We are merged of all or part of Our business or assets are transferred, assigned or sold.</p>
            <p>f) when We are required to do so by law or when it is necessary to comply with applicable law: for example We might share information to respond to a court order.</p>
        </div>
      </div>



      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>4. Tracking tools and use of cookies</p>
        <div className={styles.policy_item_text}>
            <p>We may collect certain information through cookies, web beacons and other automated means. A cookie is a text file which is stored in a dedicated area of your device’s hard drive, for instance when you visit online service, when you read an email or while installing or using a mobile app. A cookie allows its sender to identify the device on which it is stored during the period of validity of consent, which does not exceed 13 months.</p>
           <p>What type of cookies do we use?</p>
           <p>a) Some cookies may be functional to collect information which will allow Us to facilitate your browsing such as languages preferences, memorizing log-in, or saving the content of your shopping basket or wish list.</p>
           <p>b) Other cookies also collect information on your behaviour by collecting referring URLS (where our visitors come from, which banners they clicked on and which directed them to our website), pages accessed, times of websites visits. Such information will allow Us to enhance our web sites and apps, have a better understanding of the products and services you would prefer, and offer you more personalized communications and/or more personalized content on our website or our applications.</p>
           <p>c) We also use cookies for web analytics to measure the web sites activity and determine the areas of the web sites which are the most visited, hence improving visibility of our content.</p>
           <p>d) We use cookies to ensure security of online transactions/purchases through device fingerprinting, which allows to identify certain aspects of the equipment used to place an order.</p>
           <p>e) Our websites or apps may contain third party cookies (delivered by advertising agencies, analytics providers, etc.) enabling them to collect browsing information on your Devices, including to measure the efficiency of our advertising campaigns on third party websites. Third party cookies are subject to said third party privacy policies. We hereby inform you about the purpose of these cookies and how you can manage them, to the extent we are aware thereof.</p>
           <p>f) We may include in our website or apps the possibility to share content with third parties or to let other persons know you browsed our website. Such is the case for instance of “Like” and “Share” functionalities offered by social network platforms (“Facebook”, “Twitter”, etc) .</p>
           <p>Social networks which offer these functionalities may identify you even though you do not use these functionalities on our website. Indeed, such functionalities allow social network platforms to track information about your browsing on our website whenever your social network account is active while browsing our website.</p>
           <p>We do not control how these platforms collect your personal data while you are browsing our website. We invite you to read the Privacy policies of these social networks to find out how they use information they collect (including for advertising purposes) through these buttons. These Privacy policies should provide you information about how to manage your preferences on your social networks account.</p>
           <p>Acceptance of cookies Except for functional or security cookies, the use of cookie on a Device depends on the user’s choice, which can be made and modified freely and at any time.</p>
           <p>You can manage cookies either here or by setting your browser to accept or reject cookies on your Device, either globally or cookie by cookie. Settings that you make may change your internet browsing capacity and may sometimes alter your ability to access to certain services that require the use of cookies.</p>
           <p>Such is also the case if we or one of our business partners can no longer recognize the type of browser your Device is using such as language, display settings or country / region of connection. We cannot be held liable for the minimized access to our services as a result of cookies you previously deleted or rejected. How to manage cookie settings in your browser? Each browser has its own cookie management system, as described in the “Help” menu of your browser, where you will be provided with all necessary information about how to set your preferences.</p>
           <p>For Microsoft Internet Explorer 8.0 and more:</p>
           <ol>
            <li>Go to "Tools" menu, then "Internet Options"</li>
            <li>Click on "Confidentiality"</li>
            <li>Select your preferred level of confidentiality</li>
           </ol>
           <p>For Mozilla Firefox:</p>
           <ol>
            <li>Go to "Tools" then "Options" menu</li>
            <li>Click on the "Privacy" settings</li>
            <li>Select your preferred option on the "Cookie" menu</li>
           </ol>
           <p>For Opera:</p>
           <ol>
            <li>Go to "Files" > "Preferences"</li>
            <li>Click on "Privacy"</li>
            <li>Select your preferred options</li>
           </ol>
           <p>For Android browser:</p>
           <ol>
            <li>Click on the upper right button</li>
            <li>Go to "Settings" then "Privacy & security menu"</li>
            <li>Select your preferred option</li>
           </ol>
           <p>For Dolphin Browser on Android:</p>
           <ol>
            <li>In the Menu, go to "More" then "Settings"</li>
            <li>Select the "Privacy & security settings" menu</li>
            <li>Select you preferred option in the "cookies" menu</li>
           </ol>
           <p>For Safari on iOS:</p>
           <ol>
            <li>In the "Settings" app, go to "Safari" menu</li>
            <li>Go to "Accept cookies" entry under "Privacy"</li>
            <li>Select your preferred option</li>

           </ol>
           <p>For Google Chrome:</p>
           <ol>
            <li>Click the Chrome menu on the browser toolbar</li>
            <li>Select “settings” then click “show advanced settings”</li>
            <li>In the "Privacy" section, click the “Content settings” button.</li>
            <li>In the "Cookies" section, you can change cookies settings</li>
           </ol>
           <p>If you share your Device with other people and the Device operates several browsers, we cannot guarantee that personalised services and advertisement designed to match your personal use of the Device (if such personalised services and advertisement are available) will correspond to your own use and rather than someone else’s.</p>
        </div>
      </div> */}


<div className={styles.policy_item}>
        <p className={styles.policy_item_title}>General Data Protection Regulation (GDPR)</p>
        <div className={styles.policy_item_text}>
            <p>We are a Data Controller of your information.</p>
            <p>SicVolo legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:</p>
            <ul>
              <li>SicVolo needs to perform a contract with you</li>
              <li>You have given SicVolo permission to do so</li>
              <li>Processing your personal information is in SicVolo legitimate interests</li>
              <li>SicVolo needs to comply with the law</li>
            </ul>
            <p>SicVolo will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.</p>
            <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.</p>
            <p>In certain circumstances, you have the following data protection rights:</p>
            <ul>
              <li>The right to access, update or to delete the information we have on you.</li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>

        </div>
      </div>


      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Log Files</p>
        <div className={styles.policy_item_text}>
            <p>sicwolo follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
          
        </div>
      </div>


      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Cookies and Web Beacons</p>
        <div className={styles.policy_item_text}>
            <p>Like any other website, sicwolo uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
          
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Privacy Policies</p>
        <div className={styles.policy_item_text}>
            <p>You may consult this list to find the Privacy Policy for each of the advertising partners of sicwolo.</p>  
            <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on sicwolo, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>  
            <p>Note that sicwolo has no access to or control over these cookies that are used by third-party advertisers.</p>
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Third Party Privacy Policies</p>
        <div className={styles.policy_item_text}>
            <p>Sicwolo's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p> 
            <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.</p>   
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Children's Information</p>
        <div className={styles.policy_item_text}>
            <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>  
            <p>sicwolo does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p> 
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Online Privacy Policy Only</p>
        <div className={styles.policy_item_text}>
            <p>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in sicwolo. This policy is not applicable to any information collected offline or via channels other than this website.</p>   
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Consent</p>
        <div className={styles.policy_item_text}>
            <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>   
        </div>
      </div>

    </div>
  )
}
