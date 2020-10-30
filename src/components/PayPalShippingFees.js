import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const PayPalShippingFees = () => {
    //Get global data
    const { transactions } = useContext(GlobalContext);

    //calulate sales and expenses
    const grailedSales = transactions.map(transaction => parseFloat(transaction.grailed));
    const paypalAmount = transactions.map(transaction => parseFloat(transaction.paypal));
    const deuc = grailedSales.map((n, i) => n - paypalAmount[i]);
    let total = deuc.reduce((acc, curr) => (acc += curr), 0).toFixed(2);
    let percent1 = total / grailedSales.length;
    let shippingg = transactions.map(t => parseFloat(t.shipping));
    let shipping = shippingg.reduce((acc, curr) => (acc += curr), 0).toFixed(2);
    let percent2 = shipping / grailedSales.length;
    percent1 = percent1.toFixed(2);
    percent2 = percent2.toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>PayPal Fees</h4>
                <p id="money-minus" className="money minus">-${total}</p>
                <p className="money minus">AVG : {percent1}%</p>
            </div>
            <div>
                <h4>Shipping Fees</h4>
                <p id="money-minus" className="money minus">-${shipping}</p>
                <p className="money minus">{percent2}%</p>
            </div>
        </div>
    )
}
