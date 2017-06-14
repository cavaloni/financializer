import React, { Component } from 'react';
import styles from './styles.css';
import Title from '../title/title';
import Risker from '../risker/risker';
import BodyWrapper from '../body-wrapper/body-wrapper';
import Actual from '../actual/actual';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Title />
        <BodyWrapper>
          <Risker/>
          <break/>
          <Actual/>
        </BodyWrapper>
      </div>
      
      );
  }
}

// App.propTypes = {
//   children: React.PropTypes.node.isRequired,
// };
