import React from 'react';
import './css/bootstrap.css';

const App10_Ajax=()=>{

    const [cafeList, setList]=React.useState([]);

    const request=()=>{
        /*
        fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
        .then(function(res){ //성공시 여기 수행
            return res.json(); //결과 Promise 객체를 리턴해준다.
        })
        .then(function(data){
            console.log(data);
        })
        .catch(function(err){//실패시 여기 수행
            console.log(err);
        });
        */
        //fetch 는 promise 기반이다.
       fetch("http://localhost:8888/spring05/cafe/ajax_list.do")
       .then(res=>{ //res 는 promise 객체의 안에 있는 데이터를 json으로 변환해서 넣는다. 
           res.json();
           console.log(res);
        })
       .then(data=>{
           console.log(data);
           const result=data.list.map((item)=>{
               return(
                   <tr key={item.num}>
                       <td>{item.num}</td>
                       <td>{item.title}</td>
                       <td>{item.writer}</td>
                   </tr>
               );
           });
           setList(result);
        })
       .catch(err=>{
           console.log(err);
        });
    };

    return(
        <div className="container">
            <h1>ajax 요청 테스트</h1>
            <button onClick={request}>요청하기</button>
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {cafeList}
                </tbody>

            </table>
        </div>
    );
};

export default App10_Ajax;