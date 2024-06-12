import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const SingleProduct = () => {
  const product = {
    id: '001',
    name: 'Sample Product',
    price: 99.99,
    description: 'This is a sample product description.',
  };

  return (
    <Card sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5">Product ID: {product.id}</Typography>
        <Typography variant="body2" color="textSecondary">Product: {product.name}</Typography>
        <Typography variant="body2" color="textSecondary">Price: ${product.price.toFixed(2)}</Typography>
        <Typography variant="body2" color="textSecondary">Description: {product.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default SingleProduct;
