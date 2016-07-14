import React from 'react';

import '../scss/b-dashboard.scss';

const Maintenance = React.createClass({
    getInitialState: function () {
        return {
            isClosable: this.props.closable,
            message: this.props.message
        };
    },

    closeMessage: function() {
        this.refs['b-maintenance'].remove();

    },

    render: function() {

        var closingIcon = (this.state.isClosable ?
            <a href="#" className="b-maintenance--remove" onClick={this.closeMessage}><i className="fa fa-times" /></a> : '');

        return (
            <div className={'b-maintenance' + (this.state.isClosable ? ' b-maintenance-closable' : '')} ref="b-maintenance">
                {closingIcon}

                {this.state.message ?
                    this.state.message : 'Сегодня с 12:00 до 14:00 будут производится технические работы и что-то работать не будет' }
            </div>
        )
    }
});

export default Maintenance;
