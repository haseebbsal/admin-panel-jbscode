// src/components/CitationList.tsx
import React from 'react';
import { List, ListItem, ListItemText, Divider, Box, Typography } from '@mui/material';

interface Citation {
  id: string;
  title: string;
  priorityDate: string;
  publicationDate: string;
  assignee: string;
}

interface CitationListProps {
  citations: Citation[];
}

const CitationList: React.FC<CitationListProps> = ({ citations }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6" gutterBottom>
        Citations
      </Typography>
      <List>
        {citations.map(citation => (
          <React.Fragment key={citation.id}>
            <ListItem>
              <ListItemText
                primary={citation.title}
                secondary={`Priority Date: ${citation.priorityDate} | Publication Date: ${citation.publicationDate} | Assignee: ${citation.assignee}`}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default CitationList;
