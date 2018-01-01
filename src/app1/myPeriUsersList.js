import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = {};

class MyPeriUsersList extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <List className={classes.root} subheader={<div />}>
      {
          [1, 2, 3, 4, 5, 6, 7, 8, 9,"1xNjaYvMqZXjb"].map(item => (
          <ListItem button key={item} onClick={ () => this.props.cbUserSelected( item )}>
            <ListItemText primary={`User ${item}`} />
          </ListItem>
        ))
      }
      </List>
    );
  }
}

MyPeriUsersList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyPeriUsersList);
