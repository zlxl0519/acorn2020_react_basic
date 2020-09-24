import React, { Component } from 'react';
import './css/bootstrap.css';

class App05_form2 extends Component {
    state={
        id:'',
        pwd:''
    }
    //input 요소에 변화가 생겼을때 호출되는 함수
    handleChange=(e)=>{
        //input 요소에 적은 name 값을 가져온다.
        const name=e.target.name;//"pwd" 가정
        /*
        const obj={};
        obj[name]=e.target.value; //obj[pwd] pwd 방을 만들어서 value 값을 넣어주는것//1234
        this.setState(obj);//ogj는 {pwd:"1234"} 가 된다.
        */
       this.setState({
           // let a="pwd" {[a]:"1234"} //{pwd:"1234"}
           [name]:e.target.value
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

                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p> 아이디: <strong>{this.state.id}</strong></p>
                <p> 비밀번호: <strong>{this.state.pwd}</strong></p>
            </div>
        );
    }
}

export default App05_form2;