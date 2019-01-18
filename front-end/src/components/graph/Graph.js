import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class Graph extends Component {
  state = {
    voltage: []
  };

  data = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    datasets: [
      {
        label: "Data",
        fill: false,
        borderColor: "rgba(0,0,0,1)",
        pointRadius: 0,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    ]
  };
  render() {
    return (
      <div>
        <Line data={this.data} />
      </div>
    );
  }
}

export default Graph;
