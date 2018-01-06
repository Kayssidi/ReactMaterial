import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import P5Wrapper from './p5/p5Wrapper';
import MyAppBar from './myAppBar';

const styles = {};

class PageP5 extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyAppBar title="P5 Tester" />
        <P5Wrapper />
      </div>
    );
  }
}

PageP5.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageP5);
