import Freecurrencyapi from '@everapi/freecurrencyapi-js';
import dotenv from "dotenv"
dotenv.config();

// Initilize the Free Currency API Constructor
const freecurrencyapi = new Freecurrencyapi("fca_live_OkQi35W0ZgyBdfY4mmJ2QFSNg0CFnCUzXhM2YJb1");


export const currencyConverter = async (fromCurrency, toCurrency, units) => {
    try {
        const result = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });
        if (!result.data || !result.data[toCurrency]) {
            throw new Error(`Currency ${toCurrency} not found in the response.`);
        }

        const multiplier = result.data[toCurrency];
        return multiplier * units;
    } catch (error) {
        throw error;
    }
};
