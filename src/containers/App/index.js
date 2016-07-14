import React, {PropTypes} from 'react';

import Header from 'components/Header';

import 'common/scss/base.scss';
import 'font-awesome/css/font-awesome.css';

const App = React.createClass({
    getInitialState: () => {
        return {
            user: window.user ? JSON.parse(window.user) : null,
            aircrafts: JSON.parse(localStorage.getItem('aircrafts')) || [],
            tailNumber: JSON.parse(localStorage.getItem('tailNumber')) || '',
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
            aircrafts: this.state.aircrafts,
            tailNumber: this.state.tailNumber
        };
    },

    childContextTypes: {
        route: PropTypes.array,
        routes: PropTypes.array,
        location: PropTypes.string,
        baseRoute: PropTypes.string,
        user: PropTypes.object,
        aircrafts: PropTypes.array,
        tailNumber: PropTypes.any
    },

    componentDidMount: function () {
        var reqObj = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        };

        // TODO Make Route path from client or use React Router and API client
        var tailNumber = '';
        var locationPathSegments = window.location.pathname.split('/');

        if (locationPathSegments.includes('aircraft', '')) {
            if (locationPathSegments.length === 3 && locationPathSegments[2]) {
                tailNumber = locationPathSegments[2].toLowerCase();
            }

            var serverRequest = new Request('/api/v1/airplane/');

            var self = this;

            fetch(serverRequest, reqObj).then( (response) => {
                return response.json().then(function (json) {

                    if (tailNumber) {
                        var currentAircraftCode = json.objects.filter(
                            function (aircraft) {
                                return aircraft.tail_number.toLowerCase() === tailNumber;
                            })[0].tail_number;

                        self.setState({
                            tailNumber: currentAircraftCode
                        });
                    } else if (json.objects[0]) {
                        self.setState({
                            tailNumber: json.objects[0].tail_number
                        });
                    }

                    localStorage.setItem('tailNumber', JSON.stringify(self.state.tailNumber));

                    self.setState({
                        aircrafts: json.objects
                    });

                    localStorage.setItem('aircrafts', JSON.stringify(self.state.aircrafts));

                });
            });
        }

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
