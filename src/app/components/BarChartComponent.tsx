import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

ChartJS.register(BarElement, Title, Tooltip, Legend, CategoryScale, LinearScale);

const BarChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  datasets: [
    {
      label: 'Revenue',
      data: [40, 45, 80, 90, 60, 70, 50],
      backgroundColor: 'rgba(153,102,255,0.6)',
      borderColor: 'rgba(153,102,255,1)',
      borderWidth: 1,
    }
  ],
};

const BarChartComponent: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Monthly Revenue
        </Typography>
        <Box sx={{ height: 400, width: '100%' }}>
          <Bar data={BarChartData} options={{
            plugins: {
              legend: {
                display: false
              },
              tooltip: {
                backgroundColor: grey[900],
                titleColor: grey[50],
                bodyColor: grey[300],
              }
            },
            scales: {
              x: {
                grid: {
                  display: false
                },
                ticks: {
                  color: grey[700]
                }
              },
              y: {
                grid: {
                //   borderColor: grey[300]
                },
                ticks: {
                  color: grey[700]
                }
              }
            }
          }} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default BarChartComponent;
