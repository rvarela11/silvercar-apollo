// @vendors
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// @styles
import './BookingFooter.scss';

// Overriding material-ui classes
const styles = {
    bookingFooter__button: {
        borderRadius: 100
    },
    bookingFooter__input: {
        margin: 0
    }
};

const BookingFooter = (props) => {
    const { classes } = props;
    return (
        <div className="booking-footer">
            <div className="booking-footer__inputs">
                <TextField
                    className={classes.bookingFooter__input}
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
                <Button className={classes.bookingFooter__button} color="inherit" disabled variant="contained">BOOK NOW</Button>
            </div>
        </div>
    );
};

BookingFooter.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BookingFooter);
