//import 된 React와 React.Component 도 import 한다는 뜻
import React,{Component} from 'react';
//이미지 경로를 import 해서 사용한다.
import logo from './logo.svg';
import kim from './images/kim1.png';
//css 파일을 import 만 해도 css 가 자동 적용된다.
import './css/bootstrap.css';
import './App.css';
//외부 파일로 작성된 컴포넌트 import 하기 import 다음에 적혀있는 이름은 맘대로 작성가능
import MyComponent from './MyComponent';

//class 표현식으로 App 구성하기
class App extends Component {
  //App.js 를 이용해서 화면 구성을 할때 호출되는 메소드
  render() {
    const myName="김구라";
    //true or false 로 바꿔 가면서 테스트 해 보세요.
    const isMan=true;
    // 요소에 적용할 인라인 css 를 object 로 정의하고 적용할수 있다.
    const boxStyle={
      width:"100px",
      height: "100px",
      border:"1px solid red",
      backgroundColor:"yellow"//여러단어로 구성된 속성은 camel case 를 사용(background-color 안됨)
    };
    return (
      <div className="container">
        {/* class 는 예약어이기 때문에 className 을 사용한다. */}
         <h1>Hello React!</h1>
        <p>내이름은 <strong>{myName}</strong></p>
        <img src={logo} alt="react js 로고 입니다."/>
        <img src={kim} alt="김구라 이미지"/>
        
        {/* 3항 연산자 true면 남자가 false 면 여자가 나옴
            if (){}else{} 문을 대신해서 3항 연산자가 사용된다. */}
        <p>당신은 {isMan ? "남자" : "여자"} 이군요</p>

        {/* isMan 이 true 면 출력하고 false 면 출력 안함. 
            if 문 대신 사용*/}
        <p>{isMan && "당신은 남자 이군요"}</p>

        {/* 
          [이벤트 처리]

          onEventName={ 화살표 함수 }

          처럼 on 다음에 이벤트명을 camel case(첫글자를 대문자로) 로 작성을 한다.
          화살표 함수는 해당이벤트가 발생하면 자동으로 호출된다.
          예) onClick, onMouseOver, onChange, onInput, onKeyDown, onFocus...
        */}
        <button className="btn btn-outline-primary" onClick={()=>{
          alert("버튼을 눌렀네요?");
        }}>
          눌러봐
        </button>

        {/* style 을 직접 작성해서 사용 불가 
            style 은 object 로 만들어서 변수에 담아서 사용가능 */}
        <div style={boxStyle}>box</div>

        {/* 
            다른 Component(자식 component) 를 포함 시킬수 있다. 
            기능들을 나눠서 Component 를 만들어서
            재사용할 것들은 재사용할수 있다.

            문자열을 제외하고는 전달할때는 { } 안에 쓴다.
        */}
        <MyComponent title="컴포넌트1" num={1000}/>
        <MyComponent title="컴포넌트2" num={2000}/>
        <MyComponent/>
      </div>
    );
  }
}

export default App;

//함수 표현식
/*function App() {
  const myName="김구라";
  return (
    <div>
      <h1>Hello React!</h1>
      <p>내이름은 <strong>{myName}</strong></p>
      <img src={logo} alt="react js 로고 입니다."/>
    </div>
  );
}


export default App;*/
