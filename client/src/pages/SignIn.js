import React, { Component } from "react";
import TextInput from "../components/TextInput";
import Nav from "../components/Nav";
import { __LoginUser } from "../services/UserServices";

export default class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      formError: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, formError: false });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await __LoginUser(this.state);
      console.log(loginData, "Login Data here");
      this.props.toggleAuthenticated(true, loginData.user, () =>
        this.props.history.push("/feed/:user_id")
      );
    } catch (error) {
      this.setState({ formError: true });
    }
  };

  render() {
    const { email, password } = this.state;
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
          <button>Login</button>
          {this.state.formError ? 
            <p>Dawg you can't log in wtf bro</p>
          : 
            <p></p>
          }
        </form>
      </div>
    );
  }
}
