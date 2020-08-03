import { Dispatch } from "redux";
import moment from "moment";

import { ListCurrencies, History } from "../api/Api";
import { SET_LIST_CURRENCIES, SET_CURRENT_DATE } from "./RateTypes";
import {
  RateDispatchTypes,
  IHistoryTypes,
  TListCurrencies,
} from "../types/Rate";

export function setHistory(
  start_at: Date,
  end_at: Date,
  rate: TListCurrencies,
  type: IHistoryTypes
) {
  return async (dispatch: Dispatch<RateDispatchTypes>) => {
    try {
      const respons = await History.get(start_at, end_at, rate);
      let data = Object.entries(respons!.rates)
        .sort(
          (a, b) =>
            moment(b[0], "yyyy-MM-DD").valueOf() -
            moment(a[0], "yyyy-MM-DD").valueOf()
        )
        .reverse();
      dispatch({
        type: type,
        payLoad: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
}

export function setListCurrencies() {
  return async (dispatch: Dispatch<RateDispatchTypes>) => {
    try {
      const respons = await ListCurrencies.get();
      dispatch({
        type: SET_LIST_CURRENCIES,
        payLoad: respons!.rates,
      });

      dispatch({
        type: SET_CURRENT_DATE,
        payLoad: respons!.date,
      });
    } catch (error) {
      console.error(error);
    }
  };
}
