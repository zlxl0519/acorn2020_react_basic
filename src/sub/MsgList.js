import React, { Component } from 'react';

class MsgList extends Component {
    render() {
        // 부모 component 에서 전달된 props
        const msgList=this.props.msgList;
        const list=msgList.map((item)=>{
            return (
                <li key={item.id}>
                    {item.msg}
                    <button onClick={
                        ()=>{
                            this.props.deleteClicked(item.id);
                        }
                    }>X</button>
                </li>
            );
        });
        return (
            <ul>
                {list}
            </ul>
        );
    }
}

export default MsgList;