import React from 'react';
import { Container, Typography, Grid, TextField, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, Breadcrumbs, Link } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const dummyOrders = [
  {
    id: '001',
    customer: 'John Doe',
    date: '2024-06-10',
    total: 250.00,
  },
  {
    id: '002',
    customer: 'Jane Smith',
    date: '2024-06-11',
    total: 450.00,
  },
  {
    id: '003',
    customer: 'Alice Johnson',
    date: '2024-06-12',
    total: 300.00,
  },
  {
    id: '004',
    customer: 'Bob Brown',
    date: '2024-06-13',
    total: 150.00,
  },
];

const OrderList = ({ orders }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow  component={Paper} sx={{ backgroundColor: '#1976d2' }}>
            <TableCell>ID</TableCell>
            <TableCell>Customer</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Total</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={order.id} >
              <TableCell>{order.id}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                {index === 0 ? 'Pending' : index === 1 ? 'Success' : 'Tracking'}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const SearchBar = () => {
  return (
    <TextField label="Search" variant="outlined" />
  );
};

const ExportButton = () => {
  const handleExport = () => {
    // Your export logic here
  };

  return (
    <Button variant="contained" onClick={handleExport}>
      Export All
    </Button>
  );
};

const ProductTable = () => {
  const products = [
    { id: 1, name: 'Product A', orderId: '001', price: 50.00, quantity: 2 },
    { id: 2, name: 'Product B', orderId: '001', price: 25.00, quantity: 3 },
    { id: 3, name: 'Product C', orderId: '002', price: 100.00, quantity: 1 },
    { id: 4, name: 'Product D', orderId: '003', price: 75.00, quantity: 2 },
  ];

  return (
    <TableContainer >
      <Table>
        <TableHead>
          <TableRow  component={Paper} sx={{ backgroundColor: '#1976d2' }}>
            <TableCell><Typography variant="h6">Product</Typography></TableCell>
            <TableCell><Typography variant="h6">Order ID</Typography></TableCell>
            <TableCell><Typography variant="h6">Price</Typography></TableCell>
            <TableCell><Typography variant="h6">Quantity</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.orderId}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const OrderManagementPage = () => {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h6" gutterBottom>
            Order List
          </Typography>
        </Grid>
        <Typography variant="h4" sx={{ marginY: 3,ml :30 }} >
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link color="inherit" href="/" underline="hover">
            Home
          </Link>
          <Typography color="textPrimary">Order Management</Typography>
        </Breadcrumbs>
      </Typography>
      </Grid>
      <OrderList orders={dummyOrders} />
      <Grid container spacing={3} sx={{ marginTop: 4 }}>
        <Grid item xs={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={6} container justifyContent="flex-end">
          <ExportButton />
        </Grid>
      </Grid>
      <Grid container sx={{ marginTop: 4 }}>
        <ProductTable />
      </Grid>
    </Container>
  );
};


export default OrderManagementPage;
