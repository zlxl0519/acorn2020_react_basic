import React, { Fragment, useState } from 'react';

//함수의 인자로 properties 가 전달된다. 
const MyComponent=(props)=>{
    const myName="김구라";
    /*
    const result=useState(0);
    const count=result[0];
    const setCount=result[1];
    */

    //count 는 초기값, setCount 는 count 를 바꿀때 호출하는 함수 
    const [count, setCount]=useState(0);

    return (
        <Fragment>
            <h2>MyComponent 입니다.</h2>
            <p>내이름은 : <strong>{myName}</strong></p>
            <p>부모의 이름은 : <strong>{props.parentName}</strong></p>
            <p>자식의 이름은 : <strong>{props.children}</strong></p>
            <button onClick={()=>{
                setCount(count+1);
            }}>{count}</button>
        </Fragment>
    );
};

export default MyComponent;