"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Dashboard, Settings } from '@mui/icons-material';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="logo">AdminPanel</div>
      <List>
        <ListItem button onClick={() => router.push('/dashboard')} className="menu-item">
          <Dashboard style={{ marginRight: '8px' }} />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button onClick={() => router.push('/settings')} className="menu-item">
          <Settings style={{ marginRight: '8px' }} />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
