// @vendors
import React from 'react';
import { shallow } from 'enzyme';

// @components
import BottomNav from '../BottomNav';

describe('BottomNav Container', () => {
    it('renders BottomNav without crashing', () => {
        shallow(<BottomNav buttonNavLabels={[]} />);
    });
});
