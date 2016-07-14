import React from 'react';

import '../scss/b-header-notifications.scss';

const HeaderNotifications = React.createClass({
    getInitialState: function () {
        return {
            tasks: null,
            alerts: null
        };
    },

    render: function () {
        return (
            <div className="b-header__notifications">
                <span
                    className="b-header__notifications--unfinished">{ this.state.tasks && this.state.tasks.count ? this.state.tasks.count : 3 }</span>
                /
                <span
                    className="b-header__notifications--alerts">{ this.state.alerts && this.state.alerts.count ? this.state.alerts.count : 5 }</span>

                <div className="b-header__notifications--list">

                    <div className="g-row g-with-gutter">
                        <div className="g-1-2 g-with-separator">

                            <h3 className="g-h3">Tasks unfinished <span className="b-num">3</span></h3>
                            <ul className="b-list">
                                <li><a href="/" className="b-link">Flight XXX</a></li>
                                <li><a href="/" className="b-link">Bill 48642</a></li>
                                <li><a href="/" className="b-link">Invoice 10973</a></li>
                                <li><a className="b-link">Bill 323</a> - <span>ждём документов </span>
                                    <ul className="b-list">
                                        <li>
                                            <a className="b-link">Invoice 2355</a> - <span>запрошены подложки</span>
                                        </li>
                                        <li>
                                            <a className="b-link">Invoice 74</a> - <span>запрошены подложки</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                        </div>
                        <div className="g-1-2 g-with-separator">
                            <div className="g-with-gutter">
                                <h3 className="g-h3">Alerts <span className="b-num b-num--inverse">3</span></h3>
                                <ul className="b-list">
                                    <li>Создан автомат. uplift</li>
                                    <li>text найденной неполадки 2</li>
                                    <li>text найденной неполадки 3</li>
                                    <li>text найденной неполадки 4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

export default HeaderNotifications;
