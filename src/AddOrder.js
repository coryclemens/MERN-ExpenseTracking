import React from 'react';
import { AddNewSale } from './components/AddNewSale';
import styled from 'styled-components';
import './App.css';
import { GlobalProvider } from './context/GlobalState';

export const AddOrder = () => (
    <GlobalProvider>
        <div className="container">
            <AddNewSale />
        </div>
    </GlobalProvider>
)