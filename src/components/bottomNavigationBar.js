import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';

export default function BottomNavigationBar({handleClick}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', display:{xs:'flex', md:'none'}, position:'absolute', bottom:'0', backgroundColor:'primary.main',  }}>
      <BottomNavigation
        showLabels
        // value={value}
        sx={{flexGrow:1, backgroundColor:'primary.main', color:'primaryText.main', display:'flex', justifyContent:'space-around'}}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Add" icon={<AddIcon />} onClick={handleClick}/>
        <BottomNavigationAction label="List" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
  );
}