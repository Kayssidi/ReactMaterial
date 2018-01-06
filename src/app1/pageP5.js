import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import P5Wrapper from './p5/p5Wrapper';
import sketcher from './p5/WalkerP5';

const styles = {};

class PageP5 extends React.Component {
  
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyAppBar title="P5 Tester" />
        <P5Wrapper sketch={sketcher}/>
      </div>
    );
  }
}

PageP5.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageP5);
