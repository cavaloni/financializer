import React, { Component } from 'react';
import { connect } from 'react-redux';
import Move from './move/move';
import styles from './styles.css';

class Adjuster extends Component {
  constructor(props) {
    super(props);
  }

  calculateMoves(actNums) {
    let total = 0;
    for (const num in actNums) {
      total += actNums[num];
    }

    const adjustedTotals = this.props.riskLevels.map(level => Math.round((level * 0.01) * total));

    const actNumsKeys = Object.keys(actNums);

    const surplus = [];
    const deficits = [];

    for (let i = 0; i < adjustedTotals.length; i += 1) {
      const amount = actNums[actNumsKeys[i]] - adjustedTotals[i];
      if (amount > 0) {
        surplus.push([amount, actNumsKeys[i]]);
      } else if (amount < 0) {
        deficits.push([amount, actNumsKeys[i]]);
      }
    }

    surplus.sort((a, b) => b[0] - a[0]);
    deficits.sort((a, b) => b[0] - a[0]);

    const moves = [];

    surplus.forEach((amt) => {
      while (amt[0] > 0) {
        const i = deficits.length === 1 ? 0 : deficits.length - 1;
        if (deficits[i]) {
          let currentDeficit = deficits[i][0];
          while (currentDeficit < 0) {
            if (amt[0] === 0) {
              break;
            }
            if (amt[0] + currentDeficit > 0) {
              moves.push([deficits[i][1], amt[1], Math.abs(currentDeficit)]);
              const amtCopy = amt[0];
              amt[0] += currentDeficit;
              deficits.pop();
              break;
            } else if (amt[0] + currentDeficit < 0) {
              moves.push([deficits[i][1], amt[1], amt[0]]);
              const difference = amt[0] + currentDeficit;
              const amtToAdd = currentDeficit - difference;
              amt[0] += amtToAdd;
              currentDeficit -= amtToAdd;
            } else {
              moves.push([deficits[i][1], amt[1], amt[0]]);
              amt[0] += currentDeficit;
              deficits.pop();
              break;
            }
          }
        }
      }
    });
    return moves;
  }

  render() {
    let moves = [];
    if (this.props.actNums) {
      moves = this.calculateMoves(this.props.actNums);
    }

    let movesDisplay = moves.map(move => (
      <Move from={move[1]} to={move[0]} amount={move[2]} key={moves.indexOf(move)} />
    ));

    if (!moves.length) {
      movesDisplay = <div />;
    }

    return (
      <div styleName="styles.movesList">
        { movesDisplay }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  actNums: state.actNums,
  riskLevels: state.riskLevels,
});

export default connect(mapStateToProps)(Adjuster);
