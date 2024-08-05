"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Dashboard, Settings } from '@mui/icons-material';
import { List, ListItem, ListItemText, Divider, Box, Typography } from '@mui/material';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: 250,
        bgcolor: 'background.paper',
        boxShadow: 2,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 4, fontWeight: 'bold' }}>
        AdminPanel
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem
          button
          onClick={() => router.push('/dashboard')}
          sx={{ borderRadius: 1, '&:hover': { bgcolor: 'action.hover' } }}
        >
          <Dashboard sx={{ mr: 2 }} />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          onClick={() => router.push('/settings')}
          sx={{ borderRadius: 1, '&:hover': { bgcolor: 'action.hover' } }}
        >
          <Settings sx={{ mr: 2 }} />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
