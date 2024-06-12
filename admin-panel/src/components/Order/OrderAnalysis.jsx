import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Grid, Box, Tabs, Tab } from '@mui/material';

const orderData = [
  {
    id: '001',
    customer: 'John Doe',
    date: '2024-06-10',
    total: 99.99,
    description: 'This is a sample product description for order 001.',
  },
  {
    id: '002',
    customer: 'Jane Smith',
    date: '2024-06-11',
    total: 149.99,
    description: 'This is a sample product description for order 002.',
  },
  {
    id: '003',
    customer: 'Sam Wilson',
    date: '2024-06-12',
    total: 199.99,
    description: 'This is a sample product description for order 003.',
  },
];

const OrderCard = ({ order, onCancel }) => {
  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Order ID: {order.id}</Typography>
        <Typography variant="body2" color="textSecondary">Customer: {order.customer}</Typography>
        <Typography variant="body2" color="textSecondary">Date: {order.date}</Typography>
        <Typography variant="body2" color="textSecondary">Total: ${order.total.toFixed(2)}</Typography>
        <Typography variant="body2" color="textSecondary">Description: {order.description}</Typography>
        {onCancel && (
          <Button variant="contained" color="secondary" sx={{ marginTop: 2 }} onClick={() => onCancel(order.id)}>
            Cancel Order
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

const OrderList = ({ orders, onCancel }) => {
  return (
    <Grid container spacing={3}>
      {orders.map(order => (
        <Grid item xs={12} sm={6} md={4} key={order.id}>
          <OrderCard order={order} onCancel={onCancel} />
        </Grid>
      ))}
    </Grid>
  );
};

const OrderAnalysis = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(orderData);
  const [tab, setTab] = useState(0);

  const handleCancel = (orderId) => {
    setOrders(orders.filter(order => order.id !== orderId));
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} centered>
        <Tab label="All Orders" />
        <Tab label="Single Order" />
        <Tab label="Cancel Order" />
      </Tabs>

      <Box sx={{ padding: 3 }}>
        {tab === 0 && <OrderList orders={orders} />}
        {tab === 1 && (
          <div>
            <Button variant="contained" onClick={() => setSelectedOrder(orderData[0])}>
              Load Order Details
            </Button>
            {selectedOrder && <OrderCard order={selectedOrder} />}
          </div>
        )}
        {tab === 2 && <OrderList orders={orders} onCancel={handleCancel} />}
      </Box>
    </Box>
  );
};

export default OrderAnalysis;
