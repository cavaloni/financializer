import React from 'react';
import styles from './styles.css';

const BodyWrapper = ({ children }) => (
  <div styleName="styles.main">
    {children}
  </div>
);

BodyWrapper.propTypes = {
  children: React.PropTypes.element.isRequired,
};

export default BodyWrapper;
