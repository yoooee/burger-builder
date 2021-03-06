import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.css';

const input = props => {
  let inputElement = null;
  let validationError = null;
  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    validationError = (
      <p className={classes.ValidationError}>
        Please enter a valid {props.valueType}
      </p>
    );
    inputClasses.push(classes.Invalid);
  }

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case 'textarea':
      inputElement = (
        <textarea
          className={inputClasses.join(' ')}
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
        />
      );
      break;

    case 'select':
      inputElement = (
        <select
          className={inputClasses.join(' ')}
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
          className={inputClasses.join(' ')}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

input.propTypes = {
  elementType: PropTypes.string,
  elementConfig: PropTypes.object,
  value: PropTypes.string,
  valueType: PropTypes.string,
  label: PropTypes.string,
  changed: PropTypes.func,
  invalid: PropTypes.bool,
  shouldValidate: PropTypes.object,
  touched: PropTypes.bool
};

export default input;
