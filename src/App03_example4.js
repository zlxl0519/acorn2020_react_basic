import React, { Component } from 'react';

class App03_example4 extends Component {

    //회원의 번호를 카운트할 상태값
    state={
        num:0,
        memberList:[]
    }

    //추가 버튼을 눌렀을때 호출되는 함수(메소드)
    addClicked=()=>{
        //입력한 이름
        const name=this.inputName.value;
        //입력한 주소
        const addr=this.inputAddr.value;
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

    //데이터 [{},{},{}] 이런식으로 들어있는 데이터를 jsx 형식으로 바꿔서 
    //jsx_memberList 에 넣어주는 형식
    render() {
        const jsx_memberList=this.state.memberList.map(
            (item)=>{
                return (
                    //jsx 문법을 적기 위해 return () 괄호가 필요
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.name}</td>
                        <td>{item.addr}</td>
                        <td><button onClick={()=>{
                            //함수 호출하면서 삭제할 번호를 전달한다.
                            //함수 안에서만 함수를 호출해서 인자로 값을 전달할수 있다.
                            this.deleteClicked(item.num);
                        }}>삭제</button></td>
                    </tr>
                );
            }
        );
        return (
            <div>
                <input ref={(ref)=>{this.inputName=ref;}} type="text" placeholder="이름 입력..."/>
                <input ref={(ref)=>{this.inputAddr=ref;}} type="text" placeholder="주소 입력..."/>
                <button onClick={this.addClicked}>추가</button>
                <h1>회원 목록입니다.</h1>
                <table>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>주소</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jsx_memberList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App03_example4;