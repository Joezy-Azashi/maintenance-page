import React, { useState, useEffect } from 'react';
import '../App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, LinkedIn, Twitter, MailOutline, LocalPhoneOutlined } from '@mui/icons-material';
import Navbar from '../Components/Navbar';

const MaintenanceTimer = ({ endDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(endDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [endDate]);

    return (
        <div className="timer">
            <Typography>Estimated Time Remaining</Typography>
            <Box sx={{ display: "flex", gap: 3 }}>
                <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.8rem' } }} variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.days || 0}d</Typography>
                <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.8rem' } }} variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.hours || 0}h</Typography>
                <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.8rem' } }} variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.minutes || 0}m</Typography>
                <Typography sx={{ fontSize: { xs: '2.5rem', md: '3.8rem' } }} variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.seconds || 0}s</Typography>
            </Box>
        </div>
    );
};

const HomePage = () => {

    const [timerRange, setTimerRange] = useState({
        startDate: JSON.parse(localStorage.getItem("timer"))?.startDate || new Date().toISOString(),
        endDate: JSON.parse(localStorage.getItem("timer"))?.endDate || new Date(Date.now() + 3600000).toISOString(),
    });

    return (
        <>
            <Navbar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            }}>
                <Box component="main" sx={{ flex: 1 }}>
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} mt={7}>
                                <Typography sx={{ fontSize: { xs: '2.45rem', md: '3.2rem' } }} variant='h2' fontWeight={700}>We're undergoing maintenance</Typography>
                                <Typography mb={5}>We are performing some maintenance at the moment. We'll be back up shortly!</Typography>
                                <MaintenanceTimer endDate={timerRange.endDate} />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 6 }} mt={4} sx={{ background: "url('./main.png')", backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "23rem" }} />
                        </Grid>

                        <Grid container spacing={3} my={15}>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ background: "url('./contact-us.jpg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", justifyContent: "center", alignItems: "center", height: "28rem" }} />
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                                <Box>
                                    <Typography variant="h6" sx={{ fontSize: { xs: '2.45rem', md: '3.2rem' } }} color="text.primary" gutterBottom>
                                        Contact
                                    </Typography>

                                    <Typography mb={5}>
                                        We'd love to hear from you. Whether you have a question, feedback, or just want to say hello, feel free to reach out.
                                    </Typography>

                                    <Typography color="text.secondary" gutterBottom>
                                        <MailOutline sx={{ mr: 1 }} />
                                        info@facioinnovations.com
                                    </Typography>
                                    <Typography color="text.secondary">
                                        <LocalPhoneOutlined sx={{ mr: 1 }} />
                                        +1 (123) 456-7890
                                    </Typography>

                                    <Typography variant="h6" color="text.primary" mt={6} gutterBottom>
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
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default HomePage;
