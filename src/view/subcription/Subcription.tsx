import { useState } from 'react'
import { Aboutplan, Plansprice } from '../../component/design/Layout'
import { Header } from '../../component/header/Header'
import './Subcription.css'

export default function Subcription() {
  const [selectedDiv, setSelectedDiv] = useState<string | null>(null)

  const [selectedPlan, setSelectedPlan] = useState<string>('')
  const [netPrice, setNetPrice] = useState<number>(0)
  const [gstAmount, setGstAmount] = useState<number>(0)
  const [totalPrice, setTotalPrice] = useState<number>(0)

  const calculatePrices = (selectedPlan: string): void => {
    const twelveMonthSubFee: number = 179
    const sixMonthSubFee: number = 149
    const threeMonthSubFee: number = 99
    const subFee: number = 18500
    const limitedTimeOffer: number = -18401

    let netPrice: number = 0

    // Calculate net price based on selected subscription period
    switch (selectedPlan) {
      case '12-month':
        netPrice = twelveMonthSubFee + subFee + limitedTimeOffer
        break
      case '6-month':
        netPrice = sixMonthSubFee + subFee + limitedTimeOffer
        break
      case '3-month':
        netPrice = threeMonthSubFee + subFee + limitedTimeOffer
        break
      default:
        break
    }

    setNetPrice(netPrice)

    // Calculate total price with GST
    const totalPrice: number = netPrice + gstAmount
    setTotalPrice(totalPrice)
  }
  const handleDivClick = (divId: string) => {
    setSelectedDiv(divId)
  }

  const handlePlanClick = (selectedPlan: string): void => {
    setSelectedPlan(selectedPlan)
    calculatePrices(selectedPlan)
  }
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="content-back">
          <img
            className="h-100 w-100"
            src={require('../../asset/Back Ground.png')}
            alt=""
          />
        </div>
        <div className="d-flex justify-content-center flex-wrap col-12 p-1 col-xl-11 mx-auto main-content">
          {/* ************ LEFT-SIDE-CONTENT ************* */}
          <div className="col-12 col-sm-10 col-lg-7 p-1  p-md-5  content-left">
            <p>Access curated courses Worth</p>
            <div className="mb-5">
              <span className="rupee1">₹ </span>
              <span className="rupee2">18,500 </span>
              <span>at just </span>
              <span className="rupee1">₹ </span>
              <span className="rupee2">99 </span>
              <span>per year!</span>
            </div>
            <Aboutplan
              img={require('../../asset/content-icons/Icon1.png')}
              span1={`100+`}
              span2={`Job relevant courses`}
            />
            <Aboutplan
              img={require('../../asset/content-icons/Icon2.png')}
              span1={`20,000+`}
              span2={`Hours of content`}
            />
            <Aboutplan
              img={require('../../asset/content-icons/Icon3.png')}
              span1={`Exclusive`}
              span2={`webinar access`}
            />
            <Aboutplan
              img={require('../../asset/content-icons/Icon4.png')}
              span2={`Scholarship worth`}
              span3={`₹94,500`}
            />
            <Aboutplan
              img={require('../../asset/content-icons/Icon5.png')}
              span1={'Ad Free'}
              span2={'learning experience'}
            />
          </div>
          {/* ************ LEFT-SIDE-CONTENT ************* */}

          {/* ************ RIGHT-SIDE-CONTENT ************* */}
          <div className="col-12 col-sm-10 col-lg-5  pt-5 px-0 px-md-4 px-lg-5 mb-4">
            <div className="col-12 parent-price-plan p-sm-4 p-1 py-4">
              <div className="d-flex top-number">
                <div>
                  <div className="number">1</div>
                  <p>Sign Up</p>
                </div>
                <div>
                  <div className="number">2</div>
                  <p>Subscribe</p>
                </div>
              </div>
              <p className="subcribe-title">Select your subcription plan</p>
              <Plansprice
                class={'plan-price'}
                headertext={'header-text'}
                img={require('../../asset/disable.png')}
                textp={'Offer expired'}
                p={'12 Months Subscription'}
                span={'₹99'}
                span1={'₹8'}
              />
              <Plansprice
                id="div1"
                class={`plan-price ${selectedDiv === 'div1' ? 'selected' : ''}`}
                onClick={() => {
                  handleDivClick('div1')
                  handlePlanClick('12-month')
                }}
                dataplan={'12-month'}
                headertext={'header-text'}
                img={require('../../asset/checkmark.png')}
                textp={'Recommended'}
                p={'12 Months Subscription'}
                span={'₹179'}
                span1={'₹15'}
              />
              <Plansprice
                id="div2"
                class={`plan-price ${selectedDiv === 'div2' ? 'selected' : ''}`}
                onClick={() => {
                  handleDivClick('div2')
                  handlePlanClick('6-month')
                }}
                dataplan={'6-month'}
                img={require('../../asset/checkmark.png')}
                p={'6 Months Subscription'}
                span={'₹149'}
                span1={'₹25'}
              />
              <Plansprice
                id="div3"
                class={`plan-price ${selectedDiv === 'div3' ? 'selected' : ''}`}
                onClick={() => {
                  handleDivClick('div3')
                  handlePlanClick('3-month')
                }}
                dataplan={'3-month'}
                img={require('../../asset/checkmark.png')}
                p={'3 Months Subscription'}
                span={'₹99'}
                span1={'₹33'}
              />
              <hr className="mb-1" />
              <div className="fee">
                <p>Subscription Fee</p>
                <p>₹18,500</p>
              </div>
              <div className="offer">
                <div className="d-flex justify-content-between">
                  <p>Limited time offer</p>
                  <p>- ₹18,401</p>
                </div>
                <div className="d-flex align-items-center bg-dange">
                  <img src={require('../../asset/clock.png')} alt="" />
                  <p>Offer valid till 25th March 2023</p>
                </div>
              </div>
              {selectedPlan && (
                <div className="fee mt-2">
                  <p>
                    <strong>Total</strong> (Incl. of 18% GST ){' '}
                  </p>
                  <p className="overall-totall">₹{totalPrice}</p>
                </div>
              )}
              {!selectedPlan && (
                <div className="fee mt-2">
                  <p>
                    <strong>Total</strong> (Incl. of 18% GST)
                  </p>
                  <p className="overall-totall">₹0</p>
                </div>
              )}
              <div className="d-flex justify-content-between mt-1 payment-btn bg-dangr">
                <button>CANCEL</button>
                <button>PROCEED TO PAY</button>
              </div>
              <div className="razorpay">
                <img src={require('../../asset/razorpay.png')} alt="" />
              </div>
            </div>
          </div>
          {/* ************ RIGHT-SIDE-CONTENT ************* */}
        </div>
      </div>
    </div>
  )
}
