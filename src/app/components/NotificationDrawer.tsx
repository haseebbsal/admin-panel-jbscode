"use client";

// src/components/NotificationDrawer.tsx

import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, Badge, Box, Typography } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const notifications = [
    'New user: Alice Johnson',
    'Server usage high',
    'System update available',
    'Failed login attempt',
  ];
    

const NotificationDrawer: React.FC = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      (event as React.KeyboardEvent).type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
            Notifications
          </Typography>
          <List>
            {notifications.map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
