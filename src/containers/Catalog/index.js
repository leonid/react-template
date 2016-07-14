import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router/es6';

class AircraftApp extends Component {

    render() {
        return this.props.children ?
            this.props.children :
            <article className="b-factbooks">
                <div className="g-row g-with-gutter">
                    <div className="g-3 g-with-border">
                        {/*<AircraftDetails />*/}
                    </div>
                    <div className="g-7 g-with-border">
                        Occasions
                    </div>
                </div>

                <div className="g-row g-with-gutter">
                    <div className="g-3 g-with-gutter">
                        <div className="g-10 g-with-border">Счёт себестоимости</div>
                        <div className="g-10 g-with-border">Документы, фин.параметры, ставки</div>
                        <div className="g-10 g-with-border">Maintenance</div>
                    </div>
                    <div className="g-7 g-with-gutter">
                        <div className="g-1-2">
                            <div className="g-10 g-with-border">
                                <Link className="b-link" to="/aircraft/fuel">Топливный бак</Link></div>

                        </div>
                        <div className="g-1-2 g-with-gutter">
                            <div className="g-10 g-with-border"><a
                                href="/aircraft/crew">Экипаж</a>
                            </div>
                            <div className="g-10 g-with-border"><a
                                href="/staff/permissions">Users
                                (permissions)</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>;
    }
}

AircraftApp.propTypes = {
    children: PropTypes.node
};

export default AircraftApp;
