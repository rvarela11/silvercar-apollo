// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import BookingFooterNav from '../BookingFooterNav';

describe('BookingFooterNav Container', () => {
    it('renders BookingFooterNav without crashing', () => {
        shallow(<BookingFooterNav bookingFooterNavLabels={[]} />);
    });
});
