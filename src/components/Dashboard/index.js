import React from 'react';

import './b-dashboard.scss';

const Dashboard = React.createClass({
    getInitialState: function () {
        return {
            analytics: [],
            staff: [],
            clients: []
        };
    },

    propTypes: {
        visible: React.PropTypes.bool
    },

    contextTypes: {
        aircrafts: React.PropTypes.array
    },

    render: function () {
        return (
            <div className={'b-dashboard ' + (this.props.visible ? 'b-dashboard--visible' : '')}>
                <div className="g-grid g-grid_gutters g-grid_gutters_outer">
                     Dashboard
                </div>
            </div>
        );
    }
});

export default Dashboard;
