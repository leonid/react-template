import React, {Component, PropTypes} from 'react';

class Facts extends Component {

  render() {
    return this.props.children ?
      this.props.children :
      <article className="b-factbooks">
        <div className="g-row g-with-gutter">
          <div className="g-6 g-with-border g-with-background">
            aaa
          </div>
          <div className="g-4 g-with-border g-with-background">
          </div>
        </div>

        <div className="g-row g-with-gutter">
          <div className="g-10 g-with-border">Справочник 2</div>
        </div>
        <div className="g-row g-with-gutter">
          <div className="g-3 g-with-border"></div>
          <div className="g-3 g-with-border"></div>
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

Facts.propTypes = {
  children: PropTypes.node
};

export default Facts;
