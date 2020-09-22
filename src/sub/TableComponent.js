import React, { Component } from 'react';

class TableComponent extends Component {
    render() {
        //부모에서 전달된 props
        const memberList=this.props.memberList;
        //배열의 map 을 이용해서 하나하나 아이템 빼서 반영(for문같이)
        const member=memberList.map((item)=>{
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.addr}</td>
                    <td><button onClick={
                        ()=>{
                            this.props.deleteClick(item.id);
                        }
                    }>X</button></td>
                </tr>
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>주소</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {member}
                </tbody>
            </table>
        );
    }
}

export default TableComponent;