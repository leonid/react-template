import React, {Component, PropTypes} from 'react';

import CompaniesHandling from '../../blocks/b-companies-handling/js/b-companies-handling.js';

class Factbooks extends Component {

    render() {
        return this.props.children ?
            this.props.children :
            <article className="b-factbooks">
                <div className="g-row g-with-gutter">
                    <div className="g-6 g-with-border g-with-background">
                        <CompaniesHandling />
                    </div>
                    <div className="g-4 g-with-border g-with-background">
                    </div>
                </div>

                <div className="g-row g-with-gutter">
                    <div className="g-10 g-with-border">Справочник 2</div>
                </div>
                <div className="g-row g-with-gutter">
                    <div className="g-3 g-with-border"><a className="b-link"
                                                          href="airports">Airports</a></div>
                    <div className="g-3 g-with-border"><a className="b-link" href="handling-companies">Handling
                        Companies</a></div>
                    <div className="g-4 g-with-border"><a className="b-link" href="other-companies">Other
                        Companies</a></div>
                </div>
                <div className="g-row g-with-gutter">
                    <div className="g-1-3 g-with-border">Справочник 5</div>
                    <div className="g-1-3 g-with-border">Справочник 6</div>
                    <div className="g-1-3 g-with-border">Справочник 7</div>
                </div>
            </article>;
    }
}

Factbooks.propTypes = {
    children: PropTypes.node
};

export default Factbooks;
