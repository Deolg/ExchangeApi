import axios from "axios";

import { CURRENCIES_URL, HISTORY_TIME_PERIOD_URL } from "./Constants";

import { TListCurrencies, IListCurrencies } from "../types/Rate";

interface IHistoryApi {
  base: TListCurrencies;
  end_at: Date;
  rates: any;
  start_at: Date;
}
interface IListCurrenciesApi {
  base: TListCurrencies;
  date: Date;
  rates: IListCurrencies;
}

export const ListCurrencies = {
  get: async (): Promise<IListCurrenciesApi | undefined> => {
    try {
      const response = await axios.get(CURRENCIES_URL);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export const History = {
  get: async (
    start_at: Date,
    end_at: Date,
    symbols: TListCurrencies
  ): Promise<IHistoryApi | undefined> => {
    try {
      const response = await axios.get(HISTORY_TIME_PERIOD_URL, {
        params: {
          start_at: start_at,
          end_at: end_at,
          symbols: symbols,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
