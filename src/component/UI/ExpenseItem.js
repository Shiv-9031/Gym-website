
function ExpenseItem(props){
    return(
        <div className="mainDiv">
            <div className="date-column">
                {props.data.date}
            </div>
            <div className="title-column">
                {props.data.title}
            </div>
            <div className="Expense-column">
                {props.data.expense}
            </div>
            <div className="id-column">
                {props.data.id}
            </div>

        </div>
    );
}
export default ExpenseItem;