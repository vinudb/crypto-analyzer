import { startSetCoins, setCoins } from "../../actions/coins";
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mockCoinsResponse } from "../utils";

const createMockStore = configureMockStore([thunk]);

describe('To test fetching of coins and setting up in the store', () => {
  beforeEach(() => {
    let headers = new Headers({ "Accept": "application/json", "Content-Type": "application/json" });
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        headers,
        ok: true,
        json: () => Promise.resolve(mockCoinsResponse)
      })
    })
  })


  test('should fetch the coins from database', (done) => {
    const store = createMockStore([]);
    store.dispatch(startSetCoins()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_COINS',
        coins: mockCoinsResponse
      });
      done();
    })
  });

  test('should setup set coins action object with data', () => {
    const action = setCoins(mockCoinsResponse);
    expect(action).toEqual({
      type: 'SET_COINS',
      coins: mockCoinsResponse
    });
  });
})
