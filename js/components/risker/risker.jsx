import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import styles from './styles.css';
import Charts from './charts/charts'

class Risker extends Component {
    constructor(props) {
        
        super(props)
        this.state = {
            riskVal: 0
        }    
    }

    updateRisk(e) {
        this.props.dispatch(actions.changeRiskLevel(e.target.value))
    }

    render() {
        return (
            <div styleName="styles.container">
                <h4>What is your preferred level of financial risk?</h4>
                <input
                  styleName="styles.slider"
                  type="range"  
                  min="0" 
                  max="10"
                  value={this.props.level ? this.props.level : 0}
                  onChange={evt => this.updateRisk(evt)}
                  />
                <Charts risk={this.props.level} />
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    level: state.level,
})

export default connect(mapStateToProps)(Risker);