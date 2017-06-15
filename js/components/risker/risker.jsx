import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import styles from './styles.css';
import Charts from './charts/charts'

class Risker extends Component {
    constructor(props) {
        super(props)
        this.state = {
            riskVal: 1
        }    
    }

    componentDidMount() {
        if (!this.props.level) {
            this.props.dispatch(actions.changeRiskLevel(1))
        }
    }

    updateRisk(e) {
        this.setState({ riskVal: e.target.value })
        this.props.dispatch(actions.changeRiskLevel(e.target.value))
    }

    render() {
        console.log(this.props.level);
        return (
            <div styleName="styles.container">
                <h4>What is your preferred level of financial risk?</h4>
                <h4 styleName="styles.risk-val">{this.state.riskVal}</h4>
                <input
                  styleName="styles.slider"
                  type="range"
                  min="1" 
                  max="10"
                  value={this.state.riskVal}
                  onChange={evt => this.updateRisk(evt)}
                  />
                <break></break>
                <div styleName="chart-wrapper">
                    <Charts risk={this.state.riskVal} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    level: state.level,
})

export default connect(mapStateToProps)(Risker);