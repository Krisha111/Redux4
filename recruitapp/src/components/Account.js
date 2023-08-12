import React, { useState } from 'react'


export default function Account(){
    const [account,setAccount]=useState({amount:100})

    const incre=()=>{
        setAccount({amount:account.amount+1})
    }
    const decre=()=>{
        setAccount({amount:account.amount-1})
    }
    const increByAmt=(value)=>{
        setAccount({amount:account.amount+value})
    }
    return(
        <div>
            <h1>Account Component</h1>
            <h3>Current amount :  {account.amount}</h3>
            {/* //the function will be on onclick which is function of button */}
             <button onClick={incre}>Increase</button>
             <button onClick={decre}>Decrease</button>
             {/* <button onClick={increByAmt(2)}>increByAmt</button> */}
        </div>
    )
}