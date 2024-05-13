import React, { useState, useContext } from 'react';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

// Create a context for managing filter state
const FilterContext = React.createContext();

// Custom hook for accessing filter context
const useFilter = () => useContext(FilterContext);

// OrderFilter component
const OrderFilter = () => {
  const [status, setStatus] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [orders, setOrders] = useState([]);

  const applyFilter = () => {
    // Apply filter logic here
    console.log('Status:', status);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    // Here you would fetch orders based on filters, for now, let's just use dummy data
    const dummyOrders = [
      { id: 1, status: 'pending', date: '2024-05-01', total: 100 },
      { id: 2, status: 'processing', date: '2024-05-02', total: 200 },
      { id: 3, status: 'completed', date: '2024-05-03', total: 300 },
    ];
    setOrders(dummyOrders);
  };

  return (
    <FilterContext.Provider value={{ status, setStatus, startDate, setStartDate, endDate, setEndDate }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="processing">Processing</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            type="date"
            label="Start Date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            type="date"
            label="End Date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={applyFilter}>Apply Filter</Button>
        </Grid>
      </Grid>
      <br />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </FilterContext.Provider>
  );
};

export default OrderFilter;
