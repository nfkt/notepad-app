import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';

export const NoteTitleList = ({items})=>{

    return(
        <>
                
          <List sx={{color: 'secondaryText.main'}}> 
        
          {items.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} 
        </List> 
        </>
    )
}