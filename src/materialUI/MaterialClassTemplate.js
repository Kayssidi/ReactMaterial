import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = {};

class MaterialClassTemplate extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return <div />;
  }
}

MaterialClassTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MaterialClassTemplate);
