import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Nav from "../components/Nav";
import { __RegisterUser } from "../services/UserServices";
import "../styles/App.css";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
    console.log(this.state);
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await __RegisterUser(this.state);
      this.props.history.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { name, password, email } = this.state;
    return (
      <div className="app">
        <Nav />
        <form className="app__login">
          <center>
            <img
              className="app__headerImage"
              src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
              alt=""
            />
          </center>
          <TextInput
            type="text"
            name="name"
            placeholder="username"
            value={name}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="email"
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="password"
            name="password"
            type="password"
            value={password}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}
