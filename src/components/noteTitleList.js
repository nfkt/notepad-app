import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material"
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ArticleIcon from '@mui/icons-material/Article';

export const NoteTitleList = ({items, getNoteTitles})=>{

  

    return(
        <>
                
          <List sx={{color: 'secondaryText.main', bgcolor:'inherit'}}> 
        
          {items.map((text, index) => (
            <ListItem button key={index} onClick={()=> {getNoteTitles(index); console.log(text.title, " itworks")}}>
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary={text.title} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List sx={{bgcolor:'inherit'}}>
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