/**
 * MyJet Select aircraft block
 */

var AirportsTable = React.createClass({
    getInitialState: function () {
        return {
            airports: []
        };
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

        var serverRequest = new Request('/api/v1/airport/');

        var self = this;

        fetch(serverRequest, reqObj).then(function (result) {
            return result.json();
        }).then(function (data) {
            self.setState({
                airports: data.objects
            });
        });
    },

    toggleDetails: function(id) {
        // this.refs['airport'+ id].classList.toggle('b-table__row--hidden');
    },

    render: function () {
        return (
            <table className="b-table">
                <thead>
                <tr>
                    <th colSpan="3">
                        <input placeholder="Name of Code IATA or Code ICAO" />
                    </th>
                    <th>
                        <input placeholder="Location" />
                    </th>
                    <th>
                        <select placeholder="Type">
                            <option></option>
                        </select>
                    </th>
                    <th>
                        <select placeholder="Worktime">
                            <option></option>
                        </select>
                    </th>
                    <th>
                        <input placeholder="Types" />
                    </th>
                    <th>
                        <input placeholder="Less than" />
                    </th>
                    <th>
                        <input placeholder="Less than" />
                    </th>
                </tr>
                <tr>
                    <th>Airport</th>
                    <th>IATA</th>
                    <th>ICAO</th>

                    <th>Location</th>
                    <th>Type</th>
                    <th>Worktime</th>
                    <th>Aircraft Types</th>
                    <th>Avg Fuel Price</th>
                    <th><i className="fa fa-question-circle "></i> Avg BAS</th>
                </tr>
                </thead>

                {this.state.airports.map(function (airport, index) {
                    return (
                        <tbody key={airport.id}>
                        <tr className={index % 2 === 0 ? 'b-table__row--even' : '' }>
                            <td><a className="b-link__action--small" onClick={this.toggleDetails(airport.id)}>{airport.title}</a></td>
                            <td>{airport.iata_code}</td>
                            <td>{airport.icao_code}</td>
                            <td>{airport.city === null ? airport.city + ', ' : ''}, {airport.country.title}</td>
                            <td>{airport.type}</td>
                            <td>XXX</td>
                            <td>XXX</td>
                            <td><strong>XXX</strong></td>
                            <td><strong>XXX</strong></td>
                        </tr>
                        <tr className={index === 0 ? '' : 'b-table__row--hidden'} ref={'airport' + airport.id}>
                            <td colSpan="2">
                                <p>
                                    <a href="mailto:moscow@jetaviation.com">no email</a>
                                </p>
                                <p>
                                    <a href="callto:moscow@jetaviation.com">no phone</a>
                                </p>
                                <p>
                                    <a href="callto:moscow@jetaviation.com">website</a>
                                </p>
                            </td>
                            <td colSpan="2">
                                <p>
                                    Type: <strong>Airport? Passenger, Large, International</strong>
                                </p>
                                <p>
                                    Total numbers of flights: <strong>3</strong>
                                </p>
                                <p>
                                    Heading companies: <strong>5</strong>
                                </p>
                            </td>
                            <td colSpan="2">
                                <a className="b-link__button">More details</a>
                            </td>
                            <td colSpan="3">
                                <table>
                                    <thead>
                                    <tr>
                                        <th>Direction</th>
                                        <th>Length (m)</th>
                                        <th>Length (ft)</th>
                                        <th>Surface</th>
                                        <th>Certification</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr>
                                        <td>14L / 32R</td>
                                        <td>3 800</td>
                                        <td>12 467</td>
                                        <td>Reinforced concrete</td>
                                        <td>IIIA ICAO</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        </tbody>
                    );
                }.bind(this))}

            </table>
        );
    }
});


