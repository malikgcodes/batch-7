import React, { useState } from 'react';
import {
  Box, Button, TextField, Typography, Grid, IconButton, Container, Paper, MenuItem
} from '@mui/material';
import { AddCircle, RemoveCircle } from '@mui/icons-material';

const InvoiceGenerator = () => {
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [customer, setCustomer] = useState('');
  const [items, setItems] = useState([{ name: '', quantity: 1, price: 0 }]);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [notes, setNotes] = useState('');

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: 1, price: 0 }]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => (
      i === index ? { ...item, [field]: value } : item
    ));
    setItems(updatedItems);
    calculateTotal(updatedItems);
  };

  const calculateTotal = (items) => {
    const subtotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);
    setSubtotal(subtotal);
    setTotal(subtotal); // Add other calculations if needed
  };

  return (
    <Container>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="h4" gutterBottom>Create Invoice</Typography>
        <Box component="form">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Invoice Number"
                fullWidth
                value={invoiceNumber}
                onChange={(e) => setInvoiceNumber(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="date"
                label="Issue Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="date"
                label="Due Date"
                InputLabelProps={{ shrink: true }}
                fullWidth
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                label="Customer"
                fullWidth
                value={customer}
                onChange={(e) => setCustomer(e.target.value)}
              />
            </Grid>
            {items.map((item, index) => (
              <Grid container spacing={2} key={index} alignItems="center">
                <Grid item xs={4}>
                  <TextField
                    required
                    label="Item"
                    fullWidth
                    value={item.name}
                    onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    required
                    type="number"
                    label="Quantity"
                    fullWidth
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    required
                    type="number"
                    label="Price"
                    fullWidth
                    value={item.price}
                    onChange={(e) => handleItemChange(index, 'price', e.target.value)}
                  />
                </Grid>
                <Grid item xs={3}>
                  <IconButton color="primary" onClick={() => handleRemoveItem(index)}>
                    <RemoveCircle />
                  </IconButton>
                  <IconButton color="primary" onClick={handleAddItem}>
                    <AddCircle />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <TextField
                label="Notes"
                multiline
                rows={4}
                fullWidth
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
              <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" color="primary">Save Invoice</Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default InvoiceGenerator;
