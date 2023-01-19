import ExpenseDate from './ExpenseDate.js';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}$</div>
                {/* <div className="expense-item__price">Amount: {Math.random()}$</div> */}
            </div>
        </Card>
    );
}

export default ExpenseItem;