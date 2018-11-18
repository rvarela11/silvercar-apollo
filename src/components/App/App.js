// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from '../Header/Header';
import Locations from '../Locations/Locations';

// @actions
import { getAllData, searchInputValue } from '../../actions/index';

// @styles
import './App.scss';

class App extends Component {
    componentDidMount() {
        const { getAllData } = this.props;
        fetch('locations.json')
            .then(res => res.json())
            .then(data => getAllData(data))
            .catch(error => console.log(error));
    }

    render() {
        const { apiDataAllFiltered, bottomNavLabels, searchInputValue } = this.props;
        return (
            <div className="App">
                <Header />
                <Locations
                    bottomNavLabels={bottomNavLabels}
                    data={apiDataAllFiltered}
                    handleOnChangeSearch={value => searchInputValue(value)}
                />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getAllData: apiData => dispatch(getAllData(apiData)),
    searchInputValue: value => dispatch(searchInputValue(value))
});

const mapStateToProps = state => ({
    apiDataAllFiltered: state.apiDataAllFiltered,
    bottomNavLabels: state.bottomNavLabels
});

App.propTypes = {
    apiDataAllFiltered: PropTypes.array.isRequired,
    bottomNavLabels: PropTypes.array.isRequired,
    getAllData: PropTypes.func.isRequired,
    searchInputValue: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
