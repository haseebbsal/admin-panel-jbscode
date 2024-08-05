import React from 'react';
import MUIDataTable from 'mui-datatables';
import { Card, CardContent, Typography } from '@mui/material';

const columns = [
  { name: "Name", options: { filter: true, sort: true } },
  { name: "Position", options: { filter: true, sort: true } },
  { name: "Office", options: { filter: true, sort: true } },
  { name: "Age", options: { filter: true, sort: true } },
  { name: "Start Date", options: { filter: true, sort: true } },
  { name: "Salary", options: { filter: true, sort: true } },
];

const data = [
  ["John Doe", "Software Engineer", "San Francisco", 28, "2019/03/15", "$120,000"],
  ["Jane Smith", "Product Manager", "New York", 32, "2018/05/24", "$140,000"],
  ["John Doe", "Software Engineer", "San Francisco", 28, "2019/03/15", "$120,000"],
  ["Jane Smith", "Product Manager", "New York", 32, "2018/05/24", "$140,000"],
  ["John Doe", "Software Engineer", "San Francisco", 28, "2019/03/15", "$120,000"],
  // Add more data as needed
];

const DataTableComponent: React.FC = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 4, width:"100%" }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Employee Data
        </Typography>
        <MUIDataTable
          title = ""
          data={data}
          columns={columns}
          options={{
            filterType: 'checkbox',
            responsive: 'standard',
            pagination: true,
            selectableRows: 'none',
            download: false,
            print: false,
            viewColumns: false,
            search: false,
            rowsPerPageOptions: [5, 10, 25],
            tableBodyHeight: '400px',
            elevation: 0,
            textLabels: {
              body: {
                noMatch: 'No data available',
                toolTip: 'Sort',
                // columnHeaderTooltip: column => `Sort for ${column.label}`
              },
              pagination: {
                next: 'Next Page',
                previous: 'Previous Page',
                rowsPerPage: 'Rows per page:',
                displayRows: 'of',
              },
              toolbar: {
                search: 'Search',
                downloadCsv: 'Download CSV',
                print: 'Print',
                viewColumns: 'View Columns',
              }
            },
            // customHeadRender: ({ index, label }) => (
            //   <TableCell key={index} style={{ fontWeight: 'bold' }}>
            //     {label}
            //   </TableCell>
            // ),
            // customSort: (data, colIndex, order) => {
            //   const sortedData = [...data].sort((a, b) => {
            //     const valueA = a[colIndex];
            //     const valueB = b[colIndex];
            //     if (order === 'asc') {
            //       return valueA > valueB ? 1 : -1;
            //     } else {
            //       return valueA < valueB ? 1 : -1;
            //     }
            //   });
            //   return sortedData;
            // }
          }}
        />
      </CardContent>
    </Card>
  );
};

export default DataTableComponent;
