import React, { Component } from 'react';

//props 로 전달된 회원목록을 table 에 출력하는 컴포넌트
//특정이벤트 (삭제버튼 클릭)가 일어 났을때 호출할 함수도
//props 로 전달 받는다.
class MemberList extends Component {
    render() {
        //props 로 전달된 회원목록을 이용해서 jsx_memberList 배열을 얻어낸다.
        const jsx_memberList=this.props.memberList.map(
            (item)=>{
                return (
                    //jsx 문법을 적기 위해 return () 괄호가 필요
                    <tr key={item.num}>
                        <td>{item.num}</td>
                        <td>{item.name}</td>
                        <td>{item.addr}</td>
                        <td><button onClick={()=>{
                            //props 로 전달된 함수 호출하면서
                            this.props.deleteClicked(item.num);
                        }}>삭제</button></td>
                    </tr>
                );
            }
        );
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>이름</th>
                        <th>주소</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {jsx_memberList} 
                </tbody>
            </table>
        );
    }
}

export default MemberList;