// @vendors
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

// @styles
import './Header.scss';

const Header = () => (
    <div className="root">
        <AppBar position="static">
            <Toolbar>
                <IconButton className="menuButton" color="inherit" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" className="grow">
                      SILVERCAR by Audi
                </Typography>
                <Button color="inherit">SIGN UP</Button>
                <Button color="inherit">LOG IN</Button>
            </Toolbar>
        </AppBar>
    </div>
);

export default Header;
