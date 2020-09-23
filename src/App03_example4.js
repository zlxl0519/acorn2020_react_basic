import React, { Component } from 'react';
import MemberList from './sub/MemberList';
import InputComponent from './sub/InputComponent';

class App03_example4 extends Component {

    //회원의 번호를 카운트할 상태값
    state={
        num:0,
        memberList:[]
    }

    //추가 버튼을 눌렀을때 호출되는 함수(메소드)
    addClicked=(name, addr)=>{
        //회원의 번호
        const num=this.state.num+1;
        this.setState({num: num});
        //회원 한명의 정보를 object 에 담는다. 
        const mem={num:num, name:name, addr:addr};
        //새로운 회원정보를 담은 새 배열을 얻어내서 상태값을 수정해 준다.
        this.setState({memberList: this.state.memberList.concat(mem)});
    }
    //삭제 버튼을 눌렀을때 호출되는 함수 
    deleteClicked=(num)=>{
        const newMemberList=this.state.memberList.filter(
            (item)=>{
                return item.num !== num;
            }
        );
        this.setState({memberList:newMemberList});
    }

    render() {

        return (
            <div>
                <InputComponent addClicked={this.addClicked}/>
                <h1>회원 목록입니다.</h1>
                <MemberList memberList={this.state.memberList}
                    deleteClicked={this.deleteClicked}/>
            </div>
        );
    }
}

export default App03_example4;