import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import Hidden from 'material-ui/Hidden';

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
    border: "2px solid #FF9800"
  },
});

class MyConnexionForm extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <Grid container  className={classes.root}>

        <Hidden xsDown><Grid item xs className={classes.spacer}/></Hidden>

        <Grid item xs={12} sm={10} md={8} lg={6} xl={4}>
          <Paper className={classes.root} elevation={4}>
          <form noValidate autoComplete="off">
            <TextField
              id="name"
              label="Pseudo"
              //onChange={this.handleChange('name')}
              margin="normal"
            />
            <Button raised color="primary">
              OK
          </Button>
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
