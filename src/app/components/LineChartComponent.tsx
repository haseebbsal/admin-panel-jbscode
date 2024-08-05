import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement } from 'chart.js';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

ChartJS.register(LineElement, Title, Tooltip, Legend, CategoryScale, LinearScale, PointElement);

const LineChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Sales',
      data: [65, 59, 80, 81, 56, 55, 40],
      borderColor: 'rgba(75,192,192,1)',
      backgroundColor: 'rgba(75,192,192,0.2)',
      tension: 0.1,
    },
    {
      label: 'Revenue',
      data: [40, 45, 80, 90, 60, 70, 50],
      borderColor: 'rgba(153,102,255,1)',
      backgroundColor: 'rgba(153,102,255,0.2)',
      tension: 0.1,
    }
  ],
};

const LineChartComponent: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Sales and Revenue
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <Line data={LineChartData} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LineChartComponent;
