import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  CardMedia,
  TablePagination,
} from '@mui/material';

const CancelProduct = () => {
  const [products] = useState([
    {
      id: '001',
      name: 'Sample Product 1',
      price: 99.99,
      category: 'men',
      userId: 'User001',
      image: 'https://via.placeholder.com/150',
      reason: 'Product not as described'
    },
    {
      id: '002',
      name: 'Sample Product 2',
      price: 149.99,
      category: 'women',
      userId: 'User002',
      image: 'https://via.placeholder.com/150',
      reason: 'Found a better price elsewhere'
    },
    {
      id: '003',
      name: 'Sample Product 3',
      price: 199.99,
      category: 'kid',
      userId: 'User003',
      image: 'https://via.placeholder.com/150',
      reason: 'No longer needed'
    },
    // Add more products as needed
  ]);
  
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedProducts = products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>Cancelled Products</Typography>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper} sx={{ marginBottom: 2 }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Product ID</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Product Name</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Category</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>User ID</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Image</TableCell>
                <TableCell sx={{ color: 'common.white', fontWeight: 'bold' }}>Reason</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayedProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.userId}</TableCell>
                  <TableCell>
                    <Card sx={{ maxWidth: 150 }}>
                      <CardMedia
                        component="img"
                        height="100"
                        image={product.image}
                        alt={product.name}
                      />
                    </Card>
                  </TableCell>
                  <TableCell>{product.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={products.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CancelProduct;
