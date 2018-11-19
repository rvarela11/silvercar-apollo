// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

// @styles
import './Search.scss';

const Search = (props) => {
    const { handleOnChangeSearch } = props;
    return (
        <div className="search">
            <TextField
                autoFocus
                className="search__input"
                id="search-input"
                margin="normal"
                onChange={e => handleOnChangeSearch(e.target.value)}
                placeholder="Search by city or airport code"
            />
        </div>
    );
};

Search.propTypes = {
    handleOnChangeSearch: PropTypes.func.isRequired
};

export default Search;
