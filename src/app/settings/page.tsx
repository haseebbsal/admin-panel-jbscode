"use client";

import React from 'react';
import Layout from '../layout';
import { TextField, Button, Grid } from '@mui/material';

const Settings: React.FC = () => {
  return (
    <Layout>
      <h1>Settings</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Site Name"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Admin Email"
            variant="outlined"
            margin="normal"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Settings;
