import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(' ')}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

button.propTypes = {
  btnType: PropTypes.string,
  clicked: PropTypes.func,
  children: PropTypes.element
};

export default button;
