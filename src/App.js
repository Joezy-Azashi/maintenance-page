import { Alert, Snackbar, ThemeProvider } from '@mui/material';
import Admin from './Admin';
import MaintenanceDetails from './MaintenanceDetails';
import './App.css';
import MaintenancePages from './Page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createContext, useContext, useState } from 'react';
import theme from './theme';

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
            <Route path="/" element={<MaintenancePages />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/maintenance-details" element={<MaintenanceDetails />} />
          </Routes>
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
