import React, { useState, useEffect } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  CircularProgress,
} from '@mui/material';
import { Add, Delete } from '@mui/icons-material';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import PaymentMethodSelection from './';

const InvoicePayment = () => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { description: 'Product 1', quantity: 2, price: 25 },
    { description: 'Product 2', quantity: 1, price: 30 },
    { description: 'Product 3', quantity: 3, price: 15 }
  ]);
  const [newItem, setNewItem] = useState({ description: '', quantity: 1, price: 0 });
  const [paymentDialogOpen, setPaymentDialogOpen] = useState(false);
  const [paymentData, setPaymentData] = useState([]);
  const [paymentPending, setPaymentPending] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('bankCard');

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  useEffect(() => {
    // Update payment data whenever items change
    setPaymentData([
      { name: 'Total Invoices', value: items.length },
      { name: 'Total Amount', value: parseFloat(calculateTotal()) },
    ]);
  }, [items]);

  const handleAddItem = () => {
    setItems([...items, newItem]);
    setNewItem({ description: '', quantity: 1, price: 0 });
    setOpen(false);
  };

  const handleDeleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const calculateTotal = () => {
    let total = items.reduce((total, item) => total + item.quantity * item.price, 0);
    // Adding extra fee for Cash on Delivery
    if (paymentMethod === 'cashOnDelivery') {
      total += 50; // 50 rupees additional fee
    }
    return total.toFixed(2);
  };

  const handleConfirmPayment = () => {
    setPaymentPending(true);
    // Simulate payment processing delay
    setTimeout(() => {
      console.log('Payment processed');
      setPaymentPending(false);
      setPaymentDialogOpen(false);
    }, 2000);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Invoice/Payment
      </Typography>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Payment Analysis
        </Typography>
        <PieChart width={400} height={400}>
          <Pie
            data={paymentData}
            cx={200}
            cy={200}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {paymentData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
        {paymentPending && (
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <CircularProgress />
            <Typography variant="body1" color="error">Payment Pending</Typography>
          </Box>
        )}
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Customer Details
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField fullWidth label="Customer Name" variant="outlined" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth label="Customer Email" variant="outlined" />
          </Grid>
        </Grid>
      </Paper>

      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Items
        </Typography>
        <Button variant="contained" startIcon={<Add />} onClick={() => setOpen(true)}>
          Add Item
        </Button>

        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Description</TableCell>
                <TableCell align="right">Quantity</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.description}</TableCell>
                  <TableCell align="right">{item.quantity}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right">{(item.quantity * item.price).toFixed(2)}</TableCell>
                  <TableCell align="right">
                    <IconButton color="secondary" onClick={() => handleDeleteItem(index)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>

      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Typography variant="h6">
          Total: ${calculateTotal()}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => setPaymentDialogOpen(true)}>
          Process Payment
        </Button>
      </Box>

      <PaymentMethodSelection
        open={paymentDialogOpen}
        onClose={() => setPaymentDialogOpen(false)}
        onConfirmPayment={handleConfirmPayment}
        paymentPending={paymentPending}
        setPaymentMethod={setPaymentMethod}
      />
    </Box>
  );
};

export default InvoicePayment;
