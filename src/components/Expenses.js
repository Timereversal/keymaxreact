import ExpenseItem from "./ExpenseItem";
import Card from './Card';
import './Expenses.css';

function Expenses(props) {


        return (
            <>
            <Card className="expenses">
            {props.lista.map(item => {return(
                <ExpenseItem title={item.title} amount={item.amount} date={item.date}/>
            )})}
            </Card>
        </>);
        
}

export default Expenses;