import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({

});

function MaterialTemplate(props) {
  const { classes } = props;
  return (
    <div>

    </div>
  );
}

MaterialTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MaterialTemplate);