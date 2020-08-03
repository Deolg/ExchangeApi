import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { setHistory, setListCurrencies } from "../../actions/RateAction";

import { SET_TO_HISTORY, SET_FROM_HISTORY } from "../../actions/RateTypes";

import RateItem from "./RateItem";
import HistoryList from "./HistoryList";

import { Container, Paper, Grid } from "@material-ui/core";
import {
  IToHistory,
  IFromHistory,
  IListCurrenciesAction,
  ICurrentDateAction,
  TListCurrencies,
} from "../../types/Rate";

interface IProps {
  toHistory: string[] | IToHistory;
  fromHistory: string[] | IFromHistory;
  listCurrencies: {} | IListCurrenciesAction;
  currentDate: {} | ICurrentDateAction;
  setHistory: (
    //date: (minusDay: number, currentDate: Date) => Date,
    date: Date | {},
    currentDate: Date | {},
    rate: TListCurrencies,
    type: typeof SET_FROM_HISTORY | typeof SET_TO_HISTORY
  ) => void;
  setListCurrencies: () => void;
}

class RatesComponent extends React.Component<IProps, {}> {
  handleHistoryFrom = (rate: TListCurrencies) => {
    this.props.setHistory(
      this.convertDate(5, this.props.currentDate),
      this.props.currentDate,
      rate,
      SET_FROM_HISTORY
    );
  };

  handleHistoryTo = (rate: TListCurrencies) => {
    this.props.setHistory(
      this.convertDate(5, this.props.currentDate),
      this.props.currentDate,
      rate,
      SET_TO_HISTORY
    );
  };

  convertDate = (minus: number, currentDate: any) => {
    let date = moment(new Date(currentDate));
    date.subtract(minus, "days");
    return date.format("yyyy-MM-DD");
  };

  componentDidMount() {
    this.props.setListCurrencies();
  }

  render() {
    return (
      <Container className="currency-exchange-container" fixed>
        <h1>Currency exchange</h1>
        <Paper className="currency-exchange-paper" variant="outlined">
          <Grid container justify="center" spacing={3}>
            <Grid item xs={6}>
              <RateItem
                listCurrencies={this.props.listCurrencies}
                handleHistorySet={this.handleHistoryFrom}
              />
              <HistoryList history={this.props.fromHistory} />
            </Grid>
            <Grid item xs={6}>
              <RateItem
                listCurrencies={this.props.listCurrencies}
                handleHistorySet={this.handleHistoryTo}
              />
              <HistoryList history={this.props.toHistory} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    fromHistory: state.rate.fromHistory,
    toHistory: state.rate.toHistory,
    listCurrencies: state.rate.listCurrencies,
    currentDate: state.rate.currentDate,
  };
};

const mapDispathcToProps = {
  setHistory,
  setListCurrencies,
};

interface IMapState {
  fromHistory: any;
  toHistory: any;
  listCurrencies: any;
  currentDate: any;
}

interface IMapDispathc {
  setHistory: any;
  setListCurrencies: any;
}

export default connect<IMapState, IMapDispathc>(
  mapStateToProps,
  mapDispathcToProps
)(RatesComponent);
