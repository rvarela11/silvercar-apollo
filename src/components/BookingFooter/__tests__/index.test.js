// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import BookingFooter from '../BookingFooter';

describe('BookingFooter Container', () => {
    it('renders BookingFooter without crashing', () => {
        shallow(<BookingFooter />);
    });
});
