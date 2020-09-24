import React, { Component } from 'react';
import './css/bootstrap.css';

class App05_form2 extends Component {
    state={
        id:'',
        pwd:''
    }
    //input 요소에 변화가 생겼을때 호출되는 함수 
    handleChange=(e)=>{
        const name=e.target.name; //"id" or "pwd" 
        /*
        const obj={};
        obj[name]=e.target.value; //"1234"
        this.setState(obj);
        */

        //ECMA6 문법을 활용하면 아래와 같이 된다. 
        this.setState({
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
                        <input type="text" value={this.state.id} onChange={this.handleChange} className="form-control" name="id" id="id" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pwd">비밀번호</label>
                        <input type="text" value={this.state.pwd} onChange={this.handleChange} className="form-control" name="pwd" id="pwd" />
                    </div>
                    <button className="btn btn-primary" type="submit">로그인</button>
                </form>
                <p> 아이디 : <strong>{this.state.id}</strong></p>
                <p> 비밀번호 : <strong>{this.state.pwd}</strong></p>
            </div>
        );
    }
}

export default App05_form2;