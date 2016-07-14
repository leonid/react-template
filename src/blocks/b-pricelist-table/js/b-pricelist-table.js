var PricelistTable = React.createClass({
    propTypes: {
        pricelists: React.PropTypes.array
    },

    propTypes: {
        pricelists: React.PropTypes.array
    },

    getInitialState: function () {
        return {
            pricelists: this.props.pricelists,
            priceCategory: 'all'
        };
    },

    getDefaultProps: function() {
        return {
            priceCategory: 'all'
        }
    },

    onPriceCategoryChanged: function(e) {
        this.setState({
            priceCategory: e.currentTarget.value
        });
    },

    render: function() {

        return (
            <table className="g-1-1 b-table">
                <thead>
                <tr>
                    <th>
                        <input placeholder="Name"/>
                    </th>
                    <th>
                        <input placeholder="Name"/>
                    </th>
                    <th>
                        {
                            ['all', 'actual', 'pinned'].map(function(category){
                                return (
                                    <input key={category} type="radio" name="pricelist-category"
                                           value={category}
                                           checked={this.state.priceCategory === category}
                                           onChange={this.onPriceCategoryChanged} />
                                );
                            }.bind(this))
                        }
                    </th>
                    <th>
                        <select>
                            <option>Complexity</option>
                        </select>
                    </th>
                    <th>
                        <select>
                            <option value="">Status</option>
                        </select>
                    </th>
                    <th>
                        <input placeholder="From"/>
                        <input placeholder="To"/>
                    </th>
                    <th>
                        <input placeholder="N"/>
                    </th>
                </tr>
                <tr>
                    <th>
                        Company
                    </th>
                    <th>
                        Airport
                    </th>
                    <th>
                        Pricelists
                    </th>
                    <th>
                        Complexity
                    </th>
                    <th>
                        Entry Time
                    </th>
                    <th>
                        Entry Time
                    </th>
                    <th>
                        Fixes
                    </th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.pricelists.map(function(pricelist){

                        var validatedBy;

                        if (pricelist.validated_by) {
                            validatedBy = (<p>Reviewed 22.04.2016 (by {pricelist.validated_by.first_name.substring(0, 1)}.{pricelist.validated_by.last_name})</p>);
                        }

                        return (
                            <tr key={pricelist.id}>
                                <td>{pricelist.name}</td>
                                <td>{pricelist.airport.title}</td>
                                <td>
                                    <p>{pricelist.file.title}</p>
                                    <p>for all aircraft</p>
                                </td>
                                <td>{pricelist.complexity}</td>
                                <td>
                                    <p>Pricelist typed-in {pricelist.start_in}(by {pricelist.created_by.first_name.substring(0, 1)}.{pricelist.created_by.last_name})</p>
                                    {validatedBy}
                                </td>
                                <td>
                                    <span>4:18</span>
                                    <span>0:23</span>
                                </td>
                                <td><span>2</span></td>
                            </tr>
                        );

                    })
                }
                </tbody>
            </table>
        );
    }
});
