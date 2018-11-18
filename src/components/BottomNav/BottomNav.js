// @vendors
import React from 'react';
import PropTypes from 'prop-types';
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
      const { buttonNavLabels } = this.props;
      return (
          <BottomNavigation
              className="bottomNav"
              onChange={this.handleChange}
              showLabels
              value={value}
          >
              { buttonNavLabels.map((label, index) => <BottomNavigationAction key={index} label={label} />) }
          </BottomNavigation>
      );
  }
}

BottomNav.propTypes = {
    buttonNavLabels: PropTypes.array.isRequired
};

export default BottomNav;
