import React from 'react'
import GiftCardsFaq from './GiftCardsFaq'

export default function GiftCardFaqLists({faqLists}: any) {
    console.log("faqs",faqLists)
  return (
    <div className="py-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div>
                  <h3>Faq</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            {faqLists.map((item: object, index:number) => (
              <GiftCardsFaq key={index} faq={item} index={index}/>
            ))}
          </div>
        </div>
      </div>
  )
}
