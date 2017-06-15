import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import styles from './styles.css';

const ReactHighcharts = require('react-highcharts');

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
    const chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        margin: [0, 0, 0, 0],
        style: {
          overflow: 'hidden',
        },
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
      scrollbar: {
        enabled: false,
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
  riskLevels: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  dispatch: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({ // eslint-disable-line
  riskLevels: state.riskLevels,
});

export default connect(mapStateToProps)(Charts);
