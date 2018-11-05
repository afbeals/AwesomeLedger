//Packages
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//Local
import ActionMenuHeader from "./actionMenu/ActionMenuHeader";
import ActionMenuList from "./actionMenu/ActionMenuList";

class ActionMenu extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  getClassName() {
    return `actionMenu`;
  }

  render() {
    return (
      <div>
        <button onClick={() => console.log(this.props.getstate)}>
          check state
        </button>
        <ActionMenuHeader classname={`${this.getClassName()}__header`} />
        <ActionMenuList classname={`${this.getClassName()}__list`} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  getstate: state
});

const mapDispatchToProps = dispatch => ({});

ActionMenu.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionMenu);
