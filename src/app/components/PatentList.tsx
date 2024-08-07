import React from 'react';
import { List, ListItem, ListItemText, Divider, ListItemButton, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

// Ensure this type matches the one used in PatentsPage
interface Patent {
  id: string;
  title: string;
  metadata: string;
  description: string;
  dates: string;
}

interface PatentListProps {
  patents: Patent[];
  onSelect: (patent: Patent) => void;
}

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const PatentList: React.FC<PatentListProps> = ({ patents, onSelect }) => {
  return (
    <List sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      {patents.map(patent => (
        <React.Fragment key={patent.id}>
          <StyledListItemButton onClick={() => onSelect(patent)} sx={{ borderRadius: 2 }}>
            <ListItemText
              primary={<Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>{patent.title}</Typography>}
              secondary={
                <Box>
                  <Typography variant="body2" sx={{ color: '#555' }}>{patent.description}</Typography>
                  <Typography variant="caption" sx={{ color: '#888' }}>{patent.metadata} | {patent.dates}</Typography>
                </Box>
              }
              primaryTypographyProps={{ fontWeight: 'bold' }}
            />
          </StyledListItemButton>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default PatentList;
