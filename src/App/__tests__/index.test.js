// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import App from '../App';

describe('App Container', () => {
    it('renders App without crashing', () => {
        shallow(<App />);
    });
});
