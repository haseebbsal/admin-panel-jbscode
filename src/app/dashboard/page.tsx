// src/pages/dashboard.tsx

"use client";

import React from 'react';
import { Box, Typography, Card, CardContent, useTheme} from '@mui/material';
import NotificationDrawer from '../components/NotificationDrawer';
import UserProfileMenu from '../components/UserProfileMenu';
import TaskList from '../components/TaskList';
import PerformanceOverview from '../components/PerformanceOverview';
import TransactionTable from '../components/TransactionTable';
import LineChartComponent from '../components/LineChartComponent';
import BarChartComponent from '../components/BarChartComponent';
import DataTableComponent from '../components/DataTableComponent';
import DashboardStats from '../components/DashboardStats';

const Dashboard: React.FC = () => {
  const theme = useTheme();

  return (
    <div className="w-full pt-4">
    <Box 
      className="w-full pt-4"
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        mb: 4,
        paddingX: 2
      }}
    >
      <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
        sx={{
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBottom: 2
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          Dashboard
        </Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <NotificationDrawer />
          <UserProfileMenu />
        </Box>
      </Box>
    </Box>
      <DashboardStats />

      <PerformanceOverview />

      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 1, minWidth: '200px', borderRadius: 2, boxShadow: 3}}>
         <LineChartComponent />
        </Card>
        <Card sx={{ flex: 0.8, minWidth: '200px', borderRadius: 2, boxShadow: 3 }}>
          < BarChartComponent />
        </Card>
      </Box>

      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 0.6, minWidth: '250px', borderRadius: 2, boxShadow: 3 }}>
          < DataTableComponent />
        </Card>
        <Card sx={{ flex: 0.6, minWidth: '200px', borderRadius: 2, boxShadow: 3 }}>
          < TransactionTable />
        </Card>
      </Box>
      
      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 1, minWidth: '250px', borderRadius: 2, boxShadow: 3 }}>
          <TaskList />
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
