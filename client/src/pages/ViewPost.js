import React, { Component } from "react";
import { __GetPosts } from "../services/PostServices";
// import Avatar from "@material-ui/core/Avatar";

export default class Discover extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const posts = await __GetPosts(this.state.currentPage);
      console.log(posts)
      this.setState({ posts: [...this.state.posts, ...posts] });
      console.log(posts, "second")
    } catch (error) {
      throw error;
    }
  };

  incrementPage = () =>
    this.setState(
      (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
      () => this.getPosts()
    );

  render() {
    const { posts } = this.state;
    return (
      <div className="post">
        {posts.length ? (
          posts.map((post) => (
            <div
              key={post._id}
              onClick={() => this.props.history.push(`/posts/${post._id}`)}
              className="post__header"
            >
              <h2>{post.caption} </h2>
              <h2>{post.image} </h2>
              <h2>{post.comments} </h2>
            </div>
          ))
        ) : (
          <h2>No Posts</h2>
        )}
      </div>
    );
  }
}
