import React from 'react';
import { Container, Typography } from '@mui/material';
import SinglePayment from './SinglePayment';

const samplePayment = {
  invoiceNumber: 'INV-001',
  issueDate: '2023-05-01',
  dueDate: '2023-06-01',
  customer: 'Customer A',
  total: 500,
  paymentStatus: 'paid',
};

const SinglePaymentPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Details
      </Typography>
      <SinglePayment payment={samplePayment} />
    </Container>
  );
};

export default SinglePaymentPage;
