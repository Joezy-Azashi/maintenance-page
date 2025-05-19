import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Grid, Typography } from '@mui/material';

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
                <Typography variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.days || 0}d</Typography>
                <Typography variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.hours || 0}h</Typography>
                <Typography variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.minutes || 0}m</Typography>
                <Typography variant='h2' fontWeight={700} fontStyle={"italic"}>{timeLeft.seconds || 0}s</Typography>
            </Box>
        </div>
    );
};

const MaintenanceDetails = () => (
    <Box className="details" mt={5}>
        <Typography variant='h4' fontWeight={700}>Maintenance Details</Typography>
        <p>We’re currently updating our application to serve you better. This maintenance includes server upgrades, performance improvements, and bug fixes.</p>
        <ul>
            <li>✅ Backend upgrades</li>
            <li>✅ Database optimization</li>
            <li>🔄 Frontend UI updates</li>
        </ul>
        <p>If you need help, please <a href="mailto:support@company.com">contact support</a>.</p>
    </Box>
);

const MaintenancePages = () => {
    const [page, setPage] = useState('timer');
    
    const [timerRange, setTimerRange] = useState({
        startDate: JSON.parse(localStorage.getItem("timer"))?.startDate ||  new Date().toISOString(),
        endDate: JSON.parse(localStorage.getItem("timer"))?.endDate || new Date(Date.now() + 3600000).toISOString(),
    });

    return (
        <div>
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
                    <button onClick={() => setPage('details')}>Maintenance Details</button>
                </div>
            </nav>

            <main>
                {page === 'timer' ? (
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 6 }} mt={7}>
                            <Typography variant='h2' fontWeight={700}>We’re undergoing maintenance</Typography>
                            <Typography mb={5}>We are performing some maintenance at the moment. We'll be back up shortly!</Typography>
                            <MaintenanceTimer startDate={timerRange.startDate} endDate={timerRange.endDate} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: "start" }}>
                            <img src="./main.gif" width={600} alt="maintenance" />
                        </Grid>
                    </Grid>
                ) : (
                    <MaintenanceDetails />
                )}
            </main>
        </div >
    );
};

export default MaintenancePages;
