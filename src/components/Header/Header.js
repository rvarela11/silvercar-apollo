// @vendors
import React from 'react';

// @material-ui
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';

// @styles
import './Header.scss';

const Header = () => (
    <div className="header">
        <AppBar color="inherit" position="static">
            <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <figure className="header__logo" />
                <div className="header__buttons">
                    <Button className="header__button" color="inherit" disableRipple>SIGN UP</Button>
                    <Button className="header__button" color="inherit" disableRipple>LOG IN</Button>
                </div>
                <Button className="header__button header__help-button" color="inherit" disableRipple>Help</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;
