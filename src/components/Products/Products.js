import React from 'react';
import Grid from '@mui/material/Grid';
import { Product } from './Product/Product';


export const Products = ({shoes,addtocarthandler}) => {

  return (<> <div style={{marginTop:60,height:"10px"}}></div>
  
  
  <div style={{ display: 'flex', marginTop:"20px",
    alignItems: "center", justifyContent: "center",flexGrow:1 }}>
  <Grid container justify = "center" spacing={3}>
    {shoes.map(product=>{ return(
        <Grid item  key={product.name} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} addtocarthandler={addtocarthandler}></Product>
        </Grid> 
    )} )}
    

  </Grid>
  </div>
  </>  )}
