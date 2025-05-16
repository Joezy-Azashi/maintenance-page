import React, { useState, useEffect } from 'react';
import './App.css';
import { Alert, Box, Button, Dialog, DialogContent, DialogTitle, Grid, IconButton, Snackbar, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

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

const TimerEditor = ({ onUpdate, handleCloseTimerMidal, setOpenSnack }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            onUpdate({ startDate, endDate });
            handleCloseTimerMidal()
            setOpenSnack({ open: true, severity: "success", message: "Timer updated successfully" })
            localStorage.setItem("timer", JSON.stringify({ startDate: startDate, endDate: endDate }))
        }
    };

    return (
        <form className="timer-editor" onSubmit={handleSubmit}>
            <label>
                Maintenance Start:
                <input type="datetime-local" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </label>
            <label>
                Maintenance End:
                <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </label>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <button type="submit">Update Timer</button>
            </Box>
        </form>
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
    const [openTimerModal, setOpenTimerModal] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showTimer, setShowTimer] = useState(false);
    const [openSnack, setOpenSnack] = useState({ open: false, severity: "", message: "" });
    const [showPassword, setShowPassword] = useState(false);
    const [timerRange, setTimerRange] = useState({
        startDate: JSON.parse(localStorage.getItem("timer"))?.startDate ||  new Date().toISOString(),
        endDate: JSON.parse(localStorage.getItem("timer"))?.endDate || new Date(Date.now() + 3600000).toISOString(),
    });

    const user = "Admin"
    const pass = "facio"

    const login = (e) => {
        e.preventDefault();
        if (userName === user && password === pass) {
            setShowTimer(true)
        } else {
            setOpenSnack({ open: true, severity: "error", message: "Wrong username of password" })
        }
    }

    const handleCloseTimerMidal = () => {
        setOpenTimerModal(false);
        setShowTimer(false);
        setUserName("")
        setPassword("")
    }

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={openSnack.open}
                autoHideDuration={4000}
                onClose={() => setOpenSnack({ open: false, severity: "", message: "" })}
            >
                <Alert
                    onClose={() => setOpenSnack({ open: false, severity: "", message: "" })}
                    severity={openSnack.severity}
                    autoHideDuration={4000}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {openSnack.message}
                </Alert>
            </Snackbar>
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
                    <button onClick={() => setOpenTimerModal(true)}>Admin</button>
                </div>
            </nav>

            <main>
                {page === 'timer' ? (
                    <Grid container spacing={3} mt={10}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant='h2' fontWeight={700}>We’re undergoing maintenance</Typography>
                            <Typography mb={5}>We are performing some maintenance at the moment. We'll be back up shortly!</Typography>
                            <MaintenanceTimer startDate={timerRange.startDate} endDate={timerRange.endDate} />
                        </Grid>

                        <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img src="./main.gif" width={600} alt="maintenance" />
                        </Grid>
                    </Grid>
                ) : (
                    <MaintenanceDetails />
                )}
            </main>

            <Dialog
                open={openTimerModal}
                maxWidth={"xs"}
                fullWidth
                onClose={(event, reason) => {
                    if (reason !== 'backdropClick') {
                        handleCloseTimerMidal();
                    }
                }}
                disableEscapeKeyDown
            >
                <DialogTitle>
                    Set countdown timer
                    <IconButton
                        aria-label="close"
                        onClick={() => handleCloseTimerMidal()}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {!showTimer ?
                        <form onSubmit={login}>
                            <TextField
                                id="username"
                                label="Username"
                                size='small'
                                fullWidth
                                sx={{ '& > :not(style)': { mt: 1 } }}
                                variant="outlined"
                                autoFocus
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                            />

                            <TextField
                                id="password"
                                label="Password"
                                size='small'
                                fullWidth
                                sx={{ '& > :not(style)': { mt: 3 } }}
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label={
                                                        showPassword ? 'hide the password' : 'display the password'
                                                    }
                                                    onClick={() => setShowPassword(!showPassword)}
                                                    edge="end"
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />

                            <Box sx={{ marginTop: 3, display: "flex", justifyContent: "center" }}>
                                <Button variant='contained' type='submit'>
                                    Login
                                </Button>
                            </Box>
                        </form> :

                        <TimerEditor
                            onUpdate={setTimerRange}
                            handleCloseTimerMidal={handleCloseTimerMidal}
                            setOpenSnack={setOpenSnack}
                        />
                    }
                </DialogContent>
            </Dialog>
        </div >
    );
};

export default MaintenancePages;
