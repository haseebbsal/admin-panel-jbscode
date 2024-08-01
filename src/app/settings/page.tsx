"use client";

import React from 'react';
import Layout from '../layout';
import { Card, CardContent, Typography, TextField, Button, Box, Grid } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <div className='min-h-[100vh] pt-4'>
      {/* <Box mb={-6} /> */}
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Box display="flex" flexDirection="column" gap={3}>
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Profile Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Username" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Save Changes
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Notification Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="Email Notifications" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth label="SMS Notifications" variant="outlined" margin="normal" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                  Update Notifications
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

export default Settings;
