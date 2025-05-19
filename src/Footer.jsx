import React from 'react';
import { Box, Container, Grid, Link, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = ({setPage}) => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
                p: 6,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <header
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "0.5rem",
                                cursor: "pointer"
                            }}
                            onClick={() => setPage('timer')}
                            >
                            <div style={{
                                backgroundColor: "#6366F1",
                                color: "white",
                                fontWeight: "bold",
                                padding: "0.5rem 0.75rem",
                                borderRadius: "5px",
                                fontSize: "1.25rem"
                            }}>C</div>
                            <h1>Company</h1>
                        </header>
                        <Typography variant="body2" color="text.secondary" mt={2}>
                            Transforming ideas into technological solutions.
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Contact
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            info@facioinnovations.com
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            +1 (123) 456-7890
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Link href="#" color="inherit">
                                <Facebook />
                            </Link>
                            <Link href="#" color="inherit">
                                <Twitter />
                            </Link>
                            <Link href="#" color="inherit">
                                <Instagram />
                            </Link>
                            <Link href="#" color="inherit">
                                <LinkedIn />
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Typography variant="body2" color="text.secondary" align="center">
                        © {new Date().getFullYear()} Facio Innovations Technology. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;