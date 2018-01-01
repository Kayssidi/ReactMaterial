import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";


import MyAppBar from './myAppBar';
import MyApiTester from './myApiTester';

const styles = {};

class PageApiText extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyAppBar title="API Tester" />
        <MyApiTester/>
      </div>
    );
  }
}

PageApiText.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageApiText);
