import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    let title = props.title;

    const clickHandler = () => {
        // console.log('Clicked!');
        title = "Updated!";
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                {/* <h2>{props.title}</h2> */<h2>{title}</h2>}
                <div className="expense-item__price">{props.amount}$</div>
                {/* <div className="expense-item__price">Amount: {Math.random()}$</div> */}
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;