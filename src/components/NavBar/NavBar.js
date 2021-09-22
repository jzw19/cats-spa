import { Menu, MenuItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    navBarContainer: {
        backgroundColor: '#000000'
    },
    button: {
        backgroundColor: '#1f1e1e',
        color: '#ffffff'
    }
});

export const NavBar = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMenuItem, setSelectedMenuItem] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const redirect = (event) => {
        if(!window || !window.location) {
            return;
        }
        switch(event.target.id){
            case('home'):
                window.location.pathname='/';
                setSelectedMenuItem(null);
                break;
            case('about'):
                window.location.pathname='/about';
                setSelectedMenuItem(null);
                break;
            case('bombay'):
            case('ocicat'):
            case('toybob'):
                setSelectedMenuItem(event.target.id);
                break;
            default:
                return;
        }
    };

    return(
        <div className={classes.navBarContainer}>
            <Button id='home' variant='outlined' className={classes.button} onClick={redirect}>Home</Button>
            <Button id='about' variant='outlined' className={classes.button} onClick={redirect}>About</Button>
            <Button
                id='menuButton'
                className={classes.button}
                variant='outlined'
                aria-controls='menuButton'
                aria-haspopup='true'
                aria-expanded={ open ? 'true' : undefined }
                onClick={handleMenuOpen}
            >
                Cats Selection
            </Button>
            <Menu
                className='menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-item',
                    'backgroundColor': '#1f1e1e'
                }}
            >
                <MenuItem id='bombay' sx={{backgroundColor: '#1f1e1e', color: '#ffffff'}} classes={classes.menuItem} divider selected={selectedMenuItem === 'bombay'} onClick={redirect}>Bombay</MenuItem>
                <MenuItem id='ocicat' classes={classes.menuItem} divider selected={selectedMenuItem === 'ocicat'} onClick={redirect}>Ocicat</MenuItem>
                <MenuItem id='toybob' classes={classes.menuItem} divider selected={selectedMenuItem === 'toybob'} onClick={redirect}>Toybob</MenuItem>
            </Menu>
        </div>
    )
}

export default NavBar;