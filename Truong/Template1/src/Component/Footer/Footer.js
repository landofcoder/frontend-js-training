import React, {Component} from 'react';
import './Footer.scss';
class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <div className="copyright">
                    <p>Copyright © 2009 - 2019 - All Rights Reserved - Domain Name</p>
                </div>
                <div className="ostemplate">
                    <p>Template by OS Templates</p>
                </div>
            </div>
        )
    }
}
export default Footer;