import React from 'react';
import { startSetCoins } from "../actions/coins";
import { getCurrentLimit, setCurrentLimit } from "../utils";
import { connect } from 'react-redux';

export class SelectCount extends React.PureComponent {
    state = {
        limit: getCurrentLimit()
    }

    componentDidMount() {
        this.callSetCoins(this.state.limit);
    }

    handleSelectCountChange = (e) =>
        this.setState({ limit: e.target.value }, () => {
            setCurrentLimit(this.state.limit);
            this.callSetCoins(this.state.limit);
        });

    callSetCoins = (limit) =>
        this.props.startSetCoins(limit)
            .then((data) => { console.log(data) })
            .catch((error) => alert(error))

    render() {
        return (
            <div data-test='selectCountComponent' className='selectContainer'>
                <select
                    className="select"
                    value={this.state.limit}
                    onChange={this.handleSelectCountChange}>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="">All</option>
                </select>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startSetCoins: (limit) => dispatch(startSetCoins(limit))
});

export default connect(null, mapDispatchToProps)(SelectCount);
