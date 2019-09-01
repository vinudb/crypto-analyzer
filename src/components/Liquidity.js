import React from 'react';
import Header from './Header';
import SelectCount from './SelectCount';
import { connect } from "react-redux";
import PlotGraph from './PlotGraph';

class Liquidity extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <SelectCount />
                <PlotGraph coins={this.props.coins}/>
            </div>
        );
    }
}

const mapStateToProps = (coins)=>({
    coins
})

export default connect(mapStateToProps, null)(Liquidity) ;