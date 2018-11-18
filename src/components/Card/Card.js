// @vendors
import React from 'react';
import { AirplanemodeActive } from '@material-ui/icons';

// @styles
import './Card.scss';

const Card = (props) => {
    const { item } = props;

    console.log({ item });
    return (
        <div className="location__card" aria-label={item.description} tabIndex="0" role="button">
            <div className="card__city">
                {item.name}
                {' '}
                {`(${item.airport_code})`}
            </div>
            <div className="card__airport">
                <span className="card__airport-icon"><AirplanemodeActive /></span>
                <span className="card__airport-name">{item.description}</span>
            </div>
        </div>
    );
};

export default Card;
