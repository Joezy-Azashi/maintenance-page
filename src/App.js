import { Alert, Snackbar, ThemeProvider } from '@mui/material';
import Admin from './Admin';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import theme from './theme';
import StatusPage from './StatusPage';
import MaintenanceDetailPage from './MaintenanceDetailPage';
import HomePage from './HomePage';

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snack, setSnack] = useState({
    open: false,
    message: '',
    severity: 'info',
  });

  const showSnackbar = ({ open, message, severity }) => {
    setSnack({ open, message, severity });
  };

  const handleClose = () => {
    setSnack(prev => ({ ...prev, open: false }));
  };

  return (
    <SnackbarContext.Provider value={showSnackbar}>
      {children}
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={snack.severity} sx={{ width: '100%' }}>
          {snack.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/status-page" element={<StatusPage />} />
            <Route path="/maintenance-detail-page" element={<MaintenanceDetailPage />} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
