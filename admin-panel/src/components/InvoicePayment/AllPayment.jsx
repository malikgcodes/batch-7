import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import SinglePayment from './SinglePayment';

const payments = [
  {
    invoiceNumber: 'INV-001',
    issueDate: '2023-05-01',
    dueDate: '2023-06-01',
    customer: 'Customer A',
    total: 500,
    paymentStatus: 'paid'
  },
  // Add more payment objects as needed
];

const AllPayments = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        All Payments
      </Typography>
      <Grid container spacing={2}>
        {payments.map((payment, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SinglePayment payment={payment} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AllPayments;
