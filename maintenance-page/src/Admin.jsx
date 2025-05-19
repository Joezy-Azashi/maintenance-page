import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Alert, Box, Button, IconButton, InputAdornment, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from './App';

const Admin = () => {
    const navigate = useNavigate();
    const showSnackbar = useSnackbar();
    const [showTimer, setShowTimer] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const user = "Admin"
    const pass = "facio"

    const login = (e) => {
        e.preventDefault();
        if (userName === user && password === pass) {
            setShowTimer(true)
        } else {
            showSnackbar({ open: true, message: "Wrong username of password", severity: 'error' })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (startDate && endDate) {
            showSnackbar({ open: true, message: "Timer updated successfully", severity: 'success' })
            localStorage.setItem("timer", JSON.stringify({ startDate: startDate, endDate: endDate }))
            navigate("/");
        }
    };

    return (
        <div>
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh" }}>
                <Box sx={{ width: "450px", backgroundColor: "#fff", padding: "30px" }}>
                    <Typography variant='h5' fontWeight={700} textAlign={"center"} mb={2}>Set Countdown Timer</Typography>
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

                        <form className="timer-editor" onSubmit={handleSubmit} style={{ textAlign: "center" }}>
                            <label>
                                Maintenance Start:
                                <input
                                    type="datetime-local"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                />
                            </label>
                            <label>
                                Maintenance End:
                                <input type="datetime-local" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                            </label>

                            <Box sx={{ display: "flex", justifyContent: "center" }}>
                                <button type="submit">Update Timer</button>
                            </Box>
                        </form>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Admin
