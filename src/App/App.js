// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @components
import Header from './components/Header/Header';

// @actions
import { getAllData } from './actions/index';

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
        return (
            <div className="App">
                <header className="App-header">
                    <Header />
                </header>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    getAllData: apiData => dispatch(getAllData(apiData))
});

const mapStateToProps = state => ({
    apiDataAllFiltered: state.apiDataAllFiltered
});

App.propTypes = {
    getAllData: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
