"use client";

import React, { useState, useCallback } from 'react';
import { Container, Grid, Paper, Typography, Box, IconButton, Tooltip } from '@mui/material';
import SearchBar from '../components/SearchBar';
import PatentList from '../components/PatentList';
import PatentDetails from '../components/PatentDetails';
import SearchIcon from '@mui/icons-material/Search';

// Define interfaces for better type safety
interface Patent {
  id: string;
  title: string;
  metadata: string;
  description: string;
  dates: string;
}

interface Citation {
  id: string;
  title: string;
  priorityDate: string;
  publicationDate: string;
  assignee: string;
}

interface PatentDetailsData {
  id: string;
  title: string;
  abstract: string;
  filingDate: string;
  inventors: string[];
  assignees: string[];
  legalStatus: string;
  citations: Citation[];
}

// Sample patent data
const patentsData: Patent[] = [
  {
    id: "CN104908705B",
    title: "System and method for seat belt usage monitoring",
    metadata: "US CN DE MX RU CN104908705B 马哈茂德·尤瑟夫·甘纳姆 福特全球技术公司",
    description: "A control system in communication with the occupant position monitor and programmed to perform an adjustment of the safety device based on the occupant position and size category received from the occupant position monitor and further programmed to determine improper use of the seat belt based on a …",
    dates: "Priority 2014-03-10 • Filed 2015-03-10 • Granted 2020-01-14 • Published 2020-01-14",
  },
  // Additional patents can be added here
];

const patentDetailsData: PatentDetailsData = {
  id: "US20080149005A1",
  title: "Pallet for shipping and displaying of packaged goods",
  abstract: "A pallet for shipping and displaying of packaged goods wherein the pallet comprises a plurality of stacking feet joined together by angled ribs to substantially prevent or inhibit spreading of the stacking feet due to high weight loads...",
  filingDate: "2008-06-26",
  inventors: ["Edward L. Stahl", "Stanley Charles Ellington", "Brent Clyde Mizell", "Travis Truman Crane", "Ira Donovan Youmans", "John P. Barry"],
  assignees: ["Coca Cola Bottling Company United Inc"],
  legalStatus: "Active",
  citations: [
    { id: "US1963360A", title: "Brush", priorityDate: "1932-06-18", publicationDate: "1934-06-19", assignee: "Floyd E Gibbin" },
    { id: "DE502004004880D1", title: "TRANSPORT PALETTE OF PLASTIC", priorityDate: "2004-01-18", publicationDate: "2007-10-18", assignee: "Siopal Corp" }
  ]
};

const PatentsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedPatent, setSelectedPatent] = useState<Patent | null>(null);

  const handleSearch = useCallback((term: string) => {
    setSearchTerm(term);
  }, []);

  const handleSelectPatent = useCallback((patent: Patent) => {
    setSelectedPatent(patent);
  }, []);

  const filteredPatents = patentsData.filter(patent => {
    // Ensure searchTerm is a string and convert it to lowercase
    const search = (searchTerm || '').toLowerCase();
    const title = (patent.title || '').toLowerCase();
    const description = (patent.description || '').toLowerCase();
    return title.includes(search) || description.includes(search);
  });

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={6} sx={{ padding: 3, mb: 4, backgroundColor: '#f0f0f0' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Patent Search
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <SearchBar onSearch={handleSearch} />
          <Tooltip title="Search patents" arrow>
            <IconButton sx={{ ml: 2 }} color="primary">
              <SearchIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Paper>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper elevation={6} sx={{ padding: 3, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              Search Results
            </Typography>
            {filteredPatents.length > 0 ? (
              <PatentList patents={filteredPatents} onSelect={handleSelectPatent} />
            ) : (
              <Typography variant="body1" color="textSecondary">
                No patents found matching your search criteria.
              </Typography>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={6} sx={{ padding: 3, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" component="h2" gutterBottom>
              {selectedPatent ? 'Patent Details' : 'Select a patent to view details.'}
            </Typography>
            {selectedPatent ? (
              <PatentDetails patent={selectedPatent} />
            ) : (
              <Typography variant="body1" color="textSecondary">
                Select a patent to view details.
              </Typography>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PatentsPage;
