import SelectCount from '../../components/SelectCount';
import { shallow, configure } from 'enzyme';
import { findByTestAtrr, mockCoinsResponse } from "../utils";
import React from 'react';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';

let startSetCoins;
let store;
const setUp = (initialState = []) => {
    startSetCoins = jest.fn();
    configure({ adapter: new Adapter() });
    const mockStore = configureStore([thunk]);
    store = mockStore({
        coins: initialState
    });
    const wrapper = shallow(<SelectCount store={store}
        startSetCoins={startSetCoins} />, { disableLifecycleMethods: true }).dive();
    console.log(store.getActions())
    return wrapper;
};

describe('SelectCount component testing', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setUp(mockCoinsResponse);
    });

    test('render without error', () => {
        const component = findByTestAtrr(wrapper, 'selectCountComponent');

        expect(component.length).toBe(1);
    });

    test('State value is updated when select value is changed', () => {
        const component = findByTestAtrr(wrapper, 'selectCountComponent');
        const value = 50;
        component.find('select').simulate('change', { target: { value } })
        expect(wrapper.state('limit')).toBe(value);

    })
})