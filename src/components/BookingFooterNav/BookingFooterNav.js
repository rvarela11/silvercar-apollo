// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// @styles
import './BookingFooterNav.scss';

// Overriding material-ui classes
const styles = {
    root: {
        backgroundColor: '#f4f4f4'
    }
};

class BookingFooterNav extends Component {
  state = {
      value: 0
  };

  handleChange = (event, value) => {
      this.setState({ value });
  };

  render() {
      const { value } = this.state;
      const { classes, bookingFooterNavLabels } = this.props;
      return (
          <div className="bookingFooterNav">
              <BottomNavigation
                  className={classes.root}
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
    bookingFooterNavLabels: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookingFooterNav);
