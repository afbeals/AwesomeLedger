import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Local
import * as selectors from "../../../modules/ledger/selectors";

class ActionMenuList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <ul>
        <li
          onClick={() => {
            console.log("aefa");
          }}
        >
          Add Item
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
