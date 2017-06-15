import React, { Component } from 'react';
import styles from './styles.css';
import Title from '../title/title';
import Risker from '../risker/risker';
import BodyWrapper from '../body-wrapper/body-wrapper';
import Actual from '../actual/actual';
import Adjuster from '../actual/adjuster/adjuster'

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="styles.app">
        <Title />
        <BodyWrapper>
          <Risker/>
          <Actual/>
          <Adjuster/>
        </BodyWrapper>
      </div>
      
      );
  }
}
