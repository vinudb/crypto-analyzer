import { mockCoinsResponse } from "../utils";
import coinsReducer from "../../reducers/coins";

test('should set coins array', () => {
    const action = {
        type: 'SET_COINS',
        coins: mockCoinsResponse
    };
    const state = coinsReducer([], action);
    expect(state).toEqual(mockCoinsResponse);
});
