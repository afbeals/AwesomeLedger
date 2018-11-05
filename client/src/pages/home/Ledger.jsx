//Packages
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Local
import LedgerHeader from "./ledger/LedgerHeader";
import List from "./ledger/List";

class Ledger extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { classname } = this.props;
    return (
      <div className={`${classname}`}>
        <button onClick={() => console.log(this.props.getstate)}>
          show state
        </button>
        <LedgerHeader classname={`${classname}__header`} />
        <List classname={`${classname}__list`} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getstate: state
});

const mapDispatchToProps = dispatch => ({});

Ledger.propTypes = {
  classname: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ledger);
