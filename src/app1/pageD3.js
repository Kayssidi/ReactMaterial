import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

import Button from 'material-ui/Button';

import BarChart from './d3/BarChart'
import MyAppBar from './myAppBar';

const styles = {};

class PageD3 extends React.Component {
  state = {
            datas : [],
  };

  addData = () =>
  {
    const datas = this.state.datas;
    const v = Math.random();
    datas.push(v * 100);
    this.setState ( {datas} );
  }

  removeData = () =>
  {
    const datas = this.state.datas;
    datas.shift();
    this.setState( {datas} );
  }

  render() {
    const { classes } = this.props;
    return (
            <div>
              <MyAppBar title="D3 Tester" />
              <BarChart data={this.state.datas} size={[500, 250]} />
              
              <Button raised color= "primary" type="button" onClick={() => this.addData() } >
                Add Data
              </Button>

              <Button raised color="primary" type="button" onClick={() => this.removeData() } >
                Remove Data
              </Button>
            </div>
           );
  }
}

PageD3.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageD3);
