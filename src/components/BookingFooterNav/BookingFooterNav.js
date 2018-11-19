// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// @styles
import './BookingFooterNav.scss';

class BookingFooterNav extends Component {
  state = {
      value: 0
  };

  handleChange = (event, value) => {
      this.setState({ value });
  };

  render() {
      const { value } = this.state;
      const { bookingFooterNavLabels } = this.props;
      return (
          <div className="bookingFooterNav">
              <BottomNavigation
                  onChange={this.handleChange}
                  showLabels
                  value={value}
              >
                  { bookingFooterNavLabels.map((label, index) => <BottomNavigationAction key={index} label={label} />) }
              </BottomNavigation>
          </div>
      );
  }
}

BookingFooterNav.propTypes = {
    bookingFooterNavLabels: PropTypes.array.isRequired
};

export default BookingFooterNav;
