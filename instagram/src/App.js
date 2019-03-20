import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: dummyData,
      likes: dummyData.likes,
      search: "",
      posts: [],
      filtered: []
    
    };
  }

    componentDidMount() {
      this.setState({ posts: dummyData });
    }
    searchPostsHandler = e => {
      const post = this.state.posts.filter(p => {
        if (p.username.includes(e.target.value)) {
          return p;
        }
      });
      this.setState({ filtered: post });
    }
  



    // const searchHandler = e => {
    //   this.setState({filtered : this.state.posts.filter(post => post.username.includes(e.target.value)), search : e.target.value});
    // }
  

  

  render() {
    return (
      <div className="App">
      <h1>{this.state.likes}</h1>
        <SearchBar searchPosts={this.searchPostsHandler}/>
        <PostContainer data={
            this.state.filtered.length > 0
              ? this.state.filtered
              : this.state.posts
        }/>
      </div>
    );
  }
}

export default App;