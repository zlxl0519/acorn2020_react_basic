import React, { Component } from 'react';
import styles from './css/bootstrap.module.css';
// > yarn add classnames를 설치한 다음에 import 한다.
import classnames from 'classnames';
//styles를 편하게 쓸 수 있도록
//const cx=classnames.bind(styles);
// btn-success 는 [] 로 참조를 해야한다.

class App04_example extends Component {
    render() {
        const myBtnStyle=`${styles.btn} ${styles['btn-primary']}`;
        const myBtnStyle2=[styles.btn, styles['btn-success']].join(' ');
        return (
            <div className={styles.container}>
                <h1>모듈화된 css 사용 예제</h1>
                <button className={myBtnStyle}>버튼</button>
                <button className={myBtnStyle2}>버튼2</button>
                <button className={classnames(styles.btn, styles["btn-info"])}>버튼3</button>
            </div>
        );
    }
}

export default App04_example;