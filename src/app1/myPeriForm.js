import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = {};

//const apiGetUserUrl = (userid) => `https://api.periscope.tv/api/v2/getUserPublic?user_id=${userid}`;
const apiGetUserUrl = (userid) => `https://jsonplaceholder.typicode.com/users/${userid}`;

class MyPeriForm extends React.Component {
  state = {
    content : {},
  };

  apiUser = (userid) => {
    fetch(apiGetUserUrl(userid), { mode: 'cors'})
          //.then( data => console.log(data));
          .then(data => { return data.json() })
          .then( content => this.setState( { content }) );
  }

  componentWillReceiveProps(nextProps)
  {
    this.apiUser( nextProps.userid );
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          {this.state.content.id}
        </Typography>
        <Typography component="p">
          {this.state.content.username}
        </Typography>
      </Paper>
    );
  }
}

MyPeriForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyPeriForm);
