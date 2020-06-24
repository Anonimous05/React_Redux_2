import React, {Component} from 'react';
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div>
                <header className="head">
                    <nav className="main-nav">
                        <ul>
                            <li><a href="/">Main</a></li>
                            <li><a href="/add">+</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Header;