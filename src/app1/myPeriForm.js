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
    fetch(apiGetUserUrl(userid))
          .then(data => data.json())
          .then( content => this.setState( { content }) );
  }

  componentDidMount()
  {
    this.apiUser("1");
  }

  componentWillReceiveProps(nextProps)
  {
    console.log( nextProps.userid );
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
