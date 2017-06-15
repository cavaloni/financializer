import React from 'react';
import styles from './styles.css';

const Move = ({ from, to, amount }) => (
  <div styleName="styles.mover">
    <div>Transfer ${amount} from <b>{from}</b> to <b>{to}</b></div>
  </div>
);

Move.propTypes = {
  from: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired,
  amount: React.PropTypes.number.isRequired,
};

export default Move;
