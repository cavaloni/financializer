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
    if (!this.props.riskLevels) {
        this.props.dispatch(actions.changeRiskLevel(1));
    } else {
        this.getPercentages(this.props);
    }
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
    const invCategories = ['cash', 'bonds', 'stocks', 'gold', 'annuities'];
    const levelsAndNames = [];
    for (let i = 0; i < props.riskLevels.length; i += 1) {
      levelsAndNames[i] = {
        y: props.riskLevels[i],
        name: invCategories[i],
      };
    }
    this.setState({ dataSet: levelsAndNames });
  }

  render() {
    console.log(this.state);
    const chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        margin: [0, 0, 0, 0],
      },
      colors: ['#5035F7', '#7265C4', '#9E9488', '#C48C65', '#9E7671'],
      title: {
        text: 'Wealth<br>distribution',
        align: 'center',
        verticalAlign: 'middle',
        y: 40,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            distance: -50,
            style: {
              color: 'black',
              textOutline: 'none',
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
        name: 'Wealth Distribution',
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
});

export default connect(mapStateToProps)(Charts);
