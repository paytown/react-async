import React from 'react';
import { shallow } from 'enzyme';
import Quote from './Quote';

describe('quote', () => {
  it('displays quotes', () => {
    const quote = {
      character: 'Bob',
      quote: 'no',
      image: '/img'
    };
    const wrapper = shallow(<Quote quote={quote} />);
    expect(wrapper).toMatchSnapshot();
  });
});
