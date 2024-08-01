"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Dashboard, Settings } from '@mui/icons-material';

const Sidebar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="logo">AdminPanel</div>
      <div className="menu-item" onClick={() => router.push('/dashboard')}>
        <Dashboard style={{ marginRight: '8px' }} />
        Dashboard
      </div>
      <div className="menu-item" onClick={() => router.push('/settings')}>
        <Settings style={{ marginRight: '8px' }} />
        Settings
      </div>
    </div>
  );
};

export default Sidebar;
