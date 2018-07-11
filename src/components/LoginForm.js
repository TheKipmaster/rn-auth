import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      loading: false,
      error: 'authentication failed ):'
    });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (<Button onPress={this.onButtonPress.bind(this)}>Login</Button>);
  }

  render() {
    const { errorStyle } = styles;

    return (
      <Card>
        <CardItem>
          <Input
            placeholder={'example@domain.com'}
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            label='Email'
          />
        </CardItem>
        <CardItem>
          <Input
            secureTextEntry
            placeholder={'password'}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label='Password'
          />
        </CardItem>

        <Text style={errorStyle}>{this.state.error}</Text>

        <CardItem>
          {this.renderButton()}
        </CardItem>
      </Card>
    );
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
