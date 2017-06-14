import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs';
const ReactHighcharts = require('react-highcharts');
import styles from './styles.css';
import * as actions from '../../../actions/index.js';
import { connect } from 'react-redux';
// something

class Charts extends Component {
  constructor(props) {
    super();
    this.state = {
      riskLevel: props.risk,
      dataSet: [],
    };
    this.getPercentages = this.getPercentages.bind(this);
  }

  componentDidMount() {
    this.getPercentages(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.riskLevels) {
        this.getPercentages(nextProps);
    }
    if (nextProps.risk !== this.props.risk) {
      this.getPercentages(nextProps);
    }
  }

  getPercentages(props) {
      console.log(props);
    this.setState({ dataSet: props.riskLevels });
  }

  render() {
      console.log(this.state);
    const chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
      },
      title: {
        text: 'Browser<br>shares<br>2015',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
            },
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '75%'],
        },
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal',
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5,
              },
              title: {
                text: null,
              },
            },
            subtitle: {
              text: null,
            },
            credits: {
              enabled: false,
            },
          },
        }],
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        innerSize: '50%',
        data: [
          ...this.state.dataSet,
          {
            name: 'Proprietary or Undetectable',
            y: 0.2,
            dataLabels: {
              enabled: false,
            },
          },
        ],
      }],
    };

    return (
      <div styleName="styles.chart">
        <ReactHighcharts config={chartOptions} />
      </div>
    );
  }
}

Charts.propTypes = {
  risk: React.PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  riskLevels: state.riskLevels,
})

export default connect(mapStateToProps)(Charts);
