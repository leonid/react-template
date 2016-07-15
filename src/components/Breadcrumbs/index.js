import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router/es6';
import Common from 'common/js/common';

import './b-breadcrumbs.scss';

class Breadcrumbs extends Component {
    constructor() {
        super();

        this.displayName = 'Breadcrumbs';
    }

    getDisplayName( route ) {
        let name = null;

        //check to see if a custom name has been applied to the route
        if ( !name && !!route.title ) {
            name = route.title;
        }

        //if the name exists and it's in the excludes list exclude this route
        if ( name && this.props.excludes.some( item => item === name ) ) {
            return null;
        }
        if ( !name && this.props.displayMissing ) {
            name = this.props.displayMissingText;
        }
        return name;
    }

    processRoute( route ) {
        //if there is no route path defined and we are set to hide these then do so
        if ( !route.path && this.props.hideNoPath ) {
            return null;
        }
        let name = this.getDisplayName( route );
        if ( name ) {
            let link = React.createElement( Link, {
                to: route.path,
                params: route.params,
                className: 'b-link'
            }, name );
            return React.createElement( this.props.itemElement, {key: name + Common.generateId(), className: this.props.itemClass}, link );
        }
        return null;
    }

    buildRoutes( routes ) {

        let crumbs = [];
        routes.map( (route) => {
            let result = this.processRoute( route );
            if ( result ) {
                crumbs.push( result );

                if (routes[routes.length - 1] !== route) {
                    let separator = React.createElement( this.props.itemElement, {key: Common.generateId(),className: this.props.separatorClass}, this.props.separator );
                    crumbs.push(separator);
                }
            }
        } );

        return React.createElement( this.props.wrapperElement, {className: this.props.wrapperClass}, crumbs );
    }

    render() {
        if ( this.context && this.context.routes ) {
            return this.buildRoutes( this.context.routes );
        } else {
            return (
                <div className="b-breadcrumbs">
                    {/*<div className="b-breadcrumbs__actions">
                        {this.state.routes && this.state.routes.actions ? this.state.routes.actions.map( function ( action, index ) {
                            return (
                                <a key={index} href={this.context.baseRoute + action.link}
                                   className="b-link__action">{action.title}</a>
                            );
                        }.bind( this ) ) : ''}
                    </div>*/}
                </div>
            );
        }
    }
}

Breadcrumbs.defaultProps = {
    separator: '→',
    separatorClass: 'b-breadcrumbs__separator',
    displayMissing: true,
    displayMissingText: 'Missing Title',
    wrapperElement: 'div',
    itemElement: 'span',
    itemClass: 'b-breadcrumbs__item',
    wrapperClass: 'b-breadcrumbs',
    excludes: [],
    hideNoPath: true
};

Breadcrumbs.propTypes = {
    separator: React.PropTypes.string,
    separatorClass: React.PropTypes.string,
    displayMissing: React.PropTypes.bool,
    displayMissingText: React.PropTypes.string,
    displayName: React.PropTypes.string,
    breadcrumbName: React.PropTypes.string,
    wrapperElement: React.PropTypes.string,
    itemElement: React.PropTypes.string,
    itemClass: React.PropTypes.string,
    wrapperClass: React.PropTypes.string,
    excludes: React.PropTypes.arrayOf( React.PropTypes.string ),
    hideNoPath: React.PropTypes.bool
};

Breadcrumbs.contextTypes = {
    baseRoute: React.PropTypes.any,
    routes: React.PropTypes.array
};

export default Breadcrumbs;
