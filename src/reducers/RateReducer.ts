import {
  SET_TO_HISTORY,
  SET_FROM_HISTORY,
  SET_LIST_CURRENCIES,
  SET_CURRENT_DATE,
} from "../actions/RateTypes";

import {
  RateDispatchTypes,
  IToHistory,
  IFromHistory,
  IListCurrenciesAction,
  ICurrentDateAction,
} from "../types/Rate";

interface IInitialState {
  toHistory: string[] | IToHistory;
  fromHistory: string[] | IFromHistory;
  listCurrencies: {} | IListCurrenciesAction;
  currentDate: {} | ICurrentDateAction;
}

const initialState = {
  toHistory: [],
  fromHistory: [],
  listCurrencies: {},
  currentDate: "",
};

export const rateReducer = (
  state = initialState,
  action: RateDispatchTypes
): IInitialState => {
  switch (action.type) {
    case SET_TO_HISTORY:
      return { ...state, toHistory: action.payLoad };
    case SET_FROM_HISTORY:
      return { ...state, fromHistory: action.payLoad };
    case SET_LIST_CURRENCIES:
      return { ...state, listCurrencies: action.payLoad };
    case SET_CURRENT_DATE:
      return { ...state, currentDate: action.payLoad };
    default:
      return state;
  }
};
