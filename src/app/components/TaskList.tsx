// src/components/TaskList.tsx

"use client";

import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Checkbox, FormControlLabel, Divider, Button } from '@mui/material';

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
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<'all' | 'completed' | 'pending'>('all');

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

  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        {/* <Typography variant="h6" gutterBottom>
          Task List
        </Typography> */}
        <Box mb={2}>
          <Button variant="contained" onClick={() => handleFilterChange('all')}>
            All
          </Button>
          <Button variant="contained" onClick={() => handleFilterChange('completed')} sx={{ ml: 1 }}>
            Completed
          </Button>
          <Button variant="contained" onClick={() => handleFilterChange('pending')} sx={{ ml: 1 }}>
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
              <Box key={index} display="flex" alignItems="center" mb={1}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={task.completed}
                      onChange={() => handleCheckboxChange(index)}
                    />
                  }
                  label={task.name}
                />
              </Box>
            ))
          )}
        </Box>
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary">
            {filteredTasks.length} task(s) remaining
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskList;
