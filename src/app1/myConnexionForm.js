import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginTop: theme.spacing.unit * 1,
  }),
});

class MyConnexionForm extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
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
    )
  }
}

MyConnexionForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyConnexionForm);
