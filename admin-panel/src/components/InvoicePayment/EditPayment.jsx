import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Grid, MenuItem
} from '@mui/material';

const EditPayment = ({ payment }) => {
  const [invoiceNumber, setInvoiceNumber] = useState(payment.invoiceNumber);
  const [issueDate, setIssueDate] = useState(payment.issueDate);
  const [dueDate, setDueDate] = useState(payment.dueDate);
  const [customer, setCustomer] = useState(payment.customer);
  const [total, setTotal] = useState(payment.total);
  const [paymentStatus, setPaymentStatus] = useState(payment.paymentStatus);

  const handleSave = () => {
    // Handle save logic here
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Edit Payment
      </Typography>
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
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="number"
            label="Total"
            fullWidth
            value={total}
            onChange={(e) => setTotal(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            label="Payment Status"
            select
            fullWidth
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <MenuItem value="paid">Paid</MenuItem>
            <MenuItem value="unpaid">Unpaid</MenuItem>
            <MenuItem value="pending">Pending</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditPayment;
