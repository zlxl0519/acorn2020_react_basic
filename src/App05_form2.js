import React, { Component } from 'react';
import './css/bootstrap.css';

class App05_form2 extends Component {
    state={
        id:'',
        pwd:'',
        isSave:false //첵크박스의 체크 여부
    }

    //input 요소에 변화가 생겼을때 호출되는 함수
    handleChange=(e)=>{ 
        //이벤트가 일어난 폼요소의 name 속성의 value 얻어오기
        const name=e.target.name;//"pwd" 가정 //"id" or "pwd"or "isSave"
        // value 를 미리 얻어내기 (체크박스인 경우에는 체크 여부를 얻어낸다. 체크박스인경우에는 체크여부 아니면 value 값을 얻어낸다.)
        const value=e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        /*
        const obj={};
        obj[name]=e.target.value; //obj[pwd] pwd 방을 만들어서 value 값을 넣어주는것//1234
        this.setState(obj);//ogj는 {pwd:"1234"} 가 된다.
        */
       //ECMA6 문법을 활용하면 아래와 같이 된다.
       this.setState({
           // let a="pwd" {[a]:"1234"} //{pwd:"1234"}
           [name]:value 
        });
    }
    //폼에 submit 이벤트가 발행했을때 호출되는 함수
    handleSubmit=(e)=>{
        e.preventDefault();
    }
    render() {
        return (
            <div className="container">
                <h1>React form 테스트</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="id">아이디</label>
                        <input type="text" value={this.state.id} onChange={this.handleChange} className="form-control" name="id" id="id"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="text" value={this.state.pwd} onChange={this.handleChange} className="form-control" name="pwd" id="pwd"/>
                    </div>
                    <div className="form-group">
                        <label>
                            <input name="isSave" onChange={this.handleChange} checked={this.state.isSave} type="checkbox" />아이디 저장
                        </label>
                    </div>
                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p> 아이디: <strong>{this.state.id}</strong></p>
                <p> 비밀번호: <strong>{this.state.pwd}</strong></p>
                {/* boolean type 은 그냥 출력해주지 않으므로 String type 으로 변환시켜서 나오게 한다. */}
                <p> 아이디 저장할지 여부 : <strong>{this.state.isSave.toString()}</strong></p>
            </div>
        );
    }
}

export default App05_form2;