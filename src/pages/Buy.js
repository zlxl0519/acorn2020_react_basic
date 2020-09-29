// src/pages/Buy.js
import React from 'react';
import queryString from 'query-string';
/*
    query 문자열을 추출하려면 query-string 모듈을 설치해야 한다.
    > yarn add query-string
*/

const Buy=({location})=>{
    
    //query-string 모듈을 활용해서 query 문자열을 object 로 변환
    const query=queryString.parse(location.search);

    //query 는 object 이다.
    console.log(query);
    return(
        <div>
            <h2>상품 구입 페이지 입니다.</h2>
            <p>{query.num} 번 {query.name} 상품</p>
        </div>
    );
};

export default Buy;
