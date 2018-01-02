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
            maxDataValue : 100,
  };

  addData = () =>
  {
    const datas = this.state.datas;
    const v = Math.random();
    datas.push(v * this.state.maxDataValue);
    this.setState ( {datas} );
  }

  removeData = () =>
  {
    const datas = this.state.datas;
    datas.shift();
    this.setState( {datas} );
  }

  addRemoveData = () =>
  {
    this.addData();
    this.removeData();
  }

  clearData = () =>
  {
    const datas = [];
    this.setState( {datas} );
  }

  render() {
    const { classes } = this.props;
    return (
            <div>
              <MyAppBar title="D3 Tester" />
              <BarChart data={this.state.datas}
                        maxDataValue={this.state.maxDataValue}
                        size={[500, 250]} />
              
              <div>
                <Button raised color= "primary" type="button" onClick={() => this.addData() } >
                  Add Data
                </Button>

                <Button raised color="primary" type="button" onClick={() => this.removeData() } >
                  Remove Data
                </Button>

                <Button raised color="primary" type="button" onClick={() => this.addRemoveData() } >
                  Add&Remove Data
                </Button>

                <Button raised color="primary" type="button" onClick={() => this.clearData()} >
                  Clear Data
                </Button>

                {this.state.datas.length}
                
              </div>
            </div>
           );
  }
}

PageD3.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageD3);
