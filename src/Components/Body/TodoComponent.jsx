import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';

//const paginationModel = { page: 0, pageSize: 5 };

function TodoComponent() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'userId', headerName: 'User ID', flex: 1 },
        { field: 'title', headerName: 'Title', flex: 5 },
        { field: 'completed', headerName: 'Completed', flex: 1 },
    ]

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then((data) => {
        const mapped = data.map(todo => ({
            id: todo.id,
            userId: todo.userId,
            title: todo.title,
            completed: todo.completed
        }));
        setRows(mapped);
        setLoading(false);
      })
    }, []);
    
  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        //initialState={{ pagination: { paginationModel } }}
        //pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default TodoComponent;
