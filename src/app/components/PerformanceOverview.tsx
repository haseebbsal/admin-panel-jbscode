import React from 'react';
import { Card, CardContent, Typography, Box, Divider, Grid, Paper } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { blue, green, grey, red } from '@mui/material/colors';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from 'recharts';

interface PerformanceData {
  label: string;
  current: number;
  forecasted: number;
}

const performanceData: PerformanceData[] = [
  { label: 'Sales', current: Math.floor(Math.random() * 20000) + 10000, forecasted: Math.floor(Math.random() * 30000) + 20000 },
  { label: 'Revenue', current: Math.floor(Math.random() * 50000) + 30000, forecasted: Math.floor(Math.random() * 70000) + 50000 },
  { label: 'Orders', current: Math.floor(Math.random() * 200) + 100, forecasted: Math.floor(Math.random() * 300) + 150 },
  { label: 'Profit', current: Math.floor(Math.random() * 15000) + 5000, forecasted: Math.floor(Math.random() * 20000) + 10000 },
  { label: 'Growth', current: Math.floor(Math.random() * 50) + 10, forecasted: Math.floor(Math.random() * 70) + 30 },
];

const PerformanceOverview: React.FC = () => {
  // Prepare data for the radar chart
  const radarData = performanceData.map(data => ({
    label: data.label,
    current: data.current,
    forecasted: data.forecasted,
  }));

  return (
    // <Card sx={{ borderRadius: 2, boxShadow: 2, mb: 4, bgcolor: blue[400] + 10, width: '60%' }}>
    <Card sx={{ borderRadius: 2, boxShadow: 2, mb: 4, width: '100%' }}>
      <CardContent>
        {/* <Typography variant="h6" gutterBottom>
          Performance Overview
        </Typography> */}
        <Divider sx={{ mb: 2 }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <RadarChart
              outerRadius="70%"
              width={600}
              height={500}
              data={radarData}
            >
              <PolarGrid stroke="#e0e0e0" />
              <PolarAngleAxis dataKey="label" stroke="#666" />
              <PolarRadiusAxis stroke="#666" />
              <Radar
                name="Current"
                dataKey="current"
                stroke="#7c4dff"
                fill="#7c4dff"
                fillOpacity={0.3}
              />
              <Radar
                name="Forecasted"
                dataKey="forecasted"
                stroke="#4db6ac"
                fill="#4db6ac"
                fillOpacity={0.3}
              />
              <Tooltip />
              <Legend />
            </RadarChart>
          </Grid>
          <Grid item xs={12} md={4}>
      <Paper elevation={2} sx={{ p: 3, borderRadius: 1.5, bgcolor: grey[50], boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Metrics Overview
        </Typography>
        <Box display="flex" flexDirection="column" gap={1.5}>
          {performanceData.map((data, index) => {
            const difference = data.forecasted - data.current;
            const isIncrease = difference > 0;
            return (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                sx={{
                  p: 2,
                  borderRadius: 1,
                  bgcolor: isIncrease ? green[50] : red[50],
                  color: isIncrease ? green[700] : red[700],
                  boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  transition: 'background-color 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    bgcolor: isIncrease ? green[100] : red[100],
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    cursor: 'pointer',
                  },
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {data.label}
                </Typography>
                <Box display="flex" alignItems="center">
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 'bold', mr: 1 }}
                  >
                    {data.current}
                  </Typography>
                  {isIncrease ? (
                    <ArrowUpwardIcon sx={{ color: green[700], fontSize: 18, mx: 1 }} />
                  ) : (
                    <ArrowDownwardIcon sx={{ color: red[700], fontSize: 18, mx: 1 }} />
                  )}
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {data.forecasted}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Paper>
    </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PerformanceOverview;
