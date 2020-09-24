import React, { Component } from 'react';
import style from './my_css/app04_custom.module.css';
import classnames from 'classnames/bind';

// style object 가 bind 된 cx 얻어내기
const cx=classnames.bind(style);

class App04_example2 extends Component {
    state={
        isMake:false,
        isHide:false
    }
    onCheckChange=(e)=>{
        //체크 박스 체크 여부를 얻어와서
        const checked=e.target.checked;
        //state 에 반영한다.
        this.setState({isMake:checked});
    }

    onCheckChange2=(e)=>{
        this.setState({isHide: e.target.checked})
    }
    render() {
        return (
            <div>
                <h1>어떤 요소를 동적으로 만들고 제거하기</h1>
                {/* {} 안에 요소를 만들 수 있다.
                    if 문 대신 사용하는 기호 true 면 && 뒤에꺼가 실행된다.*/}
                <label><input type="checkbox" onChange={this.onCheckChange}
                    value={this.state.isMake} /> box 만들기 </label>
                { this.state.isMake && <div className={cx('box')}>box</div> }
                
                <h1>어떤 요소를 만들어 놓고 css 를 활용해서 보이고 숨기기</h1>
                <label><input type="checkbox" onChange={this.onCheckChange2} 
                    value={this.state.isHide}/>box 숨기기</label>
                <div className={ cx('box',{'hide':this.state.isHide}) }>box</div>
            </div>
        );
    }
}

export default App04_example2;