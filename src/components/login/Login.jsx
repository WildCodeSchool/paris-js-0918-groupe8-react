/* global localStorage */
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
    flash: '',
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.signIn();
    // reset des champs du formulaire
    this.setState({ email: '', password: '' });
  }

  signIn = async () => {
    const { email, password } = this.state;
    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });
      // console.log(response);
      localStorage.setItem('token', response.headers['x-access-token']);
      this.setState({ flash: response.data.flash });
    } catch (error) {
      this.setState({ flash: error.response.data.flash });
    }
  }

  render() {
    const { email, password, flash } = this.state;
    if (flash === 'Vous êtes connecté') { return (<Redirect to="/admin" />); }
    return (
      <div className="container center row">
        <h2 className="col s8 offset-s2">Conteur Digital</h2>
        <form className="col s8 offset-s2" method="POST" onSubmit={this.handleSubmit}>

          <div className="input-field">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className="validate"
              style={{ color: 'black' }}
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input-field">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className="validate"
              style={{ color: 'black' }}
            />
            <label htmlFor="password">Mot de passe</label>
          </div>

          <button
            className="waves-effect waves-light blue btn-large"
            type="submit"
            name="soumettre"
          >
          SE CONNECTER
          </button>

        </form>
        <h3 className="col s12">{flash}</h3>
      </div>
    );
  }
}

export default Login;
