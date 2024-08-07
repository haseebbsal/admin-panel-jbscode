// src/components/PatentDetailsCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Divider, Grid } from '@mui/material';

interface PatentDetailsCardProps {
  filingDate: string;
  inventors: string[];
  assignees: string[];
  legalStatus: string;
}

const PatentDetailsCard: React.FC<PatentDetailsCardProps> = ({ filingDate, inventors, assignees, legalStatus }) => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Filing Date
        </Typography>
        <Typography variant="body1">{filingDate}</Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Inventors
        </Typography>
        <Typography variant="body1">{inventors.join(', ')}</Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Assignees
        </Typography>
        <Typography variant="body1">{assignees.join(', ')}</Typography>
        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" gutterBottom>
          Legal Status
        </Typography>
        <Typography variant="body1">{legalStatus}</Typography>
      </CardContent>
    </Card>
  );
};

export default PatentDetailsCard;
