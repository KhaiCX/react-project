import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { useEffect } from 'react';
import { Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

//const paginationModel = { page: 0, pageSize: 5 };

function TodoComponent() {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({
        title: '',
        completed: '',
        userId: ''
    })
    const [submitted, setSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;

        setTodo(values => ({
            ...values,
            [name]: value
        }));
    };

    const columns = [
        { field: 'id', headerName: 'ID', flex: 1 },
        { field: 'userId', headerName: 'User ID', flex: 1 },
        { field: 'title', headerName: 'Title', flex: 2 },
        { field: 'completed', headerName: 'Completed', flex: 1 },
        {
            field: 'actions',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <Box>
                    <Button onClick={() => { deleteTodo(params.row.id) }} variant="outlined" startIcon={<DeleteIcon />}>
                        Delete
                    </Button>
                </Box>
            )
        }
    ]

    const handleSubmit = async (e) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });

            if (!response.ok) {
                throw new Error('Wrong!!');
            }

            const result = await response.json();
            console.log('Server response:', result);

            // Reset form & show message
            setTodo({ title: '', completed: '', userId: '' });
            setSubmitted(true);

        } catch (error) {
            console.log('Error submit form: ', error.message);
        }
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then((postsData) => {
                const mappedPosts = postsData.map(todo => ({
                    id: todo.id,
                    userId: todo.userId,
                    title: todo.title,
                    completed: todo.completed
                }));
                setRows(mappedPosts);
                setLoading(false);
            })
    }, []);

    const deleteTodo = (id) => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
            method: 'DELETE',
        });
        setSubmitted(true);
    };

    return (
        <>
            <Box>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1rem' }}>
                            <label>Title:</label>
                            <input
                                type="text"
                                name="title"
                                value={todo.title}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label>Completed:</label>
                            <input
                                type="text"
                                name="completed"
                                value={todo.completed}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            />
                        </div>

                        <div style={{ marginBottom: '1rem' }}>
                            <label>User ID:</label>
                            <input
                                type='number'
                                name="userId"
                                value={todo.userId}
                                onChange={handleChange}
                                required
                                style={{ width: '100%' }}
                            ></input>
                        </div>

                        <button type="submit">Submit</button>
                    </form>

                    {submitted && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
                </div>
            </Box>
            <Paper sx={{ height: 375, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={loading}
                />
            </Paper>
        </>
    );
}

export default TodoComponent;
