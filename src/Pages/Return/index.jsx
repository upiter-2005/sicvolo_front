import React from 'react'
import styles from "./Return.module.scss"
import { useEffect } from 'react'
export default function Return() {


  useEffect(()=>{ window.scrollTo(0, 0);}, [])
  return (
    <div className={styles.policy_wrapper}>
      <h1 >Refund Policy</h1>
      <p className={styles.policy_wrapper}></p>


    


      <div className={styles.policy_item}>
        <div className={styles.policy_item_text}>
          <p>Here are the steps to follow for returns:</p>
          <ul>
    
            <li>Customers must contact us within the first 14 days from the delivery date of the order and state the reason for the return.</li>
            <li>The items being returned must remain unused and in their original condition.</li>
            <li>Shipping fees for the return are the responsibility of the customers.</li>
            <li>The products should be sent back in their original packaging.</li>
            <li>Any additional payments and customs taxes incurred in the customer's country are their responsibility.</li>
            <li>Returns cannot be accepted for personalized items.</li>
            <li>Upon receiving the returned product in the specified conditions, we promptly process a full refund during 2 days.</li>
            <li>Refunds are issued back to the original payment method.</li>
            <li>Refunds via PayPal are typically credited within one business day.</li>
            <li>Refunds via credit card may take between 3 to 10 business days to be processed.</li>
            <li>Alongside the returned item, kindly enclose the invoice or proof of purchase within the package. </li>
          </ul>
          <p>Ring sizing adjustments are common, and we're here to assist. When returning a ring for resizing, please provide your new size within 5 days.</p>
          <p>For return-related inquiries, feel free to reach us at <a href="mailto:service@sicvolo.com">service@sicvolo.com</a>.</p>

          <p>Damages and Issues: Upon receiving your order, please inspect it and immediately contact us if the item is defective, damaged, or if you've received the wrong item. This allows us to address the matter and make it right promptly.</p>
          <p>Please note that we cannot accept returns for sale items or gift cards.</p>
          <p>Refunds: Once we receive and inspect your return, we'll notify you about the status of your refund. If approved, the refund will be automatically processed back to your original payment method. Please keep in mind that processing and posting the refund by your bank or credit card company may take some time.
            Shipping costs are non-refundable.  Depending on where you live, the time it may take for your exchanged product to reach you may vary.  We recommend a trackable shipping service or purchasing shipping insurance.  We don’t guarantee that we will receive your returned item.
          </p>

            <p>Please declare the product price under 10 dollars while returning the product will speed up the process. Otherwise the product will be left over for 1 week for customs clearance.
            Exchanges: If you need to exchange it for the same item in a different size, send us an email at service@sicvolo.com
            </p>
            <p style={{"color":"#fff"}}>To return an item, use the following address:
              <br />
              First Name: Oleksii Samoilov<br />
              Phone: +380963447938<br />
              Mail: service@sicvolo.com<br />
              Street name: Liskivska, Building Number: 14, apartment 45<br />
              ZIP CODE: 02167<br />
              City: Kyiv<br />
              State: Ukraine<br />
              When the product is shipped, remember to share the tracking number with us.<br />
            </p>
        </div>
      </div>

    </div>
  )
}
