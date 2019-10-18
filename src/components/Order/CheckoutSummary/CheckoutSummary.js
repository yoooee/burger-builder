import React from 'react';
import PropTypes from 'prop-types';

import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it taste well!</h1>
      <div style={{ width: '100%', margin: 'auto' }}>
        {/* eslint-disable */}
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};

CheckoutSummary.propTypes = {
  ingredinets: PropTypes.array,
  checkoutCancelled: PropTypes.func,
  checkoutContinued: PropTypes.func
};

export default CheckoutSummary;
