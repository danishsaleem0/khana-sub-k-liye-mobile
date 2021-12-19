import React from 'react';
import {Link} from 'react-router-dom';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';


function Navbar() {
return(
    <div>

     <Box sx={{ flexGrow: 1 }}  >        
         <AppBar position="static" color='transparent' >
          <Toolbar>
      
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} >
            <MenuIcon />
           </IconButton>

           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             Khana Sub-K-Liye
           <FoodBankIcon color='secondary' fontSize='medium'  sx={{position: 'relative', top: '4px', left: '3px'}} />
          </Typography>
         
 
         <Link to='/login' style={{textDecoration: 'none'}} >
           <Button color="success" variant='outlined' size='small' style={{marginRight: '12px'}} >
           Login </Button>
         </Link>

      <Link to='/signup'  style={{textDecoration: 'none'}}>
        <Button color="success" variant='outlined' size='small' >
         Signup 
        </Button>
      </Link> 
    


    </Toolbar>
    </AppBar>
    </Box>

    </div>



)
}
export default Navbar;