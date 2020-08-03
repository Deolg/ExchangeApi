import { combineReducers } from "redux";

import { rateReducer } from "./RateReducer";

export const rootReducer = combineReducers({
  rate: rateReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;
