import React, { Component } from 'react';
// bootstrap css 로딩하기
import './css/bootstrap.css';

class App02 extends Component {
    //상태값 정의하기
    state={
        info:"x:0 y:0",
        info2:"x:0 y:0",
        info3:"x:0 y:0"
        
    }
    //mouse move 이벤트 처리
    handleMouseMove=(e)=>{
        //original 이벤트 객체에는 offsetX, offsetY 가 있다.
        //.nativeEvent 는 원래 이벤트 객체이다. 평소사용하던 이벤트 메소드가 있다.
        console.log(e.nativeEvent);
        let info3=`x:${e.nativeEvent.offsetX} y:${e.nativeEvent.offsetY}`;
        this.setState({info3:info3});
    }

    render() {
        //요소에 적용할 인라인 css 를 object 로 작성한다.
        const boxStyle={
            width:"300px",
            height:"300px",
            border:"1px solid red",
            backgroundColor:"yellow"
        }
        return (
            <div className="container">
                <h1>App02 입니다.</h1>
                <div style={boxStyle} onMouseMove={
                    /*이벤트를 e 로 인자로 받아서 사용한다. */
                    (e)=>{
                        //e 는 마우스 이벤트 객체
                        let info=`x:${e.clientX} y:${e.clientY}`;
                        console.log(info);
                        this.setState({info:info});
                    }
                }></div>
                <p>{this.state.info}</p>
                <div style={boxStyle} onMouseMove={
                    (e)=>{
                        //original 이벤트 객체에는 offsetX, offsetY 가 있다.
                        //.nativeEvent 는 원래 이벤트 객체이다. 평소사용하던 이벤트 메소드가 있다.
                        console.log(e.nativeEvent);
                        let info2=`x:${e.nativeEvent.offsetX} y:${e.nativeEvent.offsetY}`;
                        this.setState({info2:info2});
                    }
                }></div>
                <p>{this.state.info2}</p>
                <div style={boxStyle} onMouseMove={this.handleMouseMove}></div>
                <p>{this.state.info3}</p>
            </div>
        );
    }
}

export default App02;