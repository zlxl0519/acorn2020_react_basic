import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from './my_css/app04_custom.module.css';
const cx=classnames.bind(styles);

class App04_example3 extends Component {
    //x 축 평행이동 값을 상태값으로 관리 한다.
    state={
        x:0
    }
    //버튼을 누를때 마다
    boxClicked=()=>{
        //x 값을 100 증가 시킨다.
        this.setState({x: this.state.x+100})
    }
    //더블 클릭할때
    boxDoubleClicked=()=>{
        this.setState({x:0});
    }

    render() {
        const boxStyle={
            transform:`translateX(${this.state.x}px)`
        };
        return (
            <div>
                <h1>움직이는 박스</h1>
                <div style={boxStyle} 
                onClick={this.boxClicked}
                onDoubleClick={this.boxDoubleClicked} 
                className={cx('box','transition-effect')}>box</div>
            </div>
        );
    }
}

export default App04_example3;