import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const MaintenanceTimer = ({ startDate, endDate }) => {
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

const MaintenanceDetails = () => (
    <Container maxWidth={"lg"} sx={{ px: 3 }}>
        <Typography variant='h3' fontWeight={700} gutterBottom mt={7}>
            Maintenance Details
        </Typography>

        <Typography paragraph>
            We're currently performing scheduled maintenance to enhance your experience.
            This comprehensive update includes significant infrastructure improvements
            and feature enhancements across our platform.
        </Typography>

        <Box sx={{ mb: 4 }}>
            <Typography variant='h5' fontWeight={600} gutterBottom>
                ⏰ Maintenance Schedule
            </Typography>
            <Typography paragraph>
                <strong>Start Time:</strong> May 20, 2023 - 02:00 AM UTC<br />
                <strong>Expected Completion:</strong> May 20, 2023 - 06:00 AM UTC<br />
                <strong>Duration:</strong> 4 hours
            </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
            <Typography variant='h5' fontWeight={600} gutterBottom>
                🛠️ System Improvements
            </Typography>
            <Typography paragraph>
                During this maintenance window, we'll be implementing the following upgrades:
            </Typography>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>✅ Complete backend API overhaul (v2.0 release)</li>
                <li>✅ Database migration to clustered architecture</li>
                <li>✅ Implementation of new caching layer</li>
                <li>🔄 Frontend UI/UX redesign (phase 1)</li>
                <li>🔒 Enhanced security protocols and SSL upgrades</li>
                <li>📈 Performance optimization for high-traffic periods</li>
                <li>🌐 CDN network expansion to 3 new regions</li>
            </ul>
        </Box>

        <Box sx={{ mb: 4 }}>
            <Typography variant='h5' fontWeight={600} gutterBottom>
                📉 Expected Downtime Impact
            </Typography>
            <Typography paragraph>
                The following services will be unavailable during maintenance:
            </Typography>
            <ul style={{ paddingLeft: '24px', marginBottom: '16px' }}>
                <li>🔴 User authentication system (15 minute window)</li>
                <li>🔴 Payment processing (30 minute window)</li>
                <li>🟡 Dashboard analytics (read-only mode)</li>
            </ul>
            <Typography paragraph>
                All other services will remain available with minimal impact.
            </Typography>
        </Box>

        <Box sx={{ mb: 4 }}>
            <Typography variant='h5' fontWeight={600} gutterBottom>
                🚀 New Features Preview
            </Typography>
            <Typography paragraph>
                This maintenance will enable these upcoming features:
            </Typography>
            <Box sx={{
                backgroundColor: '#f5f5f5',
                p: 3,
                borderRadius: 1,
                mb: 2
            }}>
                <Typography variant='h6'>Feature Spotlight: Real-time Collaboration</Typography>
                <Typography paragraph sx={{ mb: 0 }}>
                    Our new collaborative workspace will allow team members to work simultaneously
                    on projects with live updates and commenting.
                </Typography>
            </Box>
            <Box sx={{
                backgroundColor: '#f5f5f5',
                p: 3,
                borderRadius: 1,
                mb: 2
            }}>
                <Typography variant='h6'>Enhanced Reporting Dashboard</Typography>
                <Typography paragraph sx={{ mb: 0 }}>
                    New customizable reports with advanced filtering and export options.
                </Typography>
            </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
            <Typography variant='h5' fontWeight={600} gutterBottom>
                ❓ Frequently Asked Questions
            </Typography>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight={600}>Will I lose any data during the maintenance?</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                    No, all your data is securely backed up and will remain intact.
                    We perform these maintenance windows during low-traffic periods
                    to minimize impact.
                </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight={600}>What should I do if I'm in the middle of work?</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                    We recommend saving your work before the maintenance window begins.
                    The system will display warnings 30 minutes prior to going offline.
                </Typography>
            </Box>
            <Box sx={{ mb: 2 }}>
                <Typography fontWeight={600}>How will I know when maintenance is complete?</Typography>
                <Typography paragraph sx={{ mt: 1 }}>
                    We'll send an email notification to all users when services are fully restored.
                    You can also check our status page at status.facioinnovations.com.
                </Typography>
            </Box>
        </Box>

        <Box sx={{
            backgroundColor: '#e3f2fd',
            p: 3,
            borderRadius: 1,
            mb: 4
        }}>
            <Typography variant='h6' gutterBottom>Need Immediate Assistance?</Typography>
            <Typography paragraph>
                Our support team is available 24/7 during the maintenance period.
                <br />
                📧 Email: <Link href="mailto:support@facioinnovations.com">support@facioinnovations.com</Link>
                <br />
                📞 Phone: +1 (800) 123-4567
                <br />
                💬 Live Chat: Available on our support portal
            </Typography>
        </Box>

        <Typography variant='body2' color='text.secondary'>
            Last updated: May 19, 2023 - 10:15 AM UTC
        </Typography>
    </Container>
);

const MaintenancePages = () => {
    const [page, setPage] = useState('timer');

    const [timerRange, setTimerRange] = useState({
        startDate: JSON.parse(localStorage.getItem("timer"))?.startDate || new Date().toISOString(),
        endDate: JSON.parse(localStorage.getItem("timer"))?.endDate || new Date(Date.now() + 3600000).toISOString(),
    });

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh'
        }}>
            <nav className="nav">
                <header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: "pointer"
                    }}
                    onClick={() => setPage('timer')}>
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

                <div>
                    <Button
                        variant='contained'
                        sx={{ textTransform: "capitalize" }}
                        onClick={() => setPage('details')}
                    >
                        Maintenance Details
                    </Button>
                </div>
            </nav>

            <Box component="main" sx={{ flex: 1 }}>
                {page === 'timer' ? (
                    <Container maxWidth="lg">
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, sm: 6, md: 6 }} mt={7}>
                                <Typography sx={{ fontSize: { xs: '3rem', md: '3.75rem' } }} variant='h2' fontWeight={700}>We're undergoing maintenance</Typography>
                                <Typography mb={5}>We are performing some maintenance at the moment. We'll be back up shortly!</Typography>
                                <MaintenanceTimer startDate={timerRange.startDate} endDate={timerRange.endDate} />
                            </Grid>

                            <Grid size={{ xs: 12, sm: 6, md: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                                <img src="./main.gif" width={600} alt="maintenance" />
                            </Grid>
                        </Grid>
                    </Container>
                ) : (
                    <Container maxWidth="lg">
                        <MaintenanceDetails />
                    </Container>
                )}
            </Box>
            <Footer setPage={setPage} />
        </Box>
    );
};

export default MaintenancePages;
