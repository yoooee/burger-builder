import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const input = props => {
  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={classes.InputElement}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={classes.InputElement}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={classes.InputElement}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

input.propTypes = {
  elementType: PropTypes.string,
  elementConfig: PropTypes.object,
  value: PropTypes.string,
  label: PropTypes.string,
  changed: PropTypes.func
};

export default input;
