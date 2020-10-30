import React from 'react';
import { Balance } from './components/Balance';
import { TotalSalesExpenses } from './components/TotalSalesExpenses';
import { PayPalShippingFees } from './components/PayPalShippingFees';
import { GlobalProvider } from './context/GlobalState'
import { SortedTable } from './components/SortedTable'
import './App.css';


export const Dash = (props) => (
    <GlobalProvider>
        <div className="container">
            <Balance />
            <TotalSalesExpenses />
            <PayPalShippingFees />
            <SortedTable />
        </div>
    </GlobalProvider>
)