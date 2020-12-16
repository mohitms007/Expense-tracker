import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    console.log(transactions)
    let balance = 0;
    for (var i=0;i<transactions.length;i++) {
        balance += transactions[i].amount; 
    }
    return (
        <>
            <h4> Your Balance </h4>
            <h1 id="balance"> ${balance} </h1>
        </>
    )
}
 
export default Balance;