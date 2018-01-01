import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import MyAppBar from './myAppBar';
import MyConnexionForm from './myConnexionForm';

import Button from 'material-ui/Button';

import { Route } from 'react-router-dom';

const styles = theme => ({

});

const ButtonToNavigate = ({url, title, history}) => (
    <Button raised color= "primary"
      type="button"
      onClick={() => history.push(url)}
    >
      {title}
    </Button>
);

function PageConnexion(props) {
  const { classes } = props;
  return (
    <div>
      <MyAppBar title="Connexion" />
      <MyConnexionForm />
      
      <Route path="/" render={ (props) =>
        <ButtonToNavigate {...props} url="/apitest" title="API Test"/>
      }/>
      <Route path="/" render={(props) =>
        <ButtonToNavigate {...props} url="/peri" title="Peri"/>
      } />
    </div>
  );
}

PageConnexion.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageConnexion);