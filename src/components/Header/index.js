import React, {PropTypes, Component} from 'react';
import './header.scss';

import {Link} from 'react-router/es6';

import Navigation from 'components/Navigation';
import Dashboard from 'components/Dashboard';

const {string, bool} = PropTypes;

class Header extends Component {
  constructor( props, context ) {
    super( props );

    this.state = {dashboardIsOpen: context.location === '/'};
  }

  showDashboard() {
    this.setState( {dashboardIsOpen: !this.state.dashboardIsOpen} );
  }

  render() {
    return (
      <header className="b-header">
        <Link to="/"><img className="b-header__logo"
                          src={require('common/images/logo.jpg')}/></Link>
        {/*<Dashboard />*/}
        <Navigation showDashboard={this.showDashboard.bind(this)}/>
      </header>
    );
  }

}

Header.contextTypes = {
  location: PropTypes.string
};

export default Header;
