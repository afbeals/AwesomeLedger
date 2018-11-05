import React from "react";
import UserList from "./UserList";
import { actions } from "../modules/users";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Ledger extends React.Component {
  componentDidMount() {
    this.props.handleFetchUser();
  }

  render() {
    return <UserList />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleFetchUser: () => {
    dispatch(actions.fetchUserList());
  }
});

UserList.propTypes = {
  handleFetchUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ledger);
