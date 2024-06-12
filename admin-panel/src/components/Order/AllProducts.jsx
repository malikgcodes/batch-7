import React from 'react';
import { Grid } from '@mui/material';
import SingleProduct from './SingleProduct';

const AllProducts = () => {
  const products = [
    {
      id: '001',
      name: 'Product 1',
      price: 99.99,
      description: 'Description for product 1.',
    },
    {
      id: '002',
      name: 'Product 2',
      price: 149.99,
      description: 'Description for product 2.',
    },
    {
      id: '003',
      name: 'Product 3',
      price: 199.99,
      description: 'Description for product 3.',
    },
  ];

  return (
    <Grid container spacing={3}>
      {products.map(product => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <SingleProduct product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default AllProducts;
