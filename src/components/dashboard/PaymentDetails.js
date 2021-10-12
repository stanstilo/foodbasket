import React from 'react'

const PaymentDetails =() =>{
    return (
        <>
            <div className="not-active">
                <p>No saved method found </p>
            </div>
            <div className='add-payment-method'>
                <button>Add Payment Method</button>
            </div>
        </>
    )
}
export default PaymentDetails