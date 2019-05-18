import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('character', () => {
  it('render character card', () => {
    const character = {
      name: 'Simple Rick',
      status: 'dead',
      species: 'rick',
      image: '/img'
    };

    const wrapper = shallow(<Character character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
