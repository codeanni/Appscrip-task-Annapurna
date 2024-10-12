import React from 'react'

const SubscribeSection = () => {
  return (
    <section className='d-flex justify-content-between p-5 bg-dark text-white'>
        <div className='left font-weight-light'>
            <h5>BE THE FIRST TO KNOW</h5>
            <p>Sign up for updates from mettā muse.</p>
            <div className='d-flex justify-content-between'>
            <input
            type="email"
            className="form-control mb-2"
             placeholder="Enter your email"/>
             <button className="btn btn-Light">Subscribe</button>
            </div>     
        </div>
        <div className='right text-right'>
            <h5>CONTACT US</h5>
            <p>+44 221 133 5360</p>
            <h5>CURRENCY</h5>
            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>


        </div>
    </section>
  )
}

export default SubscribeSection