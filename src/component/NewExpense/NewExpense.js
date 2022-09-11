import React from 'react';

import './NewExpense.css';
import ExpenseForm from './ExpenseForm'; 

const NewExpense=(props)=>{
    
    const SaveExpenseDataHandler=(enteredExpenseData)=>{
        const ExpenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpensedData(ExpenseData);
        console.log(ExpenseData);
    }
    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpensData={SaveExpenseDataHandler}/>
        </div>
    );
}
export default NewExpense;