import {
  SET_TO_HISTORY,
  SET_FROM_HISTORY,
  SET_LIST_CURRENCIES,
  SET_CURRENT_DATE,
} from "../actions/RateTypes";

export interface IHistoryTypes {
  type: typeof SET_TO_HISTORY | typeof SET_FROM_HISTORY;
}

export interface IHistoryAction {
  type: IHistoryTypes;
  payLoad: any;
  //payLoad: [[Date, {}]];
}

export interface IToHistory {
  type: typeof SET_TO_HISTORY;
  payLoad: any;
}

export interface IFromHistory {
  type: typeof SET_FROM_HISTORY;
  payLoad: any;
}

export type TListCurrencies =
  | "AUD"
  | "BGN"
  | "BRL"
  | "CAD"
  | "CHF"
  | "CNY"
  | "CZK"
  | "DKK"
  | "GBP"
  | "HKD"
  | "HRK"
  | "HUF"
  | "IDR"
  | "ILS"
  | "INR"
  | "ISK"
  | "JPY"
  | "KRW"
  | "MXN"
  | "MYR"
  | "NOK"
  | "NZD"
  | "PHP"
  | "PLN"
  | "RON"
  | "RUB"
  | "SEK"
  | "SGD"
  | "THB"
  | "TRY"
  | "USD"
  | "ZAR"
  | "unknown";

export interface IListCurrencies {
  AUD: Number;
  BGN: Number;
  BRL: Number;
  CAD: Number;
  CHF: Number;
  CNY: Number;
  CZK: Number;
  DKK: Number;
  GBP: Number;
  HKD: Number;
  HRK: Number;
  HUF: Number;
  IDR: Number;
  ILS: Number;
  INR: Number;
  ISK: Number;
  JPY: Number;
  KRW: Number;
  MXN: Number;
  MYR: Number;
  NOK: Number;
  NZD: Number;
  PHP: Number;
  PLN: Number;
  RON: Number;
  RUB: Number;
  SEK: Number;
  SGD: Number;
  THB: Number;
  TRY: Number;
  USD: Number;
  ZAR: Number;
}
export interface IListCurrenciesAction {
  type: typeof SET_LIST_CURRENCIES;
  payLoad: IListCurrencies;
}

export interface ICurrentDateAction {
  type: typeof SET_CURRENT_DATE;
  payLoad: Date;
}

export type RateDispatchTypes =
  | IHistoryAction
  | IToHistory
  | IFromHistory
  | IListCurrenciesAction
  | ICurrentDateAction;
