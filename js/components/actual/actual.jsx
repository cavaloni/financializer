import React, { Component } from 'react';
import { connect } from 'react-redux';
import NumbersInput from './numbers-input/numbers-input';
import * as actions from '../../actions/index.js';
import styles from './styles.css';

class Actual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cash: 0,
      bonds: 0,
      stocks: 0,
      gold: 0,
      annuities: 0,
      getNums: false,
    };
    this.getNums = this.getNums.bind(this);
    this.triggerCollectNums = this.triggerCollectNums.bind(this);
  }

  getNums(e, invType) {
    this.setState({ [invType]: Number(e), getNums: false });
  }

  saveState() {
    const actNums = {
      cash: this.state.cash,
      bonds: this.state.bonds,
      stocks: this.state.stocks,
      gold: this.state.gold,
      annuities: this.state.annuities,
    };
    this.props.dispatch(actions.updateActualNumbers(actNums));
  }

  triggerCollectNums() {
    this.setState({ getNums: true }, () => { this.saveState(); });
  }
//word
  render() {
    return (
      <div styleName="styles.actual">
        <h3 styleName="styles.head">What are your current investments?</h3>
        <NumbersInput invType="Cash" numCallBack={this.getNums} getNums={this.state.getNums} />
        <NumbersInput invType="Bonds" numCallBack={this.getNums} getNums={this.state.getNums} />
        <NumbersInput invType="Stocks" numCallBack={this.getNums} getNums={this.state.getNums} />
        <NumbersInput invType="Gold" numCallBack={this.getNums} getNums={this.state.getNums} />
        <NumbersInput invType="Annuities" numCallBack={this.getNums} getNums={this.state.getNums} />
        <button styleName="styles.calculate" onClick={this.triggerCollectNums}>
            Calculate
        </button>
      </div>
    );
  }
}

export default connect()(Actual);
