import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import MyPeriForm from './myPeriForm';
import MyPeriUsersList from './myPeriUsersList';



const styles = {};

class PagePeri extends React.Component {

  state = {
    userid:1,
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyAppBar title="Peri API Tester" />
        <MyPeriUsersList cbUserSelected={ (userid) => this.setState( {userid} )}/>
        <MyPeriForm userid={this.state.userid}/>
      </div>
    );
  }
}

PagePeri.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PagePeri);
