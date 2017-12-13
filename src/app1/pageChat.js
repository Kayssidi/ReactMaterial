import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import MyChatMessage from './myChatMessage'
const styles = {};

class pageChat extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div>
        <MyAppBar title="Chatroom" />
        <MyChatMessage pseudo="KDO" message="Juste pour tester"/>
        <MyChatMessage pseudo="CER" message="Hello" />

        {[0, 1, 2, 3, 4 , 5 ,6 , 7 , 8].map( (value,index) => (
          <MyChatMessage key={index} pseudo={"pseudo"+value} message={"message "+index} />
        ))}
      </div>
    );
  }
}

pageChat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(pageChat);
