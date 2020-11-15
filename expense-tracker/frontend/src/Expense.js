import React from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';

function Expense(){
    return (
        <>
            <ExpenseForm /><br/>
            <ExpenseList />
        </>
    );
}

export default Expense;