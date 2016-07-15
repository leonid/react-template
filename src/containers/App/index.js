import React, {PropTypes} from 'react';

import Header from 'components/Header';

import 'common/scss/base.scss';
import 'font-awesome/css/font-awesome.css';

const App = React.createClass({
    getInitialState: () => {
        return {
            user: window.user ? JSON.parse(window.user) : null,
            route: window.location.pathname.split('/')[1],
            baseRoute: ''
        };
    },

    propTypes: {
        children: PropTypes.node,
        routes: PropTypes.array,
        route: PropTypes.object,
        location: PropTypes.any
    },

    getChildContext: function() {
        return {
            route: this.props.route.childRoutes,
            location: this.props.location.pathname,
            routes: this.props.routes,
            baseRoute: '/' + this.state.route + '/' + this.state.tailNumber,
            user: this.state.user,
        };
    },

    childContextTypes: {
        route: PropTypes.array,
        routes: PropTypes.array,
        location: PropTypes.string,
        baseRoute: PropTypes.string,
        user: PropTypes.object,
    },

    render: function () {
        return (
            <div>
                <Header user={this.state.user} />
                <div className="g-content">
                     {this.props.children}
                </div>
            </div>
        );
    }
});

export default App;
