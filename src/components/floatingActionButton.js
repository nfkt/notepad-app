import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export const FloatingActionButton = ({ handleClick }) => {


    return (
        <Box onClick={handleClick} sx={{ '& > :not(style)': { m: 1 }, position: 'absolute', right: '50%', left: '50%', bottom: '5rem', display: { xs: 'none', md: 'inline-block' } }}>
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
        </Box>
    );
}