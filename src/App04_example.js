import React, { Component } from 'react';

import styles from './css/bootstrap.module.css';
// >yarn add classnames 를 설치한 다음에 import 한다 
import classnames from 'classnames';
// styles 에 bind 하는 용도로 사용하는 classnames2 를 import 한다.
import classnames2 from 'classnames/bind';
// styles 를 편하게 쓸수 있도록 
const cx=classnames2.bind(styles);

class App04_example extends Component {
   
    state={
        btnColor:'btn-primary',
        isChecked:false
    }
    onCheckChange=(e)=>{
        //이벤트가 일어난 요소의 checked 값 (true or false) 를 얻어와서 
        const isChecked=e.target.checked;
        //상태값에 반영한다. 
        this.setState({isChecked:isChecked});
    }

    //select 요소가 change 되었을때 호출되는 함수 
    onColorChange=(e)=>{
        //이벤트가 일어난 요소의 value 값을 읽어온다. 
        const selectedColor=e.target.value;
        //상태값을 바꿔줘서 UI 가 업데이트 되도록한다. 
        this.setState({btnColor:selectedColor});
    }
    render() {
        const myBtnStyle=`${styles.btn} ${styles['btn-primary']}`;
        const myBtnStyle2=[styles.btn, styles['btn-success']].join(' ');
        return (
            <div className={styles.container}>
                <h1>모듈화된 css 사용 예제</h1>
                <button className={myBtnStyle}>버튼</button>
                <button className={myBtnStyle2}>버튼</button>
                <button className={classnames(styles.btn, styles["btn-info"])}>버튼</button>
                <button className={cx('btn', 'btn-danger')}>버튼</button>
                <button className={cx('btn', {'btn-warning':true})}>버튼</button>
                <h2>동적으로 class 를 적용하는 예제</h2>
                <select name="color" onChange={this.onColorChange} 
                        value={this.state.btnColor}>
                    <option value="btn-primary">primary</option>
                    <option value="btn-info">info</option>
                    <option value="btn-success">success</option>
                </select>
                <input type="checkbox" checked={this.state.isChecked}
                    onChange={this.onCheckChange}/>
                <br/>
                <button className={cx('btn', this.state.btnColor,{'btn-lg':this.state.isChecked})}>색상이 바뀌는 버튼</button>
            
            </div>
        );
    }
}

export default App04_example;