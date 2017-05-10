import React, {Component} from 'react';
import '../styles/index.css';
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBox from "../components/SearchBox";
import PostItem from "../components/PostItem";

class App extends Component {

    static apiUrl = 'http://jsonplaceholder.typicode.com/';

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
        this.allPosts = [];
    }

    componentDidMount = () => {
        fetch(
            App.apiUrl + 'posts',
        ).then((response) => response.json()).then((data) => {
            this.allPosts = data;
            this.setState({
                posts: this.allPosts
            });
        }).catch((err) => {
            console.error(err);
        });
    };

    onSubmit = (value) => {
        const filteredPosts = this.allPosts.filter((post) => {
            return post.body.indexOf(value) > -1 || post.title.indexOf(value) > -1;
        });

        this.setState({
            posts: filteredPosts
        });
    };

    render() {
        return (
            <div className="App">
                <Header title="Wow wow"/>
                <div className="top-bar">
                    <SearchBox onSubmit={(value) => {this.onSubmit(value)}}/>
                    <button className="add-post-button">Add post</button>
                </div>
                {this.state.posts.map((post) => {
                    return (
                        <PostItem key={post.id} post={post}/>
                    )
                })}
                <Footer/>
            </div>
        );
    }

}

export default App;
