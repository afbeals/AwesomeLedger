import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import ToolTip from "./ToolTip.jsx";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SvgIcon from "@material-ui/core/SvgIcon";
import Icon from "@material-ui/core/Icon";

class Navigation extends React.Component {
  render() {
    const { handleNavigation } = this.props;
    return (
      <AppBar>
        <Toolbar>
          <ToolTip displayWhen={true} tip={`Home`}>
            <Icon
              className={"fas fa-home"}
              aria-label="go home"
              alt="home"
              onClick={() => handleNavigation("/")}
            />
          </ToolTip>
          <Typography
            variant="h6"
            color="inherit"
            aria-label="Your Awesome Ledger"
            alt="Ledger"
          >
            Your Awesome Ledger
          </Typography>
          <div>
            <ToolTip displayWhen={true} tip={`Home`}>
              <Icon
                className={"fas fa-home"}
                aria-label="go home"
                alt="home"
                onClick={() => handleNavigation("/")}
              />
            </ToolTip>
            <ToolTip displayWhen={true} tip={`Home`}>
              <Icon
                className={"fas fa-home"}
                aria-label="go home"
                alt="home"
                onClick={() => handleNavigation("/")}
              />
            </ToolTip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  handleNavigation: route => {
    dispatch(push(route));
  }
});

Navigation.propTypes = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
