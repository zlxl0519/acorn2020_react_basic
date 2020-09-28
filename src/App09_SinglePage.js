import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Buy, Game, Home, Study } from './pages';

const App09_SinglePage=()=>{
    return (
        <div>
            <h1>Router 테스트</h1>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/study">study</Link></li>
                <li><Link to="/game">game</Link></li>
                <li><Link to="/game/star">star game</Link></li>
                <li><Link to="/game/cart">cart game</Link></li>
                <li><Link to="/buy?num=1&name=handphone">1 번 상품 사기</Link></li>
                <li><Link to="/buy?num=2&name=computer">2 번 상품 사기</Link></li>
                <li><Link to="/buy?num=3&name=coffee">3 번 상품 사기</Link></li>
            </ul>
            <Route exact path="/" component={Home}/>
            <Route path="/study" component={Study}/>
            <Route exact path="/game" component={Game}/>
            <Route path="/game/:name" component={Game}/>
            <Route path="/buy" component={Buy}/>
        </div>
    );
};

export default App09_SinglePage;