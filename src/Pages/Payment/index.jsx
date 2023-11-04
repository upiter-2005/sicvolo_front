import React from 'react'
import styles from "./Payment.module.scss"
import { useEffect } from 'react'
export default function Payment() {


  useEffect(()=>{ window.scrollTo(0, 0);}, [])
  return (
    <div className={styles.policy_wrapper}>
      <h1 >Payment and Shipping</h1>
    


      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Payment</p>
        <div className={styles.policy_item_text}>
            <p>At sicvolo.com site, we offer a range of convenient payment methods to enhance your luxury shopping experience. In addition to traditional payment options, we also provide the option to pay using cryptocurrency. This secure and innovative payment method allows you to complete your purchase with ease.</p>
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Prepayment transfer (bank transfer)</p>
        <div className={styles.policy_item_text}>
            <p>After we have received your order, you will receive an order confirmation by e-mail, in which you will find our bank details. The goods will be reserved for you for a maximum of 5 days until we receive your payment. If your payment is not received on time, we unfortunately have to cancel your order. Please note that a bank transfer can take 1-3 working days! Please indicate your order number and your name as reason for payment, so that we can assign your payment! If you pay in advance, we give you a 5% discount.</p>
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>PayPal</p>
        <div className={styles.policy_item_text}>
            <p>With the payment service PayPal you can pay your order easily and quickly online. At the end of your order you will be automatically forwarded to PayPal, where you can log into your PayPal account and arrange your payment. You will then be redirected to our shop to confirm your purchase. Your order will be processed as soon as we receive your payment (usually within a few minutes). In case of a return the money will be credited to your Paypal account. If you do not yet have a PayPal account, you can register with PayPal during the payment process.</p>
        </div>
      </div>

      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Credit Card</p>
        <div className={styles.policy_item_text}>
            <p>We accept Visa and MasterCard. When paying by credit card, you provide your credit card details after the order process. Your order will be processed immediately after receipt. Your data will be encrypted by the SSL procedure. Your credit card will be charged with the purchase. In case of a return, the refund will be made to your credit card account.</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Payment Card Information Security Policy.</p>
        <div className={styles.policy_item_text}>
            <p>When paying for our services with a bank card, the payment processing (including entering the card number) takes place on a secure page of the processing system. Payment card data is transmitted to payment service providers only in encrypted form and is not stored by us. This means that your confidential information (card details, registration data, and others) does not come to us; their processing is entirely secure, and no one can access the customer's personal and banking data through our service. Working with card data involves the use of information protection standards developed by international payment systems Visa and Mastercard - Payment Card Industry Data Security Standard (PCI DSS), ensuring secure processing of the cardholder's details. The data transfer technology applied guarantees security for banking card transactions through the use of Secure Sockets Layer (SSL) protocols and other security methods."</p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Apple Pay and Google Pay</p>
        <div className={styles.policy_item_text}>
            <p>We offer convenient payment options to ensure a seamless shopping experience for our customers. You can pay for your order using Apple Pay and Google Pay services. These secure and user-friendly payment methods provide a hassle-free way to complete your purchase. <br />
            Apple Pay and Google Pay ensures the security of your payment information and speeds up the checkout process.
            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Cryptocurrency Payment:</p>
        <div className={styles.policy_item_text}>
            <p>During the checkout process you will be provided with the necessary details to complete the cryptocurrency transaction, including the wallet address and the amount in the chosen cryptocurrency. <br />
            Open your preferred cryptocurrency wallet and initiate the payment by entering the provided details. <br />
            Once the payment is confirmed on the blockchain, you will receive an order confirmation email. <br />
            Please note that using cryptocurrency for payment adds an extra layer of security and privacy to your transaction. If you have any questions or encounter any issues while making a cryptocurrency payment, our Customer Support team is available to assist you.
            </p>
        </div>
      </div>
      <div className={styles.policy_item}>
        <p className={styles.policy_item_title}>Shipping</p>
        <div className={styles.policy_item_text}>
            <p>In most cases, we dispatch the goods within 5 business days from the moment of payment. In some instances, due to the absence of a ready-made belt in the desired color, order fulfillment may take up to 20 days. Additionally, custom orders may also require up to 20 days for production. The shipping process can take 1 - 3 weeks after dispatch depending on the country. Regardless, we will exert every effort to ensure our customers receive their orders within the shortest possible timeframe. During the order process, please reach out to our Customer Care Service to clarify all details.
            <br />
            Our commitment to convenience extends to complimentary shipping services predominantly provided through postal carriers. In special cases warrant personal deliveries orchestrated by our dedicated courier service. Upon dispatch, you will be provided with tracking information to monitor the status of your shipment

            </p>
        </div>
      </div>
     




    </div>
  )
}
