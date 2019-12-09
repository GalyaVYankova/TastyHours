import React, { Fragment } from 'react';
import withForm from '../shared/hocs/withForm';
import userService from '../services/user-service';
import * as yup from 'yup';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, Navbar, Button } from 'react-bootstrap';


class Login extends React.Component {

  usernameChangeHandler = this.props.controlChangeHandlerFactory('username');
  passwordChangeHandler = this.props.controlChangeHandlerFactory('password');

  submitHandler = () => {
    const errors = this.props.getFormErrorState();
    if (!!errors) { return; } 
    const data = this.props.getFormState();
    this.props.login(this.props.history, data);
    //userService.login(data).then(() => 
    //this.props.history.push('/'))
  }

  
  getFirstControlError = name => {
    const errorState = this.props.getFormErrorState();
    return errorState && errorState[name] && errorState[name][0];
  };

  render() {
    const usernameError = this.getFirstControlError('username');
    const passwordError = this.getFirstControlError('password');

    return <form className="Login">
      <div>
        <p>
        <label>Потребителското име</label>
        </p>
        <p>
        <input type="text" onChange={this.usernameChangeHandler}/>
        {usernameError && <div className="error">{usernameError}</div>}
        </p>
      </div>
      <div>
        <p>
        <label>Парола</label>
        </p>
        <p>
        <input type="password" onChange={this.passwordChangeHandler} />
        {passwordError && <div className="error">{passwordError}</div>}
        </p>
      </div>
      <div>
      <Button className="gallery-button" variant="primary" onClick={this.submitHandler}>Вход</Button>
      </div>
    </form>;
  }

}

const initialFormState = {
  username: '',
  password: '',
};

const schema = yup.object({
  username: yup.string('Потребителското име трябва да е символи')
    .required('Потребителското име е задължително')
    .min(4, 'Потребителското име трябва да е по-дълго от 4 символа'),

  password: yup.string('Паролата трябва да е символи')
    .required('Паролата е задължителна')
    .min(6, 'Паролата трябва да е по-дълга от 6 символа'),
});

export default withForm(Login, initialFormState, schema)
