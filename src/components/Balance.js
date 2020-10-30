import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const Balance = () => {
    // Grab the global context (data) from globalstate.js so
    // this component can use the data
    const { transactions } = useContext(GlobalContext);

    // Calc total paypal balance
    const amounts = transactions.map(transaction => parseFloat(transaction.paypal));
    const totalPaypal = amounts.reduce((acc, curr) => (acc += curr), 0).toFixed(2);

    return (
        <>
            <h4>Paypal Balance</h4>
            <h1>${totalPaypal}</h1>
        </>
    )
}

