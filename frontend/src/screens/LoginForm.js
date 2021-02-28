import React from "react";
import axios from "axios";  

class LoginForm extends React.Component {
  

  state = {
    email: "",
    password: ""
  };

  handleChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleChange1 = (event) => {
    this.setState({ password: event.target.value });
  };

  
  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };

    axios.post(`http://127.0.0.1:5000/`, user).then((res) => {
      if (res.status === 200) {
        this.props.history.push(`/${res.data.userid}`)
      }
    });
  };

  render() {
    return (
      
        <main className="d-flex align-items-center min-vh-100 py-3 py-md-0">
          <div className="container">
            <div className="card login-card">
              <div className="row no-gutters">
                <div className="col-md-5">
                  <img
                    src="/images/loginImg.jpg"
                    alt="login"
                    className="login-card-img"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="brand-wrapper">
                      <a className="logo">eco</a>
                    </div>
                    <p className="login-card-description">
                      Sign into your account
                    </p>
                    <form action="#!">
                      <div className="form-group">
                        <label for="email" className="sr-only">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email address"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="form-group mb-4">
                        <label for="password" className="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="***********"
                          onChange={this.handleChange1}
                        />
                      </div>
                      <a
                        name="login"
                        to="/"
                        id="login"
                        className="btn btn-block login-btn mb-4"
                        onClick={this.handleSubmit}
                      >
                        Login
                      </a>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }
};

export default LoginForm;
