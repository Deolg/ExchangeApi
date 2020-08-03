import React, { useState } from "react";

import { Grid, TextField, Select, MenuItem } from "@material-ui/core";
import { IListCurrencies, TListCurrencies } from "../../types/Rate";

interface IProps {
  listCurrencies: IListCurrencies | {};
  handleHistorySet: (rate: TListCurrencies) => void;
}

const RateItem: React.FC<IProps> = ({ listCurrencies, handleHistorySet }) => {
  const [currency, setCurrency] = useState("");
  const [value, setValue] = useState("");

  const handleCurrencyChange = (
    event: React.ChangeEvent<{ value: TListCurrencies | unknown }>
  ): void => {
    let type = event.target.value as string;
    setCurrency(type);
    // @ts-ignore: Object is of type 'unknown'.
    setValue(listCurrencies[type]);
    // @ts-ignore: Object is of type 'unknown'.
    handleHistorySet(type);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <Select
          autoWidth={true}
          value={currency}
          onChange={handleCurrencyChange}
        >
          <MenuItem value={currency}>{currency}</MenuItem>
          {Object.keys(listCurrencies).map((rate, key) => (
            <MenuItem key={key} value={rate}>
              {rate}
            </MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid item xs={6}>
        <TextField id="full-width-text-field" type="text" value={value} />
      </Grid>
    </Grid>
  );
};
export default RateItem;
