//BELOW ENDPOINT GIVES ERROR 429(TOO MANY REQUESTS) AFTER COUPLE OF HITS.
//HENCE LOADING SAME JSON FROM CUSTOM JSON-SERVER FAKE API 
//const apiUrl = 'https://api.coinmarketcap.com/v1/ticker?limit=';

const apiUrl = 'https://fake-restful-api-v1.herokuapp.com/coins?_limit=';

//SET_COINS
export const setCoins = (coins) => ({
    type: 'SET_COINS',
    coins
})

export const startSetCoins = (limit) => {
    return (dispatch) => {
        return fetch(`${apiUrl}${limit}`)
            .then(resp => resp.json())
            .then(data => {
                dispatch(setCoins(data));
                return data;
            })
    }
}
