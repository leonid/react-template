import React, {PropTypes, Component} from 'react';
import './header.scss';

import {Link} from 'react-router/es6';

import Navigation from 'blocks/b-navigation/js/b-navigation';
import Dashboard from 'blocks/b-dashboard/js/b-dashboard';
import HeaderNotifications from 'blocks/b-header-notifications/js/b-header-notifications.js';
import HeaderBin from 'blocks/b-header-bin/js/b-header-bin.js';
import HeaderAlerts from 'blocks/b-header-alerts/js/b-header-alerts.js';
import UserInfo from 'blocks/b-header-user-info/js/b-header-user-info.js';

const {string, bool} = PropTypes;

class Header extends Component {
    constructor(props, context) {
        super(props);

        this.state = { dashboardIsOpen: context.location === '/' };
    }

    showDashboard() {
        this.setState({dashboardIsOpen: !this.state.dashboardIsOpen});
    }

    render() {
        return (
            <header className="b-header">
                <Link to="/"><img className="b-header__logo" src={require('common/images/logo.png')}/></Link>

                <Navigation showDashboard={this.showDashboard.bind(this)} />

                <Dashboard visible={this.state.dashboardIsOpen} />

                <div className="b-header__services">

                     <HeaderNotifications />

                     <HeaderBin />

                     <HeaderAlerts />

                     <UserInfo user={this.state.user} />

                </div>
            </header>
        );
    }

}

Header.contextTypes = {
    location: PropTypes.string
};

export default Header;
