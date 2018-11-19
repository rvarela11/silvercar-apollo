// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// @styles
import './Search.scss';

// Setting the media query through material ui in here for a cleaner look
// https://material-ui.com/layout/breakpoints/

const styles = theme => ({
    search__input: {
        width: theme.spacing.unit,
        [theme.breakpoints.down('sm')]: {
            width: '75%'
        },
        [theme.breakpoints.up('md')]: {
            width: '50%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '25%'
        }
    }
});

const Search = (props) => {
    const { classes, handleOnChangeSearch } = props;
    return (
        <div className="search">
            <TextField
                autoFocus
                className={classes.search__input}
                id="search-input"
                margin="normal"
                onChange={e => handleOnChangeSearch(e.target.value)}
                placeholder="Search by city or airport code"
            />
        </div>
    );
};

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    handleOnChangeSearch: PropTypes.func.isRequired
};

export default withStyles(styles)(Search);
