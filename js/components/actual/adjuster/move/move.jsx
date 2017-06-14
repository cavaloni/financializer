import React from 'react';

const Move = ({ from, to, amount }) => (
  <div>
    <h2>Suggested transfers to match risk level</h2>
    <div>Transfer ${amount} from {from} to {to}.</div>
  </div>
);

export default Move;
