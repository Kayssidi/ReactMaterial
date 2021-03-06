import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import MyChatMessage from './myChatMessage'

import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import { GridList, GridListTile } from 'material-ui/GridList';

const styles = theme => ({
  root:
  {
    /*marginTop: theme.spacing.unit * 3,*/
    /*padding: theme.spacing.unit * 3,*/
    //border: '2px solid #FF9800',
    //position: 'relative',
    //display: 'flex',
    width: '100%',
    height: '100%',
    //overflow: 'auto'  ,

  },
  container:
  {
    border: '1px solid #FF0000',    
    height: '80%',
  },
  textedit:
  {
    //position:'fixed',
    //position: 'static',
    //bottom: 0,
    //left: 0,
    width: '100%',
    //border: '2px solid #00FF00',
    //backgroundColor: '#FFFFFF',
  },
});

class pageChat extends React.Component {

  textFiledInputRef = null;

  state = {
    myPseudo: this.props.pseudo,
    messages: {},
  };

  componentWillMount() {
    {
      console.log("componentWillMount");
      let messages = {};
      [0,1,2/*,3,4,5,6*/].map((key, index) => {
        messages[`messageX-${index}`] = { msg_pseudo: '', msg_message: '' };
      });
      this.setState({ messages }); 
    }
  }

  addMessage = () => {
    const message = this.textFiledInputRef.value; //this.state.currentMessage;
    // 1 MAJ state
    const messages = { ...this.state.messages };
    // 2 On ajoute le message avec une clé timestamp
    const timestamp = Date.now();
    messages[`message-${timestamp}`] = { msg_pseudo: this.state.myPseudo, msg_message:message };
    // On ne garde que les 10 derniers messages
    Object.keys(messages).slice(0, -10).map(key => messages[key] = null);
    // 3 Set State
    this.setState({ messages });

    this.textFiledInputRef.value = "";
  }

  render() {
    const { classes } = this.props;

    const messages = Object
      .keys(this.state.messages)
      .map((key, index) => {
        return (
          <GridListTile key={index}>
            {
              this.state.messages[key] &&
              <MyChatMessage key={index} pseudo={this.state.messages[key].msg_pseudo} message={this.state.messages[key].msg_message} />
            }
          </GridListTile>)
      });

    return (
      <div className={classes.root}>
        <MyAppBar title={this.state.myPseudo} showLogButton />

        <GridList className={classes.container} cols={1} cellHeight='auto'>
          {messages}
        </GridList>

        <form noValidate autoComplete="off" className={classes.textedit}>
          <TextField
            id="name"
            label="Message"
            margin="normal"
            fullWidth
            inputRef={ (node) => this.textFiledInputRef = node }
          />
          <Tooltip title="Send a message" placement="bottom">
            <Button raised color="primary"
              onClick={this.addMessage}
            >
              OK</Button>
          </Tooltip>
          <Tooltip title="Clear a message" placement="bottom">
            <Button raised color="Secondary">Clear</Button>
          </Tooltip>
        </form>

      </div>
    );
  }
}

pageChat.propTypes = {
  classes: PropTypes.object.isRequired,
  pseudo : PropTypes.string.isRequired
};

pageChat.defaultProps = {
  pseudo: "DefaultPseudo",
};

export default withStyles(styles)(pageChat);
