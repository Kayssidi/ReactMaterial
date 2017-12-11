import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withWidth from "material-ui/utils/withWidth";
import Typography from "material-ui/Typography";

import compose from "recompose/compose";

const styles = theme => ({
  myMainDiv: {
    position: "static",
    border: "2px solid #FF9800"
  }
});

class Material3 extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.myMainDiv}>
        <Typography type="body1">W:{this.props.width}</Typography>
      </div>
    );
  }
}

Material3.propTypes = {
  classes: PropTypes.object.isRequired
};

//export default withStyles(styles)(MaterialClassTemplate);
export default compose(withStyles(styles), withWidth())(Material3);
