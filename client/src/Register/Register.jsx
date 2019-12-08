import React from 'react';
import * as yup from 'yup';
import withForm from '../shared/hocs/withForm';
import userService from '../services/user-service';
import './Register.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';

class Register extends React.Component {

  usernameOnChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordOnChangeHandler = this.props.controlChangeHandlerFactory('password');
  rePasswordOnChangeHandler = this.props.controlChangeHandlerFactory('rePassword');


  submitHandler = () => {
    // this.props.runValidations()
    //   .then(formData => console.log(formData));
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; }
    const data = this.props.getFormState();
    userService.register(data).then(() => {
      this.props.history.push('/login');
    });
  };

  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');
    const rePasswordError = this.getFirstControlError('rePassword');

    return (
      <form className="Register">
        <div >
          <p>
          <label>Потребителското име</label>
          </p>
          <p>
          <input type="text" onChange={this.usernameOnChangeHandler} id="username" />
          {usernameError && <div className="error">{usernameError}</div>}
          </p>
        </div>
        <div >
          <p>
          <label>Парола</label>
          </p>
          <p>
          <input type="password" onChange={this.passwordOnChangeHandler} id="password" />
          {passwordError && <div className="error">{passwordError}</div>}
          </p>
        </div>
        <div >
          <button type="button" onClick={this.submitHandler}>Регистрация</button>
        </div>
      </form>);
  }
}

const initialFormState = {
  username: '',
  password: '',
  rePassword: ''
};


const schema = yup.object({
  username: yup.string('Потребителското име трябва да е символи')
    .required('Потребителското име е задължително')
    .min(4, 'Потребителското име трябва да е по-дълго от 4 символа'),

  password: yup.string('Паролата трябва да е символи')
    .required('Паролата е задължителна')
    .min(6, 'Паролата трябва да е по-дълга от 6 символа'),

  rePassword: yup.string()
    .required('Required')
});


export default withForm(Register, initialFormState, schema)
