import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FaceIcon from 'material-ui-icons/Face';

const styles = theme => ({
  root: theme.mixins.gutters({
    padding: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  }),
});

class MyChatMessage extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <ListItem>
        <Avatar>
          <FaceIcon/>
        </Avatar>
        <ListItemText primary={this.props.pseudo} secondary={this.props.message} />
      </ListItem>
    )
  }
}

MyChatMessage.propTypes = {
  classes: PropTypes.object.isRequired
};

MyChatMessage.defaultProps = {
  message: "MyMessage",
  pseudo: "MyPseudo",
};

export default withStyles(styles)(MyChatMessage);
