import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';

import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

import { Route,Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 1,
    textAlign: 'center',
    //position: "absolute",
  }),
  spacer:
  {
    //border: "2px solid #EEEEEE"
  },
});

const ButtonToNavigate = ({ title, history }) => (
  <Tooltip title="Let's Go :) !" placement="bottom">
    <Button raised color= "primary"
      type="button"
      onClick={() => history.push('/pseudo')}
    >
      {title}
    </Button>
  </Tooltip>
);

class MyConnexionForm extends React.Component {
  state = {};

  handleChange = (event) =>
  {
    console.log("change in form");
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container  className={classes.root}>

        <Hidden xsDown><Grid item xs className={classes.spacer}/></Hidden>

        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Paper className={classes.root} elevation={4}>
            
            <Typography type="headline">
              Hello!
            </Typography>
            <Typography type="body1">
              Enter your pseudonym and click ok button:
            </Typography>

          <form noValidate autoComplete="off">
            <TextField
              id="name"
              label="Pseudo"
              onChange={this.handleChange}
              margin="normal"
            />
            
          <Route path="/" render={ (props) =>
            <ButtonToNavigate {...props} title="OK" />
          }/>

          </form>
          </Paper>
        </Grid>

        <Hidden xsDown><Grid item xs className={classes.spacer} /></Hidden> 
      </Grid>
      
    )
  }
}

MyConnexionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyConnexionForm);
