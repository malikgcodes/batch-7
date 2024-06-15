import React, { useState } from 'react';
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  TextField,
  IconButton,
  Popover,
  MenuItem,
  TablePagination,
  Box
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { makeStyles } from '@mui/styles';

const AllProducts = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([
    {
      id: '001',
      name: 'Men Product 1',
      price: 99.99,
      description: 'Description for men product 1.',
      category: 'men',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '002',
      name: 'Women Product 1',
      price: 149.99,
      description: 'Description for women product 1.',
      category: 'women',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '003',
      name: 'Kid Product 1',
      price: 199.99,
      description: 'Description for kid product 1.',
      category: 'kid',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '004',
      name: 'Men Product 2',
      price: 79.99,
      description: 'Description for men product 2.',
      category: 'men',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '005',
      name: 'Women Product 2',
      price: 129.99,
      description: 'Description for women product 2.',
      category: 'women',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: '006',
      name: 'Kid Product 2',
      price: 179.99,
      description: 'Description for kid product 2.',
      category: 'kid',
      image: 'https://via.placeholder.com/150'
    },
  ]);
  const [filter, setFilter] = useState('all'); // Filter options: 'all', 'men', 'women', 'kid'
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (category) => {
    setFilter(category);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'all') {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    } else {
      return product.category === filter && product.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  });

  return (
    <Box p={3} className={classes.root}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom className={classes.title}>All Products</Typography>
        </Grid>
        <Grid item xs={12} className={classes.searchFilterContainer}>
          <TextField
            label="Search Products"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={classes.searchField}
          />
          <IconButton onClick={handleFilterClick} className={classes.filterButton}>
            <FilterListIcon />
          </IconButton>
          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleFilterClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem onClick={() => handleFilterChange('all')}>All Products</MenuItem>
            <MenuItem onClick={() => handleFilterChange('men')}>Men's Products</MenuItem>
            <MenuItem onClick={() => handleFilterChange('women')}>Women's Products</MenuItem>
            <MenuItem onClick={() => handleFilterChange('kid')}>Kid's Products</MenuItem>
          </Popover>
        </Grid>
        <Grid item xs={12}>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHeaderRow}>
                  <TableCell className={classes.tableHeaderCell}>Category</TableCell>
                  <TableCell className={classes.tableHeaderCell}>Product Name</TableCell>
                  <TableCell className={classes.tableHeaderCell}>Price</TableCell>
                  <TableCell className={classes.tableHeaderCell}>Description</TableCell>
                  <TableCell className={classes.tableHeaderCell}>Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredProducts.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(product => (
                  <TableRow key={product.id} className={classes.tableBodyRow}>
                    <TableCell>{product.category}</TableCell>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>${product.price.toFixed(2)}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>
                      <Card className={classes.card}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="100"
                            image={product.image}
                            alt={product.name}
                          />
                          <CardContent>
                            <Typography variant="body2" color="textSecondary" component="div">
                              {product.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredProducts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              className={classes.pagination}
            />
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
  },
  tableContainer: {
    marginBottom: '16px',
  },
  pagination: {
    borderTop: '1px solid rgba(224, 224, 224, 1)',
    marginTop: '16px',
  },
  searchField: {
    marginBottom: '16px',
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    width: 'calc(100% - 48px)', // Adjusted width
    marginRight: '8px',
  },
  searchFilterContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  filterButton: {
    backgroundColor: '#1976d2',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
    height: '40px', // Same height as the search field
    marginTop: '-12px',
  },
  card: {
    maxWidth: 150,
  },
  tableHeaderRow: {
    backgroundColor: '#1976d2',
  },
  tableHeaderCell: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  tableBodyRow: {
    backgroundColor: '#ffffff',
    '&:nth-of-type(odd)': {
      backgroundColor: '#f9f9f9',
    },
  },
  title: {
    color: '#1976d2',
    fontWeight: 'bold',
  }
});

export default AllProducts;
