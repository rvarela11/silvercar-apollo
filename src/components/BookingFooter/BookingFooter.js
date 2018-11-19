// @vendors
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// @styles
import './BookingFooter.scss';

const BookingFooter = () => (
    <div className="booking-footer">
        <div className="booking-footer__inputs">
            <TextField
                className="booking-footer__input"
                id="booking-footer-promo-code-input"
                margin="normal"
                placeholder="+ Add Promo Code"
            />
        </div>
        <div className="booking-footer__texts">
            <h4 className="booking-footer__text"> Avg Daily Rate: </h4>
            <h4 className="booking-footer__text"> Estimated Total: </h4>
        </div>
        <div className="booking-footer__buttons">
            <Button disabled>View Full Breakdown</Button>
            <Button className="booking-footer__button" color="inherit" disabled variant="contained">BOOK NOW</Button>
        </div>
    </div>
);

export default BookingFooter;
