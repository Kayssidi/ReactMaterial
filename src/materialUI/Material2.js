import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Button from "material-ui/Button";

const styles = theme => ({
  myButton: {
    position: "relative",
    border: "2px solid #FF9800"
  },

  myButtonOpen: {
    marginLeft: 100,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },

  myButtonClose: {
    marginLeft: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});

class Material2 extends React.Component {
  state = {
    openState: false
  };

  toogleState = event => {
    console.log("Toogle");
    this.setState((prevState, props) => ({ openState: !prevState.openState }));
  };

  render() {
    const { classes } = this.props;
    return (
      <div
        className={
          this.state.openState ? classes.myButtonOpen : classes.myButtonClose
        }
      >
        <Button raised color="primary" onClick={e => this.toogleState(e)}>
          {this.state.openState ? "Close" : "Open"}
        </Button>
        <Button raised color="primary">
          :)
        </Button>
        <br />
        <Button raised color="primary">
          :)
        </Button>
      </div>
    );
  }
}

Material2.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Material2);
