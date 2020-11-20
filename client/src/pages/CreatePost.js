import React, { Component } from "react";
import TextInput from "../components/TextInput";
import { __UploadPost } from "../services/PostServices";
import "../styles/Post.css";
// import Avatar from "@material-ui/core/Avatar";
export default class CreatePost extends Component {
  constructor() {
    super();
    this.state = {
      caption: "",
      image: "",
      comments: [],
    };
  }
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __UploadPost(this.state, this.props.currentUser._id);
      this.props.history.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { name, caption, image } = this.state;
    return (
      <div className="post">
        <div className="post__header">
          {/* <Avatar
            className="post__avatar"
            alt={name}
            src="/static/images/avatar/1.jpg"
          /> */}
          <div className="upload content">
            <form className="flex-col" onSubmit={this.handleSubmit}>
              <TextInput
                placeholder="Caption"
                name="caption"
                value={caption}
                onChange={this.handleChange}
              />
              <TextInput
                placeholder="Image Url"
                name="image"
                value={image}
                onChange={this.handleChange}
              />
              <button>Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
