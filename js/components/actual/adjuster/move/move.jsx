import React from 'react';

const Move = ({ from, to, amount }) => (
  <div>
    <div>Transfer ${amount} from {from} to {to}.</div>
  </div>
);

export default Move;
