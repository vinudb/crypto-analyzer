import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlotGraph from '../../components/PlotGraph';
import { mockCoinsResponse } from '../utils';
configure({ adapter: new Adapter() });

test('should render graph correctly', () => {
  const wrapper = shallow(<PlotGraph coins={mockCoinsResponse} />);
  expect(wrapper).toMatchSnapshot();
});
