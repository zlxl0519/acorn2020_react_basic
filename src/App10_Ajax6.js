import React, { useState } from 'react';
// >yarn add query-string 해서 설치후에 사용할수 있다.
import qs from 'query-string';

const App10_Ajax6=()=>{
    
    const [formData, setFormData]=useState({id:'', pwd:''});

    const changed=(e)=>{
        //이벤트가 일어난 input 요소의 name 속성의 값 ( id or pwd ) 읽어오기
        let name=e.target.name;
        //이벤트가 일어난 input 요소에 입력한 value 값
        let value=e.target.value;
        //formData 를 펼쳐놓고 같은 방에 값을 오버라이드 한다고 생각하면 됨.
        //오브젝트 안에 방을 만들고 value 값을 넣는법 : { [방 이름]: value 값 }
        setFormData({
            ...formData,
            [name]: value
        });
    };
    
    const submit=(e)=>{
        //폼 전송 막기 //jquery 에서 return false 하는 것과 같다.
        e.preventDefault();

        fetch("http://localhost:8888/spring05/users/ajax_login.do", {
            method:"POST",
            headers:{"Content-Type":"application/x-www-form-urlencoded"},
            body:qs.stringify(formData)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        .catch(err=>{
            console.log(err);
        });
    };

    return (
        <div>
            <h1>로그인 폼 입니다.</h1>
            <form onSubmit={submit}>
                <input onChange={changed} name="id" type="text" placeholder="아이디..."/>
                <input onChange={changed} name="pwd" type="text" placeholder="비밀번호..."/>
                <button type="submit">로그인</button>
            </form>
            <p>{JSON.stringify(formData)}</p>
            {/* query-string 을 문자열로 바꿔서 보여준다. */}
            <p>{qs.stringify(formData)}</p>
        </div>
    );
};

export default App10_Ajax6