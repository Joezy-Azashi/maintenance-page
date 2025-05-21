import React from 'react'
import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className="nav">
            <header
                style={{ cursor: "pointer" }}
                onClick={() => navigate('/')}
            >
                <img src="./facio-logo.png" width={100} alt="logo" />
            </header>

            <div>
                <Typography
                    variant='paragraph'
                    sx={{ textTransform: "capitalize", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => navigate('/maintenance-details')}
                >
                    Maintenance Details
                </Typography>
            </div>
        </nav>
    )
}

export default Navbar
