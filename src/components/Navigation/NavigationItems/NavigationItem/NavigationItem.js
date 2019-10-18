import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import classes from './NavigationItem.css';

const navigationItem = props => (
  <li className={classes.NavigationItem}>
    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={classes.active}
    >
      {props.children}
    </NavLink>
  </li>
);

navigationItem.propTypes = {
  link: PropTypes.string,
  exact: PropTypes.bool,
  active: PropTypes.bool,
  children: PropTypes.string
};

export default navigationItem;
