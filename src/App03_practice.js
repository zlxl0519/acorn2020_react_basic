import React, { Component } from 'react';
import TableComponent from './sub/TableComponent';

class App03_practice extends Component {
    state={
        memberList:[]
    }
    //key 값을 필드로 관리한다.
    id=0;

    addClick=()=>{
        //1.입력한 문자열을 읽어온다.
        const name=this.inputName.value;
        const addr=this.inputAddr.value;
        //id 를 얻어낸다.
        this.id++;
        //2. 오브젝트로 입력한 문자들과 아이디값을 넣은것을 배열로 만든다.
        const newMemberList=this.state.memberList.concat({
            id:this.id,
            name:name,
            addr:addr
        });
        //3. 새로만든 배열을 state.memberList 에 반영한다.
        this.setState({memberList:newMemberList});
        //4. 입력창 초기화
        this.inputName.value="";
        this.inputAddr.value="";
        //5.입력창 포커스주기
        this.inputName.focus();
    }

    deleteClick=(id)=>{
        //1. 아이디 값의 것만뺀 새로운 배열을 만든다.
        const newMemberList=this.state.memberList.filter((item)=>{
            return item.id !== id;
        });
        //2. 새로운 배열을 state.memberList 에 반영한다.
        this.setState({memberList:newMemberList});
    }

    render() {
        return (
            <div>
                <input type="text" placeholder="이름입력"
                    ref={(name)=>{this.inputName=name}}/>
                <input type="text" placeholder="주소입력"
                    ref={(addr)=>{this.inputAddr=addr}}/>
                <button onClick={this.addClick}>추가</button>
                <h1>회원 목록 입니다.</h1>
                <TableComponent memberList={this.state.memberList}
                    deleteClick={this.deleteClick}/>
            </div>
        );
    }
}

export default App03_practice;