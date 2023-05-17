import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import { CurrentAdminTabData } from '@/utils/current-admin-tab';
import { useContext } from 'react';

const drawerWidth = 240;

export default function AdminLayout({ children }) {
  const { currentAdminTab, setCurrentAdminTab } = useContext(CurrentAdminTabData);
  const handleChangeTab = text => {
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
          <div
            key={index}
            onClick={() => handleChangeTab(text)}
            value={text}
            style={{
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '10px',
              marginTop: '10px',
              height: '20px',
              width: '100%',
            }}
          >
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
