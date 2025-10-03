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
                LOGO
            </header>

            <div>
                <Typography
                    variant='paragraph'
                    sx={{ textTransform: "capitalize", textDecoration: "underline", cursor: "pointer" }}
                    onClick={() => navigate('/status-page')}
                >
                    Status Page
                </Typography>
            </div>
        </nav>
    )
}

export default Navbar
