import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router/es6';

class Catalog extends Component {

    render() {
        return this.props.children ?
            this.props.children :
            <article className="b-facts">
                <div className="g-row g-with-gutter">
                    <div className="g-3 g-with-border">
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
                </div>
            </article>;
    }
}

Catalog.propTypes = {
    children: PropTypes.node
};

export default Catalog;
