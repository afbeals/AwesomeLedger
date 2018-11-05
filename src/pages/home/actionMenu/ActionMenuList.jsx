import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Local
import * as selectors from "../../../modules/ledger/selectors";

class ActionMenuList extends React.Component {
  render() {
    return (
      <ul>
        <li
          onClick={() => {
            console.log("aefa");
          }}
        >
          Deposit
        </li>
        <li
          onClick={() => {
            console.log("aefa");
          }}
        >
          Withdraw
        </li>
        <li
          onClick={() => {
            console.log("aefa");
          }}
        >
          Check Balance
        </li>
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  getIsLedgerUpdating: selectors.getIsLedgerLoading(state)
});

const mapDispatchToProps = dispatch => ({});

ActionMenuList.propTypes = {
  getIsLedgerUpdating: PropTypes.bool.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionMenuList);
