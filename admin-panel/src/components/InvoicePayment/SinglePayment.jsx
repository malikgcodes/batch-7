import React from 'react';
import { Card, CardContent, Typography, Grid, Button } from '@mui/material';

const SinglePayment = ({ payment }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Invoice Number: {payment.invoiceNumber}
        </Typography>
        <Typography color="text.secondary">
          Issue Date: {new Date(payment.issueDate).toLocaleDateString()}
        </Typography>
        <Typography color="text.secondary">
          Due Date: {new Date(payment.dueDate).toLocaleDateString()}
        </Typography>
        <Typography color="text.secondary">
          Customer: {payment.customer}
        </Typography>
        <Typography variant="h6" component="div">
          Total: ${payment.total.toFixed(2)}
        </Typography>
        <Typography color="text.secondary">
          Status: {payment.paymentStatus}
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
          Edit Payment
        </Button>
      </CardContent>
    </Card>
  );
};

export default SinglePayment;
