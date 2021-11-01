import axios from "axios";
import { CURRENCY_API_KEY } from "../utils/consts";

const exchangeInstance = axios.create({
  baseURL: "https://free.currconv.com/",
});

export const exchangeAPI = {
  getRate(currencyPairs: string) {
    return exchangeInstance.get(
      `api/v7/convert?q=${currencyPairs}&compact=ultra&apiKey=${CURRENCY_API_KEY}`
    );
  },
};
