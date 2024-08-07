// src/pages/PatentDetailsPage.tsx
"use client";

import React from 'react';
import { Container, Box } from '@mui/material';
import DetailsHeader from '../components/DetailsHeader';
import PatentDetailsCard from '../components/PatentDetailsCard';
import CitationList from '../components/CitationList';

const patentDetailsData = {
  id: "US20080149005A1",
  title: "Pallet for shipping and displaying of packaged goods",
  abstract: "A pallet for shipping and displaying of packaged goods wherein the pallet comprises a plurality of stacking feet joined together by angled ribs to substantially prevent or inhibit spreading of the stacking feet due to high weight loads...",
  filingDate: "2008-06-26",
  inventors: ["Edward L. Stahl", "Stanley Charles Ellington", "Brent Clyde Mizell", "Travis Truman Crane", "Ira Donovan Youmans", "John P. Barry"],
  assignees: ["Coca Cola Bottling Company United Inc"],
  legalStatus: "Active",
  citations: [
    { id: "US1963360A", title: "Brush", priorityDate: "1932-06-18", publicationDate: "1934-06-19", assignee: "Floyd E Gibbin" },
    { id: "DE502004004880D1", title: "TRANSPORT PALETTE OF PLASTIC", priorityDate: "2004-01-18", publicationDate: "2007-10-18", assignee: "Siopal Corp" },
    { id: "US3359929A", title: "Molded pallet", priorityDate: "1966-04-18", publicationDate: "1967-12-26", assignee: "Fibers Inc" },
    { id: "US3424110A", title: "Pallet", priorityDate: "1967-02-03", publicationDate: "1969-01-28", assignee: "William W Toot" },
    { id: "US3611952A", title: "Molded pallet", priorityDate: "1969-12-09", publicationDate: "1971-10-12", assignee: "Mansfield Tire And Rubber Co T" },
    { id: "US3630157A", title: "Pallet", priorityDate: "1969-02-06", publicationDate: "1971-12-28", assignee: "Ture Janneson Ortenblad" },
    { id: "US3680495A", title: "Pallet structure", priorityDate: "1970-10-12", publicationDate: "1972-08-01", assignee: "Hi Line Plastics Inc" },
    { id: "US3699901A", title: "Pallet", priorityDate: "1970-07-23", publicationDate: "1972-10-24", assignee: "Oakland Plastics Corp" },
    { id: "US3702100A", title: "Molded pallet", priorityDate: "1971-04-05", publicationDate: "1972-11-07", assignee: "Menasha Corp" },
    { id: "US3910204A", title: "Structural foam skid", priorityDate: "1974-06-20", publicationDate: "1975-10-07", assignee: "Evans Prod Co" },
    { id: "US4061090A", title: "Plastic pallet", priorityDate: "1976-06-10", publicationDate: "1977-12-06", assignee: "Heckethorn Manufacturing Co." },
    { id: "US4735321A", title: "Mobile extra display module", priorityDate: "1986-05-02", publicationDate: "1988-04-05", assignee: "The Coca-Cola Company" },
    { id: "US4809618A", title: "Plastic pallet", priorityDate: "1988-03-21", publicationDate: "1989-03-07", assignee: "Bell Joseph P" },
    { id: "US4838176A", title: "Nesting and stacking pallet", priorityDate: "1988-08-24", publicationDate: "1989-06-13", assignee: "Bowser Pallet Co." },
    { id: "US4865202A", title: "Mobile extra display module", priorityDate: "1986-05-02", publicationDate: "1989-09-12", assignee: "The Coca-Cola Company" }
  ]
};

const PatentDetailsPage: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <DetailsHeader title={patentDetailsData.title} abstract={patentDetailsData.abstract} />
      <Box sx={{ mb: 4 }}>
        <PatentDetailsCard
          filingDate={patentDetailsData.filingDate}
          inventors={patentDetailsData.inventors}
          assignees={patentDetailsData.assignees}
          legalStatus={patentDetailsData.legalStatus}
        />
        <CitationList citations={patentDetailsData.citations} />
      </Box>
    </Container>
  );
};

export default PatentDetailsPage;
