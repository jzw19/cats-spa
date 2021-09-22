import { Menu, MenuItem, Button } from '@mui/material';
import React, { useState } from 'react';

import './NavBar.css';

export const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    }
    const redirect = (event) => {
        if(!window || !window.location) {
            return;
        }
        switch(event.target.id){
            case('home'):
                window.location.pathname='/';
                break;
            case('about'):
                window.location.pathname='/about';
                break;
            default:
                return;
        }
    }

    return(
        <div className='menuContainer'>
            <Button
                id='menuButton'
                aria-controls='menuButton'
                aria-haspopup='true'
                aria-expanded={ open ? 'true' : undefined }
                onClick={handleMenuOpen}
            >
                Menu
            </Button>
            <Menu
                className='menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                MenuListProps={
                    {
                        'aria-labelledby': 'menu-button'
                    }
                }
            >
                <MenuItem id='home' onClick={redirect}>Home</MenuItem>
                <MenuItem id='about' onClick={redirect}>About</MenuItem>
            </Menu>
        </div>
    )
}

export default NavBar;