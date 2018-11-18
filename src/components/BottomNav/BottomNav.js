// @vendors
import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

// @styles
import './BottomNav.scss';

class BottomNav extends React.Component {
  state = {
      value: 0
  };

  handleChange = (event, value) => {
      this.setState({ value });
  };

  render() {
      const { value } = this.state;
      return (
          <BottomNavigation
              className="bottomNav"
              onChange={this.handleChange}
              showLabels
              value={value}
          >
              <BottomNavigationAction label="CITY" />
              <BottomNavigationAction label="PICK UP" />
              <BottomNavigationAction label="DROP OFF" />
              <BottomNavigationAction label="VEHICLE" />
              <BottomNavigationAction label="COVERAGE" />
          </BottomNavigation>
      );
  }
}

export default BottomNav;
