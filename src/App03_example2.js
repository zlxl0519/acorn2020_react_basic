import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example2 extends Component {
    //입력한 메세지 목록을 상태값으로 관리
    state={
        id:0,
        list:[]
    }
    //추가 버튼을 눌렀을때 호출되는 함수 
    addClicked=()=>{
        //1. 입력한 문자열을 읽어온다.
        const msg=this.inputMsg.value;
        //2. this.state.list 에 반영한다.
        //this.state.list.push((<li>{msg}</li>));
        //2. 기존의 list 에 새로운 아이템을 추가해서 새로운 배열을 얻어낸다.
        this.setState({id: this.state.id + 1});
        const newList=this.state.list.concat((<li key={this.state.id}>{msg}</li>));
        //3. this.setState() 를 호출해서 UI 가 업데이트 되도록 한다.
        this.setState({list: newList});
        //4. 입력창 초기화
        this.inputMsg.value="";
        //5. 포커스 주기
        this.inputMsg.focus();
    }

    render() {
        
        return (
            <div>
                <input ref={(ref)=>{this.inputMsg=ref;}} type="text"/>
                <button onClick={this.addClicked}>추가</button>
                <MsgList list={this.state.list}/>
            </div>
        );
    }
}

export default App03_example2;