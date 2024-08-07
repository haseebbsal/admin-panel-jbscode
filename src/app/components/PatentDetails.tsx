import React from 'react';
import { Card, CardContent, Typography, Divider, Box, Chip, Paper } from '@mui/material';

interface Patent {
  id: string;
  title: string;
  description: string;
  metadata: string;
  dates: string;
}

interface PatentDetailsProps {
  patent: Patent;
}

const PatentDetails: React.FC<PatentDetailsProps> = ({ patent }) => {
  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          {patent.title}
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#555' }}>
            Metadata
          </Typography>
          <Chip label={patent.metadata} sx={{ mt: 1, backgroundColor: '#f0f0f0', borderColor: '#ccc', color: '#333' }} variant="outlined" />
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#555' }}>
            Description
          </Typography>
          <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 1, backgroundColor: '#fafafa' }}>
            <Typography variant="body1" gutterBottom>
              {patent.description}
            </Typography>
          </Paper>
        </Box>
        <Box>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#555' }}>
            Dates
          </Typography>
          <Typography variant="body1" sx={{ backgroundColor: '#f0f0f0', p: 1, borderRadius: 1 }}>
            {patent.dates}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PatentDetails;
