import React, {Component} from 'react';
import './Header.scss'
class Header extends Component {
    render() {
        return (
          <div className="header">
            <div className="margin-header">
                <div className="divheader-left">
                    <h1>Basic 90</h1>
                    <p>Free HTML5 Website Template</p>
                </div>
                <div className="divheader-right">
                    <div className="spaceheader-right"></div>
                    <input type="text" placeholder="Seach our Website"/>
                    <input type="submit"/>
                </div>
                <div className="clearboth"></div>
                <table >
                    <tr>
                        <th><a href="#root">TEXT LINK</a></th>
                        <th><a href="#root">TEXT LINK</a></th>
                        <th><a href="#root">TEXT LINK</a></th>
                        <th><a href="#root">TEXT LINK</a></th>
                        <th><a href="#root">TEXT LINK</a></th>
                    </tr>
                </table>
            </div>

          </div>
        );
    };
};
export default Header;