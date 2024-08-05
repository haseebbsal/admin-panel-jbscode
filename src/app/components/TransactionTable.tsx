import React, { useState } from 'react';
import { Card, CardContent, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TableSortLabel, TablePagination, Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

interface Transaction {
  date: string;
  description: string;
  amount: string;
  status: string;
}

const transactions: Transaction[] = [
  { date: '2023-08-01', description: 'Sale', amount: '$150', status: 'Completed' },
  { date: '2023-08-02', description: 'Refund', amount: '-$50', status: 'Pending' },
  { date: '2023-08-03', description: 'Purchase', amount: '$200', status: 'Completed' },
  { date: '2023-08-04', description: 'Fee', amount: '-$20', status: 'Failed' },
  { date: '2023-08-06', description: 'Sale', amount: '$200', status: 'Completed' },
  // Add more transactions as needed
];

const TransactionTable: React.FC = () => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<keyof Transaction>('date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (property: keyof Transaction) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (orderBy === 'amount') {
      return (parseFloat(a[orderBy].replace('$', '').replace(',', '')) - parseFloat(b[orderBy].replace('$', '').replace(',', ''))) * (order === 'asc' ? 1 : -1);
    }
    return (a[orderBy].localeCompare(b[orderBy])) * (order === 'asc' ? 1 : -1);
  });

  const paginatedTransactions = sortedTransactions.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <Card sx={{ borderRadius: 2, boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', mb: 4 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Recent Transactions
        </Typography>
        {/* add empty box */}
        <Box sx={{ height: 74, width: '100%' }} />
        <TableContainer component={Paper} sx={{ borderRadius: 1 }}>
          <Table sx={{ minWidth: 650 }} aria-label="transaction table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <TableSortLabel
                    active={orderBy === 'date'}
                    direction={orderBy === 'date' ? order : 'asc'}
                    onClick={() => handleRequestSort('date')}
                    sx={{ color: '#000', fontWeight: 'bold' }}
                  >
                    Date
                    {orderBy === 'date' ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    Description
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'amount'}
                    direction={orderBy === 'amount' ? order : 'asc'}
                    onClick={() => handleRequestSort('amount')}
                    sx={{ color: '#000', fontWeight: 'bold' }}
                  >
                    Amount
                    {orderBy === 'amount' ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
                <TableCell align="right">
                  <TableSortLabel
                    active={orderBy === 'status'}
                    direction={orderBy === 'status' ? order : 'asc'}
                    onClick={() => handleRequestSort('status')}
                    sx={{ color: '#000', fontWeight: 'bold' }}
                  >
                    Status
                    {orderBy === 'status' ? (
                      <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                      </Box>
                    ) : null}
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedTransactions.map((transaction, index) => (
                <TableRow key={index} sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}>
                  <TableCell>{transaction.date}</TableCell>
                  <TableCell>{transaction.description}</TableCell>
                  <TableCell align="right">{transaction.amount}</TableCell>
                  <TableCell align="right" sx={{ color: getStatusColor(transaction.status), fontWeight: 'bold' }}>
                    {transaction.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={transactions.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ mt: 2 }}
        />
      </CardContent>
    </Card>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return '#4caf50'; // Green
    case 'Pending':
      return '#ff9800'; // Orange
    case 'Failed':
      return '#f44336'; // Red
    default:
      return '#000'; // Black
  }
};

export default TransactionTable;
