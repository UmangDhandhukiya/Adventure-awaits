import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
  Build as BuildIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './Navbar.css';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
    gsap.to('.drawer-list', { x: open ? 0 : -250, duration: 0.3 });
  };

  const list = (
    <List className="drawer-list" sx={{ width: 250 }}>
      <ListItem button component={Link} to="/home" onClick={() => toggleDrawer(false)}>
        <HomeIcon sx={{ color: 'black' }} />
        <ListItemText primary="Home" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={() => toggleDrawer(false)}>
        <InfoIcon sx={{ color: 'black' }} />
        <ListItemText primary="About" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/services" onClick={() => toggleDrawer(false)}>
        <BuildIcon sx={{ color: 'black' }} />
        <ListItemText primary="Services" sx={{ color: 'black' }} />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={() => toggleDrawer(false)}>
        <ContactMailIcon sx={{ color: 'black' }} />
        <ListItemText primary="Contact" sx={{ color: 'black' }} />
      </ListItem>
    </List>
  );

  return (
    <div className='nav'>
      <AppBar position="static" sx={{
       background: 'linear-gradient(to right, #dc7633, #f5b041)',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Add shadow below the navbar
      }}>
        <Toolbar>
        <IconButton
  edge="start"
  color="black"
  aria-label="menu"
  onClick={() => toggleDrawer(true)}
  sx={{
    display: { xs: 'flex', sm: 'flex', md: 'none' } // Show on xs and sm, hide on md and up
  }}
>
  <MenuIcon />
</IconButton>

          <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 'bold', color: 'black' }}>
            Adventure Awaits
          </Typography>
          <div className="nav-links" style={{ display: { xs: 'none', sm: 'flex' } }}>
            <Button color="inherit" component={Link} to="/home" sx={{ fontSize: '1.1rem', color: 'black' }}>
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about" sx={{ fontSize: '1.1rem', color: 'black' }}>
              About
            </Button>
            <Button color="inherit" component={Link} to="/services" sx={{ fontSize: '1.1rem', color: 'black' }}>
              Places
            </Button>
            <Button color="inherit" component={Link} to="/contact" sx={{ fontSize: '1.1rem', color: 'black' }}>
              Contact
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default Navbar;
