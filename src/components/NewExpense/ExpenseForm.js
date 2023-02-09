import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    /* MULTIPLE STATE CONCEPT: */
    const [enteredTitle, setEnteredTitle] = useState("");
    /* we set the state for the title input field.
    initially it's an empty string, but then we use destructuring to
    get our 2 elements which are [currently entered title and
    a function for updating the state] */
    const [enteredAmount, setEnteredAmount] = useState(""); /* same here for amount */
    const [enteredDate, setEnteredDate] = useState(""); /* same here for date */

    /* ONE STATE CONCEPT: calling useState only once & passing in an object as a value
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        enteredDate: ""
    }); */

    const titleChangeHandler = (event) => {
        //console.log(event.target.value);<=with this we get each pressed key in console right away
        setEnteredTitle(event.target.value);/* here when we react to the event where
        the user enters something, we call the "setEnteredTitle" function & pass
        event.target.value[which is the currently entered value] as
        a parameter/argument to this function. This will be stored in our state. */

        /* FOR ONE STATE CONCEPT:
        setUserInput({
           ...userInput,
           enteredTitle: event.target.value,
        });

        UPDATING STATE THAT DEPENDS ON THE PREVIOUS STATE:
        setUserInput((previousState) => {
                return { ... previousState, enteredTitle: event.target.value };
        }); */
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value); /* same here */

        /* FOR ONE STATE CONCEPT:
        setUserInput({
            enteredAmount: event.target.value,
        }) */
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value); /* same here */

        /* FOR ONE STATE CONCEPT:
        setUserInput({
            enteredDate: event.target.value,
        })*/
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        //console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
    );
};

export default ExpenseForm;