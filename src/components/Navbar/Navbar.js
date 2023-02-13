import { AppBar } from '@mui/material';
import {Toolbar} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import {Badge} from '@mui/material';
import {Menu} from '@mui/material';
import{ MenuItem} from '@mui/material';
import {Typography} from '@mui/material';
import logo from "../assests/logo.png";
import AddShoppingCartSharp from '@mui/icons-material/AddShoppingCartSharp';
import React from 'react';
import { maxWidth } from '@mui/system';
import { spacing } from '@mui/system';
import Box from '@mui/material/Box';
import {Link,useLocation} from 'react-router-dom'




const Navbar = ({total}) => {

  const location = useLocation();
  return (<>
  <AppBar position="fixed" sx={{bgcolor:"transparent" }}>
    <Toolbar disableGutters width="auto">
        <Box sx={{display:"flex",flexGrow:8}}>
          <Typography component={Link}  to="/"> 
          <img  src={logo} style={{height:"20px",width:"200px"}} alt='logo'></img></Typography>
           
        </Box>
      
      
         <Box sx={{ display:"flex",flexGrow:1}} >

         { location.pathname == '/' && (
          <IconButton component={Link} to="/cart" aria-label="show cart item" color="secondary"> 
          <Badge badgeContent={total} color="primary">
            <AddShoppingCartSharp></AddShoppingCartSharp>
          </Badge>
        </IconButton> )}
        
        </Box>
    </Toolbar>

  </AppBar>
    
  </>
  )
}

export default Navbar