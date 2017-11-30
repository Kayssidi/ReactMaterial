import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Drawer from 'material-ui/Drawer';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';


import MenuIcon from 'material-ui-icons/Menu';

const drawerWidth = 240;

const styles = theme => ({
  root:
  {
      marginTop: theme.spacing.unit * 3,
      /*padding: theme.spacing.unit * 3,*/
      border: '2px solid #FF9800',
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '100%',

  },
  appbar:
  {
    position: 'absolute',
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
  },
  toolbar:
  {
    /*border: '2px solid #FF0000',*/
  },
  textFlex:
  {
    flex: 1,
  },
  drawer:
  {
    position: 'relative',
    height: '100%',
    width: drawerWidth,
    //border: '2px solid #FF0000',
  },
  drawerHeader: theme.mixins.toolbar,

  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
      marginTop: 64,
    },
  },

});

function Material1(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar} disableGutters>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.textFlex}>
            Toolbar
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>

      <Drawer type="permanent" classes={ {paper: classes.drawer,} } anchor="left">
        <div className={classes.drawerHeader} />
        
        <List>
          <Divider />
          <ListItem button>
            <ListItemText primary="Inbox" />
          </ListItem>
          <Divider light />
          <ListItem button>
            <ListItemText primary="Drafts" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Trash" />
          </ListItem>
        </List>

      </Drawer>

      <main className={classes.content}>
        <Typography type="body1">
          {'You think water moves fast? You should see ice.'}
        </Typography>
      </main>

    </div>
  );
}

Material1.propTypes =
{
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Material1);