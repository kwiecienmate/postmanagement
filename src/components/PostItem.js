import React, {Component} from "react";
import PropTypes from "prop-types";

export default class PostItem extends Component {

    static propTypes = {
        post: PropTypes.object.isRequired
    };

    render() {
        const post = this.props.post;

        return (
            <div className="PostItem">
                <div className="post-item-content">
                    <span className="post-title">{post.title}</span>
                    <p className="post-text">{post.body}</p>
                </div>
                <div className="post-item-buttons">
                    <button className="post-item-button">Open</button>
                    <button className="post-item-button">Delete</button>
                </div>
            </div>
        )
    }

}
