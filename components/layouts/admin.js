import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { CurrentAdminTabData } from '@/utils/current-admin-tab';
import { useContext } from 'react';

const drawerWidth = 240;

export default function AdminLayout({ children }) {
  const { setCurrentAdminTab } = useContext(CurrentAdminTabData);
  const handleChangeTab = text => {
    console.log(text);
    setCurrentAdminTab(text);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {['Create', 'Manage'].map((text, index) => (
          <div key={index} onClick={() => handleChangeTab(text)} value={text}>
            {text}
          </div>
        ))}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}>
        <div>{children}</div>
      </Box>
    </Box>
  );
}
