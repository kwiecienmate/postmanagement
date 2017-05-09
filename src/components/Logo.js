import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class Logo extends Component {

    static propTypes = {
        className: PropTypes.string.isRequired,
        logoUrl: PropTypes.string.isRequired
    };

    render() {
        return(
            <div className={"Logo " + this.props.className}>
                <img src={this.props.logoUrl}/>
            </div>
        )
    }

}