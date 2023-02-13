import React from 'react';
import { Box } from '@mui/material';
import {Typography} from '@mui/material';
import {Button} from '@mui/material';
import {Card} from '@mui/material';
import {CardActions} from '@mui/material';
import {CardContent} from '@mui/material';
import {CardMedia} from '@mui/material';



const CartItem = ({ item}) => {

 
  return (
    <Card >
      <CardMedia image={item.image.url} alt={item.name} component="img" sx={{"&.MuiCardMedia-img":{height:"200px"}}} />
      <CardContent sx={{  display: 'flex',
    justifyContent:'space-between'}}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between'}}>
        <Box sx={{display: 'flex', alignItems: 'center',}}>
          <Button type="button" size="small" >-</Button>
          <Typography>{item.quantity}</Typography>
          <Button type="button" size="small" >+</Button>
        </Box>
        <Button variant="contained" type="button" color="secondary" >Remove</Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
