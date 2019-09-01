export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const mockCoinsResponse = [
    {
        "id": "bitcoin",
        "name": "Bitcoin",
        "symbol": "BTC",
        "rank": "1",
        "price_usd": "9592.78470213",
        "price_btc": "1.0",
        "24h_volume_usd": "13717140367.2",
        "market_cap_usd": "171766963959",
        "available_supply": "17905850.0",
        "total_supply": "17905850.0",
        "max_supply": "21000000.0",
        "percent_change_1h": "-0.04",
        "percent_change_24h": "0.63",
        "percent_change_7d": "-7.4",
        "last_updated": "1567185694"
    }
]