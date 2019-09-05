import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../Aux';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../../containers/Checkout/Checkout';

import classes from './Layout.css';

class Layout extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element
};
export default Layout;
