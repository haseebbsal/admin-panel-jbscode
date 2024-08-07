// src/components/DetailsHeader.tsx
import React from 'react';
import { Typography, Box } from '@mui/material';

interface DetailsHeaderProps {
  title: string;
  abstract: string;
}

const DetailsHeader: React.FC<DetailsHeaderProps> = ({ title, abstract }) => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#f5f5f5', borderRadius: 2, mb: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {abstract}
      </Typography>
    </Box>
  );
};

export default DetailsHeader;
