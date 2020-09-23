import React, { Component, Fragment } from 'react';

class InputComponent extends Component {
    render() {
        return (
            //jsx 를 감싸주는 Fragment
            <Fragment>
                <input ref={(ref)=>{this.inputName=ref;}} type="text" placeholder="이름 입력..."/>
                <input ref={(ref)=>{this.inputAddr=ref;}} type="text" placeholder="주소 입력..."/>
                <button className="btn btn-primary" onClick={()=>{
                    //입력한 이름과 주소를 얻어와서 
                    const name=this.inputName.value;
                    const addr=this.inputAddr.value;
                    //부모 컴포넌트에 전달 
                    this.props.addClicked(name, addr);
                }}>추가</button>
            </Fragment>
        );
    }
}

export default InputComponent;