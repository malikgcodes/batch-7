// App.jsx
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Sidebar from './Sidebar';
// import MainContent from "./component/MainContent"
// import Header from "./component/header"
// import Sidebar from "./component/sidebar"

export default function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Sidebar />
    </Box>
  );
    
}
