// @vendors
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// @actions
import { getAllData } from './actions/index';

// @styles
import './style.css';

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
                    <p>Howdy!</p>
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
