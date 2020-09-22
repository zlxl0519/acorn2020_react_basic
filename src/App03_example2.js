import React, { Component } from 'react';
import MsgList from './sub/MsgList';

class App03_example2 extends Component {
    render() {
        const list=[
            (<li>하나</li>),
            (<li>두울</li>),
            (<li>세엣</li>)
        ];
        return (
            <div>
                <input type="text"/>
                <button>추가</button>
                <MsgList list={list}/>
            </div>
        );
    }
}

export default App03_example2;