import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <div
            className="Header">
            <AppBar
                style={{ background: '#2E3B55' }}>
                <Toolbar>
                    <Link
                        to="/photo-gallery"><strong>Photo Gallery</strong>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header;