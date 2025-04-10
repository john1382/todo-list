import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link,NavLink,useNavigate } from 'react-router-dom';
import './style.css'

export default function Navbar() {
  let navi = useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            <NavLink style={{marginLeft:10,color:'white',fontSize:'0.875rem'}} to={'/'}>Home</NavLink>
            <NavLink style={{marginLeft:10,color:'white',fontSize:'0.875rem'}} to={'/courses'}> Courses</NavLink>
            <NavLink style={{marginLeft:10,color:'white',fontSize:'0.875rem'}} to={'/about-us'}> About Us</NavLink>
            <NavLink style={{marginLeft:10,color:'white',fontSize:'0.875rem'}} to={'/panel'}> panel</NavLink>
            <NavLink className={(link)=> link.isActive ? 'active' : ''} style={{marginLeft:10,color:'white',fontSize:'0.875rem'}} to={'/setting'}> Setting</NavLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}