import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router/es6';
import Common from 'common/js/common';

import './b-navigation.scss';

class Navigation extends Component {

    constructor( props, context ) {
        super( props, context );
    }

    processRoute( route, isRoot ) {
        if ( !route.path ) {
            return null;
        }

        let name = route.title;
        if ( name ) {
            let linkClasses = 'b-navigation__item' +
                              (isRoot ? ' b-navigation__item_root' : '') +
                              (route.icon ? ' b-navigation__item_with_icon' : '');
            let icon;

            if (route.icon) {
                icon = React.createElement( 'i', {
                    title: route.title,
                    className: `${route.icon}`
                }, null );
            }

            let link = React.createElement( Link, {
                to: route.path,
                params: route.params,
                title: route.title,
                onClick: (route.path === '/' ? this.props.showDashboard.bind(null, this) : null),
                className: linkClasses,
                activeClassName: 'b-navigation__item_selected',
                key: Common.generateId()
            }, icon ,name );

            return link;
        }
        return null;
    }

    buildMenu( routes ) {
        let navblocks = [];
        if (routes.length === 2 && routes[1].path === '/') {
            routes = routes[0].childRoutes;
        }

        routes.map( (route, index) => {

            let navlinks = [];
            let isRoot = (this.context.location === '/');

            if (index === 0) {
                let dashboardLink = React.createElement( 'span', {
                    onClick: (route.path === '/' ? this.props.showDashboard.bind(null, this) : null),
                    className: 'b-navigation__item b-navigation__item_dashboard',
                    key: Common.generateId()
                }, 'Dashboard' );

                navlinks.push(dashboardLink);
            }

            let result = this.processRoute( route, true );
            if ( result ) {
                navlinks.push( result );
            }

            if (route.title && route.childRoutes) {
                route.childRoutes.map ((route) => {
                    let result = this.processRoute( route );
                    if ( result ) {
                        navlinks.push( result );
                    }
                });
            }

            let navblocksClasses = 'b-navigation__root' + (isRoot ? ' b-navigation__root_current' : '');

            if (navlinks.length > 0) {
                navblocks.push(React.createElement( 'div', {className: navblocksClasses, key: Common.generateId()}, navlinks ));
            }
        } );

        return React.createElement( 'nav', {
            className: 'b-navigation',
            role: 'navigation'
        }, navblocks );
    }

    render() {
        if ( this.context && this.context.route ) {
            return this.buildMenu( this.context.route );
        }
    }
}

Navigation.contextTypes = {
    route: PropTypes.any,
    routes: PropTypes.array,
    location: PropTypes.string
};

export default Navigation;
