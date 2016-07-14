import React from 'react';

import '../scss/b-dashboard.scss';

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
        let aircraftCards = [];

        if (this.context.aircrafts) {
            aircraftCards = this.context.aircrafts.map((plane) => {
                return (
                    <div key={plane.tail_number}
                         className="b-plane g-grid__cell g-grid_1of3 g-grid__cell_separated">
                        <div className="g-grid_gutters_bottom">
                            <div className="g-grid__cell_border b-plane-info">
                                <h3><a className="b-plane-info__title"
                                       href={'/aircraft/' + plane.tail_number}>{plane.tail_number}</a></h3>
                                Текущее состояние
                            </div>
                        </div>
                        <div className="g-grid g-grid_gutters g-grid_gutters_bottom">
                            <div className="g-grid__cell g-grid_1of3">
                                <div className="g-grid__cell_border">
                                    <a className="b-link" href="/aircraft/flight/add">Add Flight</a>
                                </div>
                            </div>
                            <div className="g-grid__cell g-grid_1of3">
                                <div className="g-grid__cell_border">

                                    <a className="b-link" href="/aircraft/uplift/add">Add Uplift</a>
                                </div>
                            </div>
                            <div className="g-grid__cell g-grid_1of3 "><a className="b-link" href="/aircraft/client">View
                                as client</a></div>
                        </div>
                        <div className="g-grid__cell_border g-grid_gutters_bottom">
                            <h3 className="g-h3">Last Flights</h3>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                        <div className="g-grid__cell_border g-grid_gutters_bottom">
                            <h3 className="g-h3">Last Financial Docs</h3>
                            <hr />
                            <hr />
                            <hr />
                        </div>
                    </div>

                );
            });
        }

        const testRoutes =
            (
                <div className="g-grid__cell g-grid_1of3">
                    <div className="g-10">
                        <h3 className="g-h3"><i className="i-analytics"></i> <a className="b-plane-info__title"
                                                                                href="/analytics/">Analytics</a></h3>
                    </div>
                    <div className="g-10">
                        <h3 className="g-h3"><i className="i-clients"></i> <a className="b-plane-info__title"
                                                                              href="/clients/">Clients</a></h3>
                    </div>
                    <div className="g-10">
                        <h3 className="g-h3"><i className="i-staff"></i> <a className="b-plane-info__title"
                                                                            href="/staff/">Staff</a></h3>
                    </div>
                    <div className="b-dashboard__staff">
                        <div className="b-dashboard__staff-photo"></div>
                        <div className="b-dashboard__staff-description">
                            <h4 className="g-h4">Имя Фамилия</h4>
                            <p><span className="b-tag">в офисе</span></p>
                        </div>
                    </div>
                    <div className="b-dashboard__staff">
                        <div className="b-dashboard__staff-photo"></div>
                        <div className="b-dashboard__staff-description">
                            <h4 className="g-h4">Имя Фамилия</h4>
                            <p><span className="b-tag">удаленно</span></p>
                        </div>
                    </div>
                    <div className="b-dashboard__staff">
                        <div className="b-dashboard__staff-photo"></div>
                        <div className="b-dashboard__staff-description">
                            <h4 className="g-h4">Имя Фамилия</h4>
                            <p><span className="b-tag b-tag-moored">болеет</span></p>
                        </div>
                    </div>
                </div>
            );

        const testAircrafts =
            (
                <div className="g-grid__cell g-grid_1of3">
                    <div className="">
                        <div className="">
                            <h3 className="g-h3"><i className="i-aircraft"></i> <a className="b-plane-info__title"
                                                                                   href="/analytics/">Самолёты</a></h3>
                        </div>
                        <div className="g-grid_gutters_bottom">
                            <div className="g-grid__cell_border b-plane-info">
                                <h3><a className="b-plane-info__title" href={'/aircraft/'}>CCC</a></h3>
                                Текущее состояние
                            </div>
                        </div>
                        <div className="b-dashboard__aircraft">
                            <h4 className="g-h4">X-FLT12</h4>
                            <p>Текущее состояние</p>
                            <span className="b-tag">4 / 10</span>
                        </div>
                    </div>
                </div>
            );


        return (
            <div className={'b-dashboard ' + (this.props.visible ? 'b-dashboard--visible' : '')}>
                <div className="g-grid g-grid_gutters g-grid_gutters_outer">
                     {aircraftCards ?
                         aircraftCards :
                         <div className="b-plane g-grid__cell g-grid_1of3">
                             <div className="g-with-gutter">
                                 <div className="g-10 g-with-border b-plane-info">
                                     <h3>You don`t have any available aircrafts</h3>
                                 </div>
                             </div>
                         </div>
                     }

                     {testRoutes}

                     {testAircrafts}

                </div>


                <hr className="t-hr"/>

                <div className="g-grid g-grid_gutters g-grid_gutters_outer">
                    <div className="g-grid__cell g-grid_gutters_bottom">
                        <button className="b-button">New Plane</button>
                    </div>
                </div>

            </div>
        );
    }
});

export default Dashboard;
