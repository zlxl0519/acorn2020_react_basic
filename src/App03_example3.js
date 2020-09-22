import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example3 extends Component {
    //입력한 메세지 목록을 상태값으로 관리
    state={
        msgList:[]
    }
    //아이디를 count 할 필드
    id=0;
    
    //추가 버튼을 눌렀을때 호출되는 함수
    addClicked=()=>{
        //1. 입력한 문자열을 읽어온다.
        const msg=this.inputMsg.value;
        //아이디를 얻어내서 배열에 추가
        this.id++;
        const newList=this.state.msgList.concat({
            id:this.id,
            msg:msg
        });
        this.setState({msgList:newList});
        //4. 입력창 초기화
        this.inputMsg.value="";
        //5. 포커스 주기
        this.inputMsg.focus();
    }

    //자식 컴포넌트에서 삭제 이벤트가 발생했을때 호출되는 함수
    deleteClicked=(id)=>{
        //아이디는 삭제할 메세지의 번호가 된다.

        //msgList 에서 해당 번호를 가지고 있는 아이템을 삭제한 
        //새로운 배열을 얻어낸다.
        //return 값은 true나 false 가 나와서 true면 남겨진다.
        //해당아이템의 id 값을 빼고 나타낸다.(즉 해당아이템값의 id 는 false로 되서 제외된다.)
        const newList=this.state.msgList.filter((item)=>{
            return item.id !== id;
        });
        //UI 가 업데이트 되도록 한다.
        this.setState({msgList:newList});
    }

    render() {
        
        return (
            <div>
                <input type="text" ref={(ref)=>{this.inputMsg=ref}}/>
                <button onClick={this.addClicked}>추가</button>
                <MsgList msgList={this.state.msgList}
                    deleteClicked={this.deleteClicked}/>
            </div>
        );
    }
}

export default App03_example3;