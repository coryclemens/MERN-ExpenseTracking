/// TO DO: 1) Offload the sorting to the backend

import React, { useContext, useEffect, useState, useMemo } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './styles/SortedTable.css'

export const SortedTable = () => {
    // Grab the global context (data) from globalstate.js so
    // this component can use the data
    const { transactions, getTransactions } = useContext(GlobalContext);
    const [sortConfig, setSortConfig] = useState(null);
    const [sortDirection, setSortDirection] = useState('ascending');

    useEffect(() => {
        getTransactions();
    }, []);

    let sorted = transactions;

    // Only resort when states change
    useMemo(() => {
        sorted = transactions;

        if (sortConfig !== null) {
            switch (sortConfig) {
                case 'id': sorted = sort(); break;
                case 'grailed': sorted = sort(); break;
                case 'paypal': sorted = sort(); break;
                case 'shipdate': sorted = sort(); break;
                case 'tracking': sorted = sort(); break;
                default: break;
            }
        }
    }, [transactions, sortConfig, sortDirection])

    function requestSort(key) {
        let direction = 'ascending';
        if (sortConfig === key && sortDirection === 'ascending') {
            direction = 'descending';
        }
        setSortConfig(key);
        setSortDirection(direction);
    }
    // Sorts the list by whatever field was set 
    function sort() {
        sorted.sort((a, b) => {
            if (a[sortConfig] < b[sortConfig]) {
                return sortDirection === 'ascending' ? -1 : 1;;
            }
            if (a[sortConfig] > b[sortConfig]) {
                return sortDirection === 'ascending' ? 1 : -1;
            }
            return 0;
        });

        return sorted;
    }
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig === name ? sortDirection : undefined;
    };
    return (
        <table>
            <thead>
                <tr>
                    <th><button className={getClassNamesFor('_id')} type="button" onClick={() => requestSort('_id')}>ID</button></th>
                    <th>ITEM</th>
                    <th><button className={getClassNamesFor('grailed')} type="button" onClick={() => requestSort('grailed')}>GRAILED</button></th>
                    <th><button className={getClassNamesFor('paypal')} type="button" onClick={() => requestSort('paypal')}>PAYPAL</button></th>
                    <th>SHIPPING</th>
                    <th><button className={getClassNamesFor('shipdate')} type="button" onClick={() => requestSort('shipdate')}>SHIP-DATE</button></th>
                    <th><button className={getClassNamesFor('tracking')} type="button" onClick={() => requestSort('tracking')}>TRACKING</button></th>
                </tr>
            </thead>
            <tbody>
                {sorted.map(transaction => (
                    <tr key={transaction._id}>
                        <td>{transaction.id}</td>
                        <td>{transaction.desc}</td>
                        <td>{transaction.grailed}</td>
                        <td>{transaction.paypal}</td>
                        <td>{transaction.shipping}</td>
                        <td>{transaction.shipdate}</td>
                        <td>{transaction.tracking}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}



