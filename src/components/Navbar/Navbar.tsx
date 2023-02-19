import React from 'react';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { CustomDialo } from '../CustomDialo';
import { FavoriteTable } from './FavoriteTable';
import { Favorite } from '@mui/icons-material';

export interface NavbarInterface{}

const Navbar: React.FC<NavbarInterface> = () => {
	return(
<>
<CustomDialo>

<FavoriteTable/>

</CustomDialo>

		<AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Leoberto Zeron
          </Typography>
          <Button 
          color="inherit">Open favorites</Button>
           <IconButton>
            <Favorite style={{color:'red'}}/>
           </IconButton>
        </Toolbar>
      </AppBar>

      </>
	)
};

export default Navbar;
