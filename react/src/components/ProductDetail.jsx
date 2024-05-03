import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const ProductDetail = () => {
  const { id } = useParams(); // Get the id parameter from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        console.log("Response",response.data);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();

    return () => {
      setProduct(null);
    };
  }, [id]);

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      {product ? (
        <Card>
          <CardMedia
            component="img"
            height="140"
            image={product.thumbnail} // Assuming the product object has a property named 'thumbnail' containing the image URL
            alt={product.title}
          />
          <CardContent>
            <Typography variant="h5" component="h2">
              {product.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            {/* Render other details of the product */}
          </CardContent>
        </Card>
      ) : (
        <Typography>Product not found</Typography>
      )}
    </div>
  );
};

export default ProductDetail;
