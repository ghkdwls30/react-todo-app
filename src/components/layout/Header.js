import React from 'react';
import {Link} from "react-router-dom";

class Header extends  React.Component {
    render() {
        return (
            <div id="header">
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/page1">페이지1</Link></li>
                    <li><Link to="/page2">페이지2</Link></li>
                </ul>
            </div>
        );
    }
}

export default Header;
