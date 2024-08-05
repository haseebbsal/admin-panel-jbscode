"use client";

import React, { useState } from 'react';
import { Menu, MenuItem, IconButton, Box, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';

const UserProfileMenu: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <IconButton color="inherit" onClick={handleClick}>
        <AccountCircle sx={{ fontSize: 30 }} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: 1,
            boxShadow: 3,
            mt: 1,
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">Profile</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">My account</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Typography variant="body1">Logout</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserProfileMenu;
