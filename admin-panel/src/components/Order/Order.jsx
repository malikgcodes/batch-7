import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const Order = ({ order }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Order ID: {order.id}</Typography>
        <Typography variant="body2" color="textSecondary">Customer: {order.customer}</Typography>
        <Typography variant="body2" color="textSecondary">Date: {order.date}</Typography>
        <Typography variant="body2" color="textSecondary">Total: ${order.total.toFixed(2)}</Typography>
        <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
          Cancel Order
        </Button>
      </CardContent>
    </Card>
  );
};

const OrderList = ({ orders }) => {
  return (
    <Grid container spacing={3}>
      {orders.map(order => (
        <Grid item xs={12} sm={6} md={4} key={order.id}>
          <Order order={order} />
        </Grid>
      ))}
    </Grid>
  );
};

export default OrderList;
