import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';
const dotenv = require('dotenv');

//Initial state
const initialState = {
    // Get all transactions here
    transactions: [],
    error: null,
    loading: true
}

// Create context with loaded transactions
export const GlobalContext = createContext(initialState);

// Provider component to give access to state (chilren are components)
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    async function deleteTransaction(id) {
        try {
            var params = URLSearchParams();
            params.append('id', parseInt(id));
            const res = await axios.post('http://localhost:5000/sold-data/delete', params);

            dispatch({
                type: 'DELETE_TRANSACTION',
                payload: id
            })
        }
        catch (err) {
            dispatch({
                type: 'ADD_ERRO',
                payload: { 'error': `${err}` }
            })
        }
    }
    async function addTransaction(transaction) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const res = await axios.post('http://localhost:5000/sold-data', transaction, config);

            dispatch({
                type: 'ADD_TRANSACTION',
                payload: transaction
            })
        }
        catch (err) {
            dispatch({
                type: 'ADD_ERRO',
                payload: { 'error': `${err}` }
            })
        }
    }

    async function getTransactions() {
        try {
            const res = await axios.get('http://localhost:5000/sold-data');

            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data
            })
        }
        catch (err) {
            dispatch({
                type: 'TRANSACTION_ERROR',
                payload: { 'error': `${err}` }
            })
        }
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions
    }}>
        {children}
    </GlobalContext.Provider>)
}