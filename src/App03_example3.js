import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example3 extends Component {
    //입력한 메세지 목록을 상태값으로 관리
    state={
        list:[]
    }
    //아이디를 count 할 필드 
    id=0;
    //메세지 데이터를 담을 필드 
    msgList=[];

    //추가 버튼을 눌렀을때 호출되는 함수 
    addClicked=()=>{
        //1. 입력한 문자열을 읽어온다.
        const msg=this.inputMsg.value;
        //아이디를 얻어내서 배열에 추가 
        this.id++;
        this.msgList.push({
            id:this.id,
            msg:msg
        });
        const newList=this.msgList.map((item)=>{
            return (
                <li key={item.id}>{item.msg}</li>
            );
        });
        this.setState({list:newList});
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

export default App03_example3;