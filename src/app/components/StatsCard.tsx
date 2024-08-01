"use client";

import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <Card className="card">
      <CardContent>
        <div className="card-header">
          <Typography variant="h6">{title}</Typography>
          {icon}
        </div>
        <Typography variant="h4">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
