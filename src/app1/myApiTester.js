import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const apiTestUrl = (suffix) => `https://jsonplaceholder.typicode.com/${suffix}`;

class MyApiTester extends React.Component {
  state = {
    contents: {},
  };

  apiTest1 = () => {
    console.log("Clicked");
    fetch(apiTestUrl("posts/"))
          .then(data => data.json())
          .then( contents => this.setState( { contents }) );
  }


  render() {
    const { classes } = this.props;

    const contents = Object
      .keys(this.state.contents)
      .map((key, index) => {
        return (
          <Paper className={classes.root} elevation={4} key={index}>
            <Typography type="headline" component="h3">
              {this.state.contents[key].title}
            </Typography>
            <Typography component="p">
              {this.state.contents[key].body}
            </Typography>
          </Paper>
        )
      });

    return (<div >
              <Button raised color= "primary"
                      type="button"
                      onClick={ () => this.apiTest1() }
              >ApiTest1</Button>
              {contents}
            </div>
    );
  }
}

MyApiTester.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyApiTester);
