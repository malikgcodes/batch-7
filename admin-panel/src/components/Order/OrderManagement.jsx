
import React, { useState } from 'react';
import { Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TextField, Button, Pagination, Paper, ToggleButton, ToggleButtonGroup, Popover, List, ListItem, ListItemText } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';

const DashboardComponent = () => {
  // Dummy data for order summary
  const orderSummary = {
    totalCount: 100,
    successCount: 80,
    pendingCount: 15,
    cancelCount: 5
  };

  // Dummy data for order products
  const initialOrderProducts = [
    { id: 1, orderId: 'ORD001', productName: 'Product A', quantity: 2, price: 50, status: 'Success' },
    { id: 2, orderId: 'ORD002', productName: 'Product B', quantity: 1, price: 30, status: 'Pending' },
    { id: 3, orderId: 'ORD003', productName: 'Product C', quantity: 3, price: 20, status: 'Success' },
    { id: 4, orderId: 'ORD004', productName: 'Product D', quantity: 1, price: 25, status: 'Canceled' },
    { id: 5, orderId: 'ORD005', productName: 'Product E', quantity: 2, price: 40, status: 'Success' },
    { id: 6, orderId: 'ORD006', productName: 'Product F', quantity: 1, price: 35, status: 'Pending' },
    { id: 7, orderId: 'ORD007', productName: 'Product G', quantity: 4, price: 15, status: 'Success' },
    { id: 8, orderId: 'ORD008', productName: 'Product H', quantity: 2, price: 30, status: 'Success' },
    { id: 9, orderId: 'ORD009', productName: 'Product I', quantity: 3, price: 18, status: 'Canceled' },
    { id: 10, orderId: 'ORD010', productName: 'Product J', quantity: 1, price: 22, status: 'Success' },
  ];

  // State to hold order products and filtered products
  const [orderProducts, setOrderProducts] = useState(initialOrderProducts);
  const [filterValue, setFilterValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  // Function to handle search/filter
  const handleFilter = (event) => {
    const value = event.target.value.toLowerCase();
    setFilterValue(value);
    const filteredProducts = initialOrderProducts.filter(product =>
      product.orderId.toLowerCase().includes(value) ||
      product.productName.toLowerCase().includes(value) ||
      product.status.toLowerCase().includes(value)
    );
    setOrderProducts(filteredProducts);
  };

  // Function to handle filtering by status
  const handleStatusFilter = (status) => {
    if (status === 'all') {
      setOrderProducts(initialOrderProducts);
    } else {
      const filteredProducts = initialOrderProducts.filter(product => product.status.toLowerCase() === status);
      setOrderProducts(filteredProducts);
    }
    setFilterValue('');
    setAnchorEl(null); // Close the popover after selection
  };

  // Open popover function
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close popover function
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box p={3}>
      {/* Summary Boxes */}
      <Box display="flex" justifyContent="space-between" mb={3}>
        <SummaryBox title="Total Orders" count={orderSummary.totalCount} color="#1976d2" />
        <SummaryBox title="Successful Orders" count={orderSummary.successCount} color="#388e3c" />
        <SummaryBox title="Pending Orders" count={orderSummary.pendingCount} color="#f57c00" />
        <SummaryBox title="Canceled Orders" count={orderSummary.cancelCount} color="#d32f2f" />
      </Box>

      {/* Search and Filter Section */}
      <Box display="flex" alignItems="center" mb={3}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          value={filterValue}
          onChange={handleFilter}
          InputProps={{
            endAdornment: (
              <Button variant="contained" color="primary" size="large">
                <SearchIcon />
              </Button>
            ),
          }}
        />
        <ToggleButton
          variant="outlined"
          color="primary"
          onClick={handleClick}
          aria-describedby={open ? 'filter-options' : undefined}
        >
          <FilterListIcon />
        </ToggleButton>
        <Popover
          id="filter-options"
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
          <List>
            <ListItem button onClick={() => handleStatusFilter('all')}>
              <ListItemText primary="All" />
            </ListItem>
            <ListItem button onClick={() => handleStatusFilter('success')}>
              <ListItemText primary="Success" />
            </ListItem>
            <ListItem button onClick={() => handleStatusFilter('pending')}>
              <ListItemText primary="Pending" />
            </ListItem>
            <ListItem button onClick={() => handleStatusFilter('canceled')}>
              <ListItemText primary="Canceled" />
            </ListItem>
          </List>
        </Popover>
      </Box>

      {/* Table Section */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>Order ID</StyledTableCell>
              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell>Quantity</StyledTableCell>
              <StyledTableCell>Price</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.orderId}</TableCell>
                <TableCell>{product.productName}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <Box display="flex" justifyContent="flex-end" mt={3}>
        <Pagination count={10} color="primary" />
      </Box>
    </Box>
  );
};

// Summary Box Component with styled background
const SummaryBox = ({ title, count, color }) => (
  <Box
    border={1}
    p={2}
    width="22%"
    textAlign="center"
    bgcolor={color}
    color="white"
    boxShadow={3}
    borderRadius={8}
    style={{ transition: 'background-color 0.3s ease' }}
    sx={{ '&:hover': { bgcolor: color } }}
  >
    <Typography variant="h6">{title}</Typography>
    <Typography variant="h4">{count}</Typography>
  </Box>
);

// Styled TableCell with background color
const StyledTableCell = (props) => (
  <TableCell
    sx={{
      bgcolor: '#1976d2', // Light gray background color
      color: 'white', // Black text color
      fontWeight: 'bold', // Bold font weight
      borderBottom: '1px solid #e0e0e0', // Bottom border
      fontSize: '1.1rem', // Font size
      padding: '16px', // Padding
    }}
    {...props}
  />
);

export default DashboardComponent;







