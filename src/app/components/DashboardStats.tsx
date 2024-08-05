import React from 'react';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { blue, green, orange, grey } from '@mui/material/colors';
import { motion } from 'framer-motion';

const stats = [
  {
    title: 'Total Sales',
    value: '$15,000',
    icon: <TrendingUpIcon />,
    color: blue[500],
  },
  {
    title: 'Total Revenue',
    value: '$45,000',
    icon: <AttachMoneyIcon />,
    color: green[500],
  },
  {
    title: 'New Orders',
    value: '120',
    icon: <ShoppingCartIcon />,
    color: orange[500],
  },
];

const StatsCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3 }}
    >
      <Card sx={{ borderRadius: 1.5, boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', bgcolor: grey[50], minWidth: '300px', p: 2 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <Box sx={{ color: color, mr: 2, fontSize: 28 }}>
              {icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ color: color, fontWeight: 'bold' }}>
            {value}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const DashboardStats: React.FC = () => {
  return (
    <Box display="flex" gap={2} flexWrap="wrap" mb={4}>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StatsCard title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DashboardStats;
