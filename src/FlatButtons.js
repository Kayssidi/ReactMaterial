import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

function doSomething(event) {
  // eslint-disable-next-line no-console
  console.log(event.currentTarget.getAttribute('dataKDO-something'));
}

function FlatButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="accent" className={classes.button}>
        Accent
      </Button>
      <Button raised color="contrast" className={classes.button}>
        Contrast
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button fab href="#flat-buttons" className={classes.button}>
        Link
      </Button>
      <Button disabled /*component={Link}*/ href="/" className={classes.button}>
        Link disabled
      </Button>
      <Button dense className={classes.button}>
        Dense
      </Button>
      <Button className={classes.button} onClick={doSomething} dataKDO-something="here I am">
        Does something
      </Button>
    </div>
  );
}

FlatButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FlatButtons);