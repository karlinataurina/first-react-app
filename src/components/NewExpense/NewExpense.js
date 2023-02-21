import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    // Starting state is "false" which means the form is hidden by default:
    // *isEditing false* means "are you editing right now? - no. Ok, so form is hidden."
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //console.log(expenseData);
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    // Sets "isEditing" to true. When "Add new expense" button is clicked, it shows form:
    const startEditingHandler = () => {
        setIsEditing(true);
    };

    /* Stops editing a form & doesn't submit it;
    We trigger this function when user clicks on Cancel button from ExpenseForm.js;
    We point at this function in the ExpenseForm in this file's return statement below,
    stopEditingHandler function is passed as a value to the onCancel prop in the ExpenseForm component */
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
    <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add new expense</button>} {/* we want to show the button & hide form when we're not editing the form, so the form appears when this button is clicked */}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />} {/* we want to hide the button & show form when the "Add new expense" button is clicked. */}
    </div>
    );
};

export default NewExpense;