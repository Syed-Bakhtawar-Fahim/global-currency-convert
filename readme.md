# Global Currency Convert

A free and easy-to-use npm package for real-time currency conversion. The `global-currency-convert` package provides accurate exchange rates for multiple currencies worldwide, making it ideal for applications needing quick and reliable currency conversion.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
  - [Node.js](#usage-in-nodejs)
  - [React.js](#usage-in-reactjs)
- [License](#license)

## Installation

You can install the package using npm:

```bash
npm install global-currency-convert
```
# Usage

### NodeJS Usage
1. Import the package and load your environment variables:

``` bash
import { currencyConverter } from 'global-currency-convert';
```

2. Call the currencyConverter function with the required parameters:

```bash
const convertCurrency = async () => {
    try {
        const fromCurrency = 'USD'; // Currency to convert from
        const toCurrency = 'EUR';    // Currency to convert to
        const units = 100;           // Amount to convert

        const convertedAmount = await currencyConverter(fromCurrency, toCurrency, units);
        console.log(`Converted Amount: ${convertedAmount} ${toCurrency}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
    }
};

convertCurrency();

```

### Usage in React.js
1. Create a React component:

```bash
import React, { useState } from 'react';
import { currencyConverter } from 'global-currency-convert';
import dotenv from 'dotenv';

dotenv.config();

const CurrencyConverter = () => {
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('EUR');
    const [units, setUnits] = useState(100);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        try {
            const result = await currencyConverter(fromCurrency, toCurrency, units);
            setConvertedAmount(result);
            setError(null);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Currency Converter</h1>
            <input type="text" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} placeholder="From Currency" />
            <input type="text" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} placeholder="To Currency" />
            <input type="number" value={units} onChange={(e) => setUnits(e.target.value)} placeholder="Amount" />
            <button onClick={handleConvert}>Convert</button>
            {convertedAmount && <p>Converted Amount: {convertedAmount} {toCurrency}</p>}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        </div>
    );
};

export default CurrencyConverter;

```


### Summary
This README provides all necessary information for users to install and use your currency converter package in different environments (Node.js, React.js, and Next.js). It also includes error handling guidelines to ensure users can manage any issues that arise. Adjust any specific sections or examples as needed for your package.
