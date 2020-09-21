import React, { Component } from 'react';

class App03_example extends Component {
    state={
        index:0,
        msgs:[]
    };

    handleKeyUp=(e)=>{
        //눌러진 키의 코드값
        console.log(e.keyCode);
        //input 요소에 입력한 value 값
        console.log(e.target.value);
        if(e.keyCode == 13){ //엔터키를 눌렀을때
            let content=(<li key={this.state.index}>{e.target.value}</li>);
            this.setState({index: this.state.index+1});
            //기존의 배열에 아이템을 추가해서 새로운 배열을 만들어내기
            let result=this.state.msgs.concat(content);
            //새로운 배열을 state 에 적용해서 UI 가 수정되도록 한다.
            this.setState({msgs:result});
        }
    }

    render() {
        return (
            <div>
                <h1>목록 출력 예제 입니다.</h1>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <ul>{this.state.msgs}</ul>
            </div>
        );
    }
}

export default App03_example;