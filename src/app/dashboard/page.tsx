// src/pages/dashboard.tsx

"use client";

import React from 'react';
// import Layout from '../layout';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Box, Typography, Card, CardContent } from '@mui/material';
import NotificationDrawer from '../components/NotificationDrawer';
import UserProfileMenu from '../components/UserProfileMenu';
import TaskList from '../components/TaskList';

ChartJS.register(LineElement, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const LineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Monthly Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
    },
  ],
};

const BarChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [40, 45, 80, 90, 60, 70, 50],
      backgroundColor: 'rgba(153,102,255,0.2)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
    },
  ],
};

const ongoingProjects = [
  { name: 'Project Alpha', status: 'In Progress' },
  { name: 'Project Beta', status: 'Completed' },
  { name: 'Project Gamma', status: 'Not Started' },
  // Add more projects as needed
];

const Dashboard: React.FC = () => {
  return (
    <div className='w-full pt-4'>
    <Box  />
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Dashboard</Typography>
        <Box display="flex" alignItems="center">
          <NotificationDrawer />
          <UserProfileMenu />
        </Box>
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 1, minWidth: '300px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Sales
            </Typography>
            <Typography variant="h4" color="primary">
              $15,000
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: '300px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Total Revenue
            </Typography>
            <Typography variant="h4" color="primary">
              $45,000
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: '300px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              New Orders
            </Typography>
            <Typography variant="h4" color="primary">
              120
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 1, minWidth: '300px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            <Line data={LineChartData} />
          </CardContent>
        </Card>
        <Card sx={{ flex: 1, minWidth: '300px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Revenue Overview
            </Typography>
            <Bar data={BarChartData} />
          </CardContent>
        </Card>
      </Box>
      <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
        <Card sx={{ flex: 1, minWidth: '250px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Task List
            </Typography>
            <TaskList />
          </CardContent>
        </Card>
        <Card sx={{ flex: 2, minWidth: '400px', borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Ongoing Projects
            </Typography>
            <Box
              sx={{
                maxHeight: 300,
                overflowY: 'auto',
                '&::-webkit-scrollbar': { width: '8px' },
                '&::-webkit-scrollbar-thumb': { backgroundColor: '#ddd', borderRadius: '4px' },
              }}
            >
              {ongoingProjects.map((project, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '10px',
                    borderBottom: '1px solid #eee',
                    backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{project.name}</Typography>
                  <Typography variant="body2" color={project.status === 'In Progress' ? 'warning.main' : project.status === 'Completed' ? 'success.main' : 'textSecondary'}>
                    {project.status}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Dashboard;
