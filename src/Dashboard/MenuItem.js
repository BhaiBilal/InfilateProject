import React from 'react'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import { Link } from "react-router-dom";

function Menuitem({setSelected}) {

    return (
        <div>
    <Paper sx={{ width: 320, maxWidth: '100%' }}>
      
      <MenuList>

      <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <Link to='/Dashboard/Home'>
          <ListItemText>Home</ListItemText></Link>
          <Typography variant="body2" color="text.secondary">
        
          </Typography>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <ContentCut fontSize="small" />
          </ListItemIcon>
          <Link to='/Dashboard/addBlog'>
          <ListItemText >Add Blog</ListItemText></Link>
          <Typography variant="body2" color="text.secondary">
        
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <ContentCopy fontSize="small" />
          </ListItemIcon>
          <Link to='/Dashboard/addCoupon'>
          <ListItemText >Coupons</ListItemText></Link>
          <Typography variant="body2" color="text.secondary">
       
          </Typography>
        </MenuItem>
        {/* <MenuItem>
          <ListItemIcon>
            <ContentPaste fontSize="small" />
          </ListItemIcon>
          <ListItemText onClick={() => setSelected('AddWebinar')}>Create a webinar</ListItemText>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </MenuItem> */}
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <Link to='/Dashboard/addProduct'>
          <ListItemText >Add Products</ListItemText></Link>
        </MenuItem>

        <MenuItem>
          <ListItemIcon>
            <Cloud fontSize="small" />
          </ListItemIcon>
          <Link to='/Dashboard/addService'>
          <ListItemText >Add Services</ListItemText></Link>
        </MenuItem>

      </MenuList>
      
    </Paper>
        </div>
    )
}

export default Menuitem
