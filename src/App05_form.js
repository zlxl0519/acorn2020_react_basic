import React, { Component } from 'react';
import './css/bootstrap.css';

class App05_form extends Component {
    state={
        msg:'',
        isMake:true
    }
    //폼 전송 이벤트가 발생했을때 호출되는 함수 
    handleSubmit=(e)=>{
        //page가 새로고침되는것을 방지 하기 위해 
        //이벤트 객체의 preventDefault() 함수를 호출해서 
        //기본동작(폼제출)을 막아 준다.
        e.preventDefault();

        alert("입력한 메세지:"+this.state.msg+" 를 전송합니다.");
    }
    handleChange=(e)=>{
        //입력한 value 값 
        const msg=e.target.value;
        this.setState({msg:msg});
    }
    render() {
        return (
            <div className="container">
                <h1>React 에서 form 요소</h1>
                <label>
                    <input type="checkbox" onChange={
                        (e)=>{
                            this.setState({isMake: !e.target.checked});
                        }
                    }/>
                    폼 없애기
                </label>
                <br/>
                { this.state.isMake && 
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            메세지 입력
                            <input type="text" 
                                onChange={this.handleChange}
                                value={this.state.msg}/>
                        </label>
                        <button type="submit">전송</button>
                    </form>
                }
            </div>
        );
    }
}

export default App05_form;