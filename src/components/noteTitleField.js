import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from '@mui/material';

export default function NoteTitleField({handleTitleChange, handleSubmit}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1}, display:'flex', alignItems:'center', width:'100%'}
      }
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Note Title" variant="outlined" sx={{flexGrow: 1}} onChange={handleTitleChange}/>
      <IconButton onClick={handleSubmit}>
          <AddIcon />
      </IconButton>
    </Box>
  );
}