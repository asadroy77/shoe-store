import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia  from '@mui/material/CardMedia';
import { IconButton } from '@mui/material';
import {Typography} from '@mui/material';
// import{ Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@mui/material/core';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';


export const Product = ({product,addtocarthandler}) => {


    const ax = {"&.MuiCardMedia-img":{height:"200px"}}
  return (<>

            <Card  sx={{ maxWidth:400, mx:"auto"}}>
                <CardMedia sx={ax}  component="img" 
                image={product.image.url}  alt="green iguana"/>
                <CardContent >
                    <Typography variant="h5">{product.name}</Typography>
                    {/* <Typography variant="body2">{product.price}</Typography> */}
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton  onClick={()=>addtocarthandler(product.id,1)}  aria-label="Add to Cart">
                        <AddShoppingCartSharpIcon ></AddShoppingCartSharpIcon>
                    </IconButton>
                </CardActions>


            </Card>
    
    </>)}
