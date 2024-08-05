"use client";

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Checkbox,
  FormControlLabel,
  Divider,
  Button,
  IconButton,
  Tooltip,
  TextField,
  useTheme,
} from '@mui/material';
import { CheckCircle, CheckCircleOutline, FilterList, Clear } from '@mui/icons-material';

interface Task {
  name: string;
  completed: boolean;
}

const initialTasks: Task[] = [
  { name: 'Task 1', completed: false },
  { name: 'Task 2', completed: true },
  { name: 'Task 3', completed: false },
  // Add more tasks as needed
];

const TaskList: React.FC = () => {
  const theme = useTheme();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');
  const [newTaskName, setNewTaskName] = useState('');

  const handleCheckboxChange = (index: number) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true; // 'all'
  });

  const handleFilterChange = (newFilter: 'all' | 'completed' | 'pending') => {
    setFilter(newFilter);
  };

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      setTasks([...tasks, { name: newTaskName, completed: false }]);
      setNewTaskName('');
    }
  };

  const handleRemoveTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, overflow: 'hidden' }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Task List
        </Typography>
        <Box mb={2} display="flex" gap={1}>
          <Button
            variant={filter === 'all' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('all')}
            startIcon={<FilterList />}
            sx={{ flex: 1 }}
          >
            All
          </Button>
          <Button
            variant={filter === 'completed' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('completed')}
            startIcon={<CheckCircle />}
            sx={{ flex: 1 }}
          >
            Completed
          </Button>
          <Button
            variant={filter === 'pending' ? 'contained' : 'outlined'}
            onClick={() => handleFilterChange('pending')}
            startIcon={<CheckCircleOutline />}
            sx={{ flex: 1 }}
          >
            Pending
          </Button>
        </Box>
        <Divider />
        <Box mt={2}>
          {filteredTasks.length === 0 ? (
            <Typography variant="body2" color="textSecondary">
              No tasks available.
            </Typography>
          ) : (
            filteredTasks.map((task, index) => (
              <Box
                key={index}
                display="flex"
                alignItems="center"
                mb={1}
                p={1}
                bgcolor={task.completed ? theme.palette.success.light : theme.palette.grey[100]}
                borderRadius={1}
                sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: theme.palette.grey[200] } }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(index)}
                      sx={{ color: theme.palette.primary.main }}
                    />
                  }
                  label={task.name}
                />
                <Tooltip title="Remove Task">
                  <IconButton
                    color="error"
                    onClick={() => handleRemoveTask(index)}
                  >
                    <Clear />
                  </IconButton>
                </Tooltip>
              </Box>
            ))
          )}
        </Box>
        <Box mt={2} display="flex" alignItems="center" gap={1}>
          <TextField
            variant="outlined"
            placeholder="New task"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
            sx={{ flex: 1 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTask}
            sx={{ height: '100%' }}
          >
            Add Task
          </Button>
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            {filteredTasks.length} task{filteredTasks.length > 1 ? 's' : ''} remaining
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskList;
