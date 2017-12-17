import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import { Route } from 'react-router-dom'

import withWidth from "material-ui/utils/withWidth";
import compose from "recompose/compose";

const styles =
{
  style_rootDiv: {
    width: '100%',
  },

  style_title: {
    flex: 1,
  },

};

const ButtonToNavigate = ({ title, history }) => (
  <Button raised color="secondary"
    onClick={ () => history.push('/') }
  >
    {title}
  </Button>
);

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
            <Typography type="caption" color="inherit">[ {this.props.width} ]&nbsp;</Typography>
            <Typography type="title" color="inherit" className={classes.style_title}>
              {this.state.myTitle}
            </Typography>
            {this.props.showLogButton &&
              <Route path="/" render={(props) => <ButtonToNavigate {...props} title="Disconnect" />} />
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MyAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), withWidth())(MyAppBar);