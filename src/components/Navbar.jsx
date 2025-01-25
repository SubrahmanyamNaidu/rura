import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Menu as MenuIcon, Home, Info, Event, Folder, ContactMail, AppRegistration, People } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1e40af;
  color: #ffffff;
  padding: 20px 20px;
`;

const Logo = styled(Typography)`
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: #f59e0b;
  text-decoration: none;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: 20px;

  @media (max-width: 900px) {
    display: none;
  }
`;

const MobileMenuIcon = styled(IconButton)`
  display: none;
  color: #ffffff;

  @media (max-width: 900px) {
    display: flex;
  }
`;

const StyledButton = styled(Button)`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  // &:hover {
  //   background-color:rgb(206, 207, 214);
  //   color: #1e40af;
  //   border-radius: 5px;
  // }
`;

const navItems = [
  { label: 'Home', path: '/', icon: <Home /> },
  { label: 'About Us', path: '/about', icon: <Info /> },
  { label: 'Our Initiatives', path: '/initiatives', icon: <People /> },
  { label: 'Events', path: '/events', icon: <Event /> },
  { label: 'Resources', path: '/resources', icon: <Folder /> },
  { label: 'Applications', path: '/applications', icon: <AppRegistration /> },
  { label: 'Contact Us', path: '/contact', icon: <ContactMail /> },
];

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="sticky">
        <StyledToolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Logo>RURA Foundation</Logo>
          </Link>

          <NavLinks>
            {navItems.map((item, index) => (
              <StyledButton key={index} color="inherit" component={Link} to={item.path} startIcon={item.icon}>
                {item.label}
              </StyledButton>
            ))}
          </NavLinks>

          <MobileMenuIcon edge="end" onClick={handleDrawerToggle}>
            <MenuIcon sx={{ fontSize: 32 }} />
          </MobileMenuIcon>
        </StyledToolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List sx={{ width: 250 }}>
          {navItems.map((item, index) => (
            <ListItem  key={index} component={Link} to={item.path} onClick={handleDrawerToggle} >
              <ListItemIcon sx={{color:'#1e40af'}}>{item.icon}</ListItemIcon>
              <ListItemText sx={{color:'gray'}}>{item.label}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Navbar;
