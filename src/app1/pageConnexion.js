import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MyAppBar from './myAppBar';
import MyConnexionForm from './myConnexionForm';

const styles = theme => ({

});

function PageConnexion(props) {
  const { classes } = props;
  return (
    <div>
      <MyAppBar title="Connexion" />
      <MyConnexionForm />
    </div>
  );
}

PageConnexion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageConnexion);