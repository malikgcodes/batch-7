import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, CircularProgress } from '@mui/material';

// Dummy API function for searching orders
const searchOrders = async (query) => {
  // Replace this with actual API call to search for orders
  // For demo, returning dummy data after a short delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, orderNumber: 'ORD-001', productName: 'Product A' },
        { id: 2, orderNumber: 'ORD-002', productName: 'Product B' },
        { id: 3, orderNumber: 'ORD-003', productName: 'Product C' },
      ]);
    }, 1000);
  });
};

const OrderSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    const data = await searchOrders(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Order Search
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8} sm={10}>
          <TextField
            fullWidth
            label="Search Orders"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </Grid>
        <Grid item xs={4} sm={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            disabled={!query.trim() || loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Search'}
          </Button>
        </Grid>
      </Grid>
      {loading && <Typography variant="body1">Searching...</Typography>}
      {results.length > 0 && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Order Number</TableCell>
                <TableCell>Product Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.orderNumber}</TableCell>
                  <TableCell>{order.productName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {results.length === 0 && !loading && <Typography variant="body1">No results found</Typography>}
    </div>
  );
};

export default OrderSearch;
