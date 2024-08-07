import React, { ChangeEvent, KeyboardEvent } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      label="Search Patents"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      size="small"
      sx={{ 
        borderRadius: 1, 
        backgroundColor: '#f5f5f5', 
        '& .MuiOutlinedInput-root': { 
          borderRadius: 1, 
        },
        '& .MuiOutlinedInput-input': { 
          padding: '10px 14px', 
        }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <IconButton edge="start" color="primary">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
