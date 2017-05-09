import React, {Component} from 'react';
import PropTypes from "prop-types";


export default class SearchBox extends Component {

    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.input = null;
    }

    onSubmit = () => {
        const inputValue = this.input.value || '';
        this.props.onSubmit(inputValue);
    };

    render() {
        return(
            <div className="SearchBox">
                <input className="searchbox-input"
                       ref={(ref) => {this.input = ref}}
                       type="text"/>
                <button className="searchbox-submit"
                        onClick={this.onSubmit}>
                    Go!
                </button>
            </div>
        )
    }

}