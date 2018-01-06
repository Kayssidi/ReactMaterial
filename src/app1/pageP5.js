import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import MyAppBar from './myAppBar';
import Button from 'material-ui/Button';

import P5Wrapper from './p5/p5Wrapper';
import sketchDraw from './p5/drawP5';
import sketchWalker from './p5/WalkerP5';

const styles = {};

class PageP5 extends React.Component {

  state = {
    selectedSketch: sketchWalker,
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <MyAppBar title="P5 Tester" />
        <div>
          <Button raised color="primary" type="button" onClick={() => this.setState({ selectedSketch: sketchDraw}) } >
            Draw Sketch
          </Button>

          <Button raised color="primary" type="button" onClick={() => this.setState({ selectedSketch: sketchWalker })} >
            Walker Sketch
          </Button>
        </div>
        <P5Wrapper sketch={this.state.selectedSketch}/>
      </div>
    );
  }
}

PageP5.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageP5);
