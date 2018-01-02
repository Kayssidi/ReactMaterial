import React, { Component } from 'react'
//import { scaleLinear } from 'd3-scale’
//import { max } from 'd3-array'
//import { select } from 'd3-selection'
import * as d3 from 'd3';

class BarChart extends Component {

   constructor(props){
      super(props)
      this.createBarChart = this.createBarChart.bind(this)
   }

   componentDidMount() {
      this.createBarChart()
   }

   componentDidUpdate() {
      this.createBarChart()
   }

   createBarChart() {
      const node = this.node
      const dataMax = d3.max(this.props.data)
      const yScale = d3.scaleLinear()
                       .domain([0, this.props.maxDataValue])
                       .range([0, this.props.size[1]]);

      const xScale = d3.scaleLinear()
                        .domain([0, this.props.data.length])
                        .range([0, this.props.size[0]]);
   
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .enter()
      .append('rect')
   
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .exit()
      .remove()
   
   d3.select(node)
      .selectAll('rect')
      .data(this.props.data)
      .style('fill', '#fe9922')
      .attr('x', (d,i) => xScale(i) )
      .attr('y', d => this.props.size[1] - yScale(d))
      .attr('height', d => yScale(d))
     .attr('width', this.props.size[0] / this.props.data.length)
   }
render() {
      return <svg
                  ref={node => this.node = node}
                  width={this.props.size[0]}
                  height={this.props.size[1]}>
            </svg>
   }
}
export default BarChart