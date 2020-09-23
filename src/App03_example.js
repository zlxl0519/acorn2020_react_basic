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
    //전송 버튼을 눌럿을때 호출되는 함수 
    handleClick=()=>{
        //입력한 문자열
        let msg=this.inputText.value;
        let content=(<li key={this.state.index}>{msg}</li>);
            this.setState({index: this.state.index+1});
        //기존의 배열에 아이템을 추가해서 새로운 배열을 만들어내기
        let result=this.state.msgs.concat(content);
        //새로운 배열을 state 에 적용해서 UI 가 수정되도록 한다.
        this.setState({msgs:result});
    }
    render() {
        return (
            <div>
                <h1>목록 출력 예제 입니다.</h1>
                <input ref={
                    //함수의 인자로 input 요소의 참조값이 전달된다.
                    //전달된 참조값을 필드에 inputText 라는 키값으로 저장한다.
                    (ref)=>{this.inputText=ref}
                } type="text" onKeyUp={this.handleKeyUp}/>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <input type="text" onKeyUp={this.handleKeyUp}/>
                <button onClick={this.handleClick}>전송</button>
                <ul>{this.state.msgs}</ul>
            </div>
        );
    }
}

export default App03_example;