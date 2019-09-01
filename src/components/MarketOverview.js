import React from 'react';
import Header from './Header';
import SelectCount from './SelectCount';
import { connect } from "react-redux";
import numeral from 'numeral';

export class MarketOverview extends React.Component {
    thTitles = ['Rank', 'Name', 'Price', 'Price Change (24h)', 'Market Cap', 'Volume (24h)'];

    render() {
        return (
            <div data-test='marketOverviewComponent'>
                <Header />
                <SelectCount />
                <div className="tableContainer">
                    <table>
                        <tbody>
                            <tr>
                                {this.thTitles.map((th)=><th key={th}>{th}</th>)}
                            </tr>
                            {this.props.coins.map((coin) =>
                                <tr key={coin.id}>
                                    <td>{coin["rank"]}</td>
                                    <td>{coin["name"]}</td>
                                    <td>{numeral(coin["price_usd"]).format('$0,0.00')}</td>
                                    <td>{`${coin["percent_change_24h"]}%`}</td>
                                    <td>{numeral(coin["market_cap_usd"]).format('$0,0.00')}</td>
                                    <td>{numeral(coin["24h_volume_usd"]).format('$0,0.00')}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (coins) => ({
    coins
})

export default connect(mapStateToProps, null)(MarketOverview);