import React from "react";

import { Paper, Grid } from "@material-ui/core";

interface IProps {
  history: any; //[[Date, {}]];
}

const HistoryList: React.FC<IProps> = ({ history }) => {
  return (
    <Grid item xs={12}>
      {history.map((value: any) => (
        <Paper key={value}>{`${value[0]}: ${
          value[1][Object.keys(value[1]) as any]
        }`}</Paper>
      ))}
    </Grid>
  );
};

export default HistoryList;
