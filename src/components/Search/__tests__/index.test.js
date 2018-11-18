// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import Search from '../Search';

describe('Search Container', () => {
    it('renders Search without crashing', () => {
        shallow(<Search handleOnChangeSearch={() => {}} />);
    });
});
