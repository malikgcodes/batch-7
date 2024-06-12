import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

const CancelProduct = () => {
  const product = {
    id: '001',
    name: 'Sample Product',
    price: 99.99,
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Product ID: {product.id}</Typography>
        <Typography variant="body2" color="textSecondary">Product: {product.name}</Typography>
        <Typography variant="body2" color="textSecondary">Price: ${product.price.toFixed(2)}</Typography>
        <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
          Cancel Product
        </Button>
      </CardContent>
    </Card>
  );
};

export default CancelProduct;
