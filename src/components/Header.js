import React, {Component} from "react";
import PropTypes from "prop-types";
import Logo from "./Logo";

export default class Header extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="Header">
                <span className="header-title">
                    {this.props.title}
                </span>
                <Logo className="header-logo"
                      logoUrl="http://tomaszbonior.krzczonow.com.pl/wp-content/uploads/2008/11/Gmail-email-signature-logo-blue.png"/>
            </div>
        )
    }

}

