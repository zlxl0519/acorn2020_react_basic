import React, { Fragment, useState } from 'react';

//함수의 인자로 properties 가 전달된다.
const MyComponent=(props)=>{
    const myName="김구라";
    /*
    const result=useState(0); //인자로 전달한것과 함수가 배열에 들어가 있는형태 [인자값, 함수]
    const count=result[0];
    const setCount=result[1];
    */
   /* let obj= {num:1, name:"kim"} 
        const{num ,name}=obj  num 에 1이 들어가고 name 에 "kim"이 들어감
        배열도 마찬가지
    */
    
    //count 는 초기값(useState(이부분값)), setCount 는 count 를 바꿀때 호출하는 함수
    const [count, setCount]=useState(0);
    //let count=0;

    return(
        <Fragment>
            <h2>MyComponent 입니다.</h2>
            <p>내이름은: <strong>{myName}</strong></p>
            <p>부모의 이름은: <strong>{props.parentName}</strong></p>
            <p>자식의 이름은: <strong>{props.children}</strong></p>
            <button onClick={()=>{
                // 위에 useState 에 안에 있는 변수값들을 참조하는것과 마찬가지
                setCount(count+1);
                //count=count+1; 올라가긴하나 반영은 안된다.
            }}>{count}</button>
        </Fragment>
    );
};

export default MyComponent;