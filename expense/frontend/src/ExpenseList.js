import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ExpenseList.css';

function ExpenseList(){
    const [expenseListTableRows, setExpenseListTableRows] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/getAllExpenses")
        .then(response => response.json())
        .then(data => setExpenseListTableRows(data));
    }, []);

    const deleteExpense = (event, id) => {
        event.preventDefault();
        fetch("http://localhost:8080/api/deleteExpense/"+id,{
            method: "DELETE"
        })
        .then(alert("Deleted Successfully"))
        .then(window.location.reload());
    }

    return (
        <div className="expenseList">
            <h2>Expense List</h2>
            <TableContainer component={Paper}>
                <Table className="expenseListTable" aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell><strong>Description</strong></TableCell>
                        <TableCell align="right"><strong>Location</strong></TableCell>
                        <TableCell align="right"><strong>Date</strong></TableCell>
                        <TableCell align="right"><strong>Category</strong></TableCell>
                        <TableCell align="right"><strong>Amount($)</strong></TableCell>
                        <TableCell align="right"><strong>Action</strong></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {expenseListTableRows.map((row) => (
                        <TableRow key={row.description}>
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="right">{row.location}</TableCell>
                            <TableCell align="right">{row.expenseDate}</TableCell>
                            <TableCell align="right">{row.category.name}</TableCell>
                            <TableCell align="right">{row.amount}</TableCell>
                            <TableCell align="right">
                                <Button
                                variant="contained"
                                color="secondary"
                                onClick={event => deleteExpense(event, row.id)}>
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default ExpenseList;