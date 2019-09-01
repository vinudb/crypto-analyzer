const defaultCoins = [];

const coins = (state = defaultCoins, action) => {
    switch (action.type) {
        case 'SET_COINS':
            return action.coins
        default:
            return state;
    }
}

export default coins;