"use client";

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
    <Box>
      <IconButton color="inherit" onClick={toggleDrawer(true)}>
        <Badge badgeContent={notifications.length} color="error">
          <NotificationsIcon sx={{ fontSize: 30 }} />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300, p: 2 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', borderBottom: '1px solid #ddd' }}>
            Notifications
          </Typography>
          <List>
            {notifications.length === 0 ? (
              <Typography variant="body2" sx={{ p: 2, textAlign: 'center' }}>
                No new notifications
              </Typography>
            ) : (
              notifications.map((text, index) => (
                <ListItem button key={index} sx={{ '&:hover': { bgcolor: 'action.hover' } }}>
                  <ListItemText primary={text} />
                </ListItem>
              ))
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NotificationDrawer;
