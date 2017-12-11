import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const styles =
{
  style_rootDiv: {
    width: '100%',
  },

  style_title: {
    flex: 1,
  },

};

class MyAppBar extends React.Component {
  state =
  {
    myTitle: this.props.title
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.style_rootDiv}>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit" className={classes.style_title}>
              {this.state.myTitle}
            </Typography>
            {this.props.showLogButton && <Button color="contrast">Change log</Button>}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyAppBar);
