import React, { Component } from 'react';
import styles from './numbers-input.css';

class NumbersInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numInput: 0,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getNums) {
      const invType = this.props.invType.toLowerCase();
      this.props.numCallBack(this.state.numInput, invType);
    }
  }

  handleInputChange(e) {
    this.setState({ numInput: e.target.value });
  }

  render() {
    const { invType } = this.props;
    return (
      <div styleName="styles.input-container">
        {invType}
        <input
          styleName="styles.actual-numbers"
          name={invType}
          type="number"
          value={this.state.numInput}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

NumbersInput.propTypes = {
  invType: React.PropTypes.string.isRequired,
  numCallBack: React.PropTypes.func.isRequired,
  getNums: React.PropTypes.bool.isRequired,
};

export default NumbersInput;
