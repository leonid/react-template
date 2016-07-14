import React from 'react';

import '../scss/b-header-alerts.scss';

const HeaderAlerts = React.createClass({
    getInitialState: function () {
        return {
            tasks: null,
            alerts: null,
            contactFormIsVisible: false
        };
    },

    toggleContactForm: function() {
        this.refs['b-header__alerts-form'].classList.toggle('b-header__alerts-form--open');
    },

    render: function() {
        return (
            <div className="b-header__alerts">
                <a href="#" className="i-alert" onClick={this.toggleContactForm}></a>

                <div className="b-header__alerts-form" ref="b-header__alerts-form">
                    <h3>Customer Complaint form</h3>
                    <div>
                        <div className="b-components__row">
                            <div className="b-label">
                                <label htmlFor="b-input__field" className="b-label__label">Name</label>
                            </div>
                            <div className="b-input">
                                <input required className="b-input__field" id="name" name="name" type="text" placeholder="Please, enter your name" />
                            </div>
                            <div className="b-error">
                                Please, enter your name
                            </div>
                        </div>
                    </div>
                    <div>
                        <input required="required" type="email" name="email" />
                        <label htmlFor="email">Email</label>
                        <div className="b-error">
                            Please, enter email
                        </div>
                    </div>
                    <div>
                        <textarea id="description" name="description" />
                        <label htmlFor="description">Describe your problem</label>
                        <div className="b-error">
                            Please, describe your problem
                        </div>
                    </div>
                    <div>
                        <button className="b-button">Send</button>
                    </div>
                </div>
            </div>
        );
    }
});

export default HeaderAlerts;
