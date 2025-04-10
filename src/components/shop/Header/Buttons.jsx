import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './buttons.css'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500}}>
      <BottomNavigation
        style={{height:30}}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction variant='dark' style={{fontWeight:700}} label="فروشگاها"/>
        <BottomNavigationAction style={{fontWeight:700,fontSize:50}} label="بچهگانه"/>
        <BottomNavigationAction style={{fontWeight:700,fontSize:50}} label="مردانه"/>
        <BottomNavigationAction style={{fontWeight:700,fontSize:50}} label="زنانه"/>
      </BottomNavigation>
    </Box>
  );
}
