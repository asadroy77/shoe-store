import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import {Button} from '@mui/material';
import{ Grid} from '@mui/material';
import {Box} from '@mui/system';

import CartItem from './CartItem/CartItem';


const Cart = ({ cart }) => {
 

  
  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart,
      
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} lg={3}  key={lineItem.id}>
            <CartItem item={lineItem} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between'}}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <Box>
          <Button sx={{minWidth: '150px'}} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
          <Button sx={{minWidth: '150px'}}  size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </Box>
      </Box>
    </>
  );

  return (
    <Container>
      <div style={{marginTop:"60px",height:"10px"}} />
      <Typography  variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
