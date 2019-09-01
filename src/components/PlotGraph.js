import React from 'react';

import CanvasJSReact from '../libs/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PlotGraph extends React.Component {
    render() {
        const convertToBillion=(number)=> Math.abs(Number(number)) / 1.0e+9;

		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", // "light1", "light2", "dark1", "dark2"
			title:{
				text: "Volume (24h) vs Abolute Price Change (24h) vs Market Capitalization",
			fontSize: 20
			},
			axisX: {
				title: "Market Cap (in Billion $)",
			logarithmic: true
			},
			axisY: {
				title: "Volume(24h) (in Billion $)"
			},
			data: [{
				type: "bubble",
				indexLabel: "",
				toolTipContent: "<b>{label}</b><br>Market Cap: ${x}bn <br>Volume (24h): ${y}bn<br>Price Change: {z}%",
                dataPoints: 
                    this.props.coins.map((coin)=>{
                        return(
                            {label: coin['name'], x: convertToBillion(coin['market_cap_usd']), y: convertToBillion(coin['24h_volume_usd']), z: Math.abs(coin.percent_change_24h)}
                        )
                    })
			}]
		}
		
		return (
			<CanvasJSChart options = {options} />
		);
	}
}
export default PlotGraph;