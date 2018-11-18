// @vendors
import React from 'react';
import PropTypes from 'prop-types';

// @components
import Card from '../Card/Card';
import Search from '../Search/Search';

// @styles
import './Locations.scss';

const Locations = (props) => {
    const { data, handleOnChangeSearch } = props;
    return (
        <div className="locations__selection">
            <h3 className="locations__title">Choose Location</h3>
            <Search handleOnChangeSearch={handleOnChangeSearch} />
            <div className="locations">
                <div className="locations__list">
                    { data.map(item => <Card key={item.id} item={item} />) }
                </div>
            </div>
        </div>
    );
};

Locations.propTypes = {
    data: PropTypes.array.isRequired,
    handleOnChangeSearch: PropTypes.func.isRequired
};

export default Locations;
