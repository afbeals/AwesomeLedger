import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { List as ReactVirList, AutoSizer } from "react-virtualized";
import { Column, Table } from "react-virtualized";
import "react-virtualized/styles.css";
//Local
import ListRow from "./list/ListRow";
import * as selectors from "../../../modules/ledger/selectors";
import { actions } from "../../../modules/ledger/";

class List extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.rowRenderer = this.rowRenderer.bind(this);
  }

  componentDidMount() {
    this.props.handleLedgerFetch("00");
  }

  getData() {
    if (this.props.getIsLedgerLoaded) {
      return this.props.getLedgerArray;
    } else {
      return [];
    }
  }

  rowRenderer({ key, index, isScrolling, style }) {
    const data = this.getData();

    return (
      <div className={`${this.getClassName()}__row`} key={key} style={style}>
        <ListRow
          listData={data[index]}
          classname={`${this.getClassName()}__row__item`}
        />
      </div>
    );
  }

  calculateTotals(rowIndex) {
    const data = this.getData();
    let total = null;
    for (let x = 0; x < rowIndex + 1; x++) {
      let item = data[x];
      if (item.debit) {
        total = total - Number(item.debit);
      } else if (item.credit) {
        total = total + Number(item.credit);
      }
    }

    return `${total}`;
  }

  renderLedgerList() {
    if (this.props.getIsLedgerLoading) {
      return <p>loading...</p>;
    } else if (!this.props.getIsLedgerLoaded) {
      return <div className={`noContent`}>Waiting for user...</div>;
    } else if (this.props.getIsLedgerLoaded && !this.getData().length) {
      return <div className={`noContent`}>No items available</div>;
    } else {
      return (
        <AutoSizer>
          {({ width }) => (
            <Table
              width={width - 2}
              height={250}
              headerHeight={45}
              rowHeight={55}
              rowCount={this.getData().length}
              rowGetter={({ index }) => this.getData()[index]}
            >
              <Column
                label="Date"
                dataKey="date"
                width={width / 3}
                cellRenderer={({ cellData }) => {
                  return `${new Date(cellData)
                    .toUTCString()
                    .split(" ")
                    .slice(0, 4)
                    .join(" ")} ${new Date(cellData).toLocaleString(
                    "en-US",
                    { hour: "numeric", minute: "numeric", hour12: true }
                  )}`;
                }}
              />
              <Column
                width={width / 6}
                label="Description"
                dataKey="description"
              />
              <Column width={width / 8} label="Debit" dataKey="debit" />
              <Column width={width / 8} label="Credit" dataKey="credit" />
              <Column
                width={width / 8}
                disableSort
                label="Total"
                dataKey="random"
                cellRenderer={({ rowIndex }) => {
                  return this.calculateTotals(rowIndex);
                }}
                flexGrow={1}
              />
            </Table>
          )}
        </AutoSizer>
      );
    }
  }

  getClassName() {
    const { classname } = this.props;
    return `${classname}`;
  }

  render() {
    return (
      <div className={`${this.getClassName()}`}>{this.renderLedgerList()}</div>
    );
  }
}

const mapStateToProps = state => ({
  getIsLedgerLoading: selectors.getIsLedgerLoading(state),
  getIsLedgerLoaded: selectors.getIsLedgerLoaded(state),
  getLedgerList: selectors.getLedgerList(state),
  getLedgerArray: selectors.getLedgerListToArray(state)
});

const mapDispatchToProps = dispatch => ({
  handleLedgerFetch: userId => {
    dispatch(actions.fetchLedger(userId));
  }
});

List.propTypes = {
  getIsLedgerLoading: PropTypes.bool.isRequired,
  getIsLedgerLoaded: PropTypes.bool.isRequired,
  getLedgerList: PropTypes.object,
  getLedgerArray: PropTypes.array,
  classname: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
