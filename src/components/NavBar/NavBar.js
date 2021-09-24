import { Menu, MenuItem, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

const useStyles = makeStyles({
    navBarContainer: {
        backgroundColor: '#1f1e1e'
    },
    button: {
        width: '15%',
        minWidth: '90px',
        whiteSpace: 'nowrap'
    }
});

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    backgroundColor: '#1f1e1e',
    color: '#166ABD',
    border: '1px solid #166ABD',
    borderRadius: '4px'
}))

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
        switch(event.target.id){
            case('home'):
                window.location.pathname = '/';
                setSelectedMenuItem(null);
                break;
            case('about'):
                window.location.pathname = '/about';
                setSelectedMenuItem(null);
                break;
            case('bombay'):
            case('ocicat'):
            case('toybob'):
                window.location.pathname = `/gallery/${event.target.id}`;
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
                Cat-alog
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={{
                    'aria-labelledby': 'menu-item',
                    disablePadding: true
                }}
            >
                <StyledMenuItem id='bombay' divider selected={selectedMenuItem === 'bombay'} onClick={redirect}>Bombay</StyledMenuItem>
                <StyledMenuItem id='ocicat' divider selected={selectedMenuItem === 'ocicat'} onClick={redirect}>Ocicat</StyledMenuItem>
                <StyledMenuItem id='toybob' divider selected={selectedMenuItem === 'toybob'} onClick={redirect}>Toybob</StyledMenuItem>
            </Menu>
        </div>
    )
}

export default NavBar;