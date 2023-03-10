import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React!');

    //let title = props.title;

    /* Changes the item text[title] when clicked on this button: */
    // const clickHandler = () => {
    //     // console.log('Clicked!');
    //     //title = "Updated!";
    //     setTitle('Updated!!!');
    //     console.log(title);
    // };

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    {/* <h2>{props.title}</h2> */<h2>{title}</h2>}
                    <div className="expense-item__price">{props.amount}$</div>
                    {/* <div className="expense-item__price">Amount: {Math.random()}$</div> */}
                </div>
                {/*<button onClick={clickHandler}>Change Title</button>*/}
            </Card>
        </li>
    );
};

export default ExpenseItem;