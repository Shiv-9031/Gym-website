
import './App.css';
// import NewExpense from './component/NewExpense/NewExpense';
import React,{useState} from 'react';
// import ExpenseItem from './component/UI/ExpenseItem';
import First from './component/shiv/first';

function App() {
 
//   const [ExpenseDetail,setExpentseitem]=useState();
//   const Expense=(receivedExpensedData)=>{
//     setExpentseitem(receivedExpensedData);
//   }
//   let ExpenseItemDetail=[
//     {
//       title:'food',
//       amount:200,
//       date:'20 sept 2022'
//     }
//   ];
  
//    ExpenseItemDetail=[ExpenseDetail,...ExpenseItemDetail];
   
//    console.log(ExpenseItemDetail)
//   return(
//         <div>
//            <NewExpense  onAddExpensedData={Expense}/> 
//            <ExpenseItem  data={ExpenseItemDetail }/>
//          </div>  
//  );
    
return(

  <div>
    <First />
  </div>
);
}

export default App;
