import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const TotalSalesExpenses = () => {
    //Get global data
    const { transactions } = useContext(GlobalContext);

    //calulate sales and expenses
    const grailedSales = transactions.map(transaction => parseFloat(transaction.grailed));
    const paypalAmount = transactions.map(transaction => parseFloat(transaction.paypal));
    const totalGrailedSales = grailedSales.reduce((acc, curr) => (acc += curr), 0).toFixed(2);
    // Get difference between every grailed - paypal pair
    const deuc = grailedSales.map((n, i) => n - paypalAmount[i]);
    let total = deuc.reduce((acc, curr) => (acc += curr), 0).toFixed(2);
    let shippingg = transactions.map(t => parseFloat(t.shipping));
    let shipping = shippingg.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

    let totalFees = totalGrailedSales - total - shipping;

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Total Sales </h4>
                <p className="money plus">+${totalGrailedSales}</p>
            </div>
            <div>
                <h4>Total Sales (After Fees)</h4>
                <p className="money plus">+${totalFees}</p>
            </div>
        </div>
    )
}
