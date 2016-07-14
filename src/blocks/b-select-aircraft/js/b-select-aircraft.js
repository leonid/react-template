/**
 * MyJet Select aircraft block
 */

var AircraftSelect = React.createClass({
    contextTypes: {
        aircrafts: React.PropTypes.array
    },

    render: function () {
        return (
            <div className="g-content">
                <section className="g-section">
                    <h2 className="g-h2 g-section__title">
                        Select Aircraft
                    </h2>
                    <div className="g-clear g-section__content">
                         {this.context.aircrafts.map(function (plane) {
                             return (<div key={plane.tail_number} className="g-section__column g-section__column_1_7 g-section__column_p_l">
                                 <a href={plane.url} className="b-link b-aircraft-select__plane">
                                     <span>{plane.id} {plane.tail_number}</span>
                                 </a>
                             </div>);
                         })}
                    </div>
                </section>
            </div>
        );
    }
});

