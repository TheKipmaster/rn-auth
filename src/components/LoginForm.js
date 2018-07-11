import React, { Component } from 'react';
import { Card, CardItem, Button, Input } from './common';

class LoginForm extends Component {
  state = { email: '', password: '' };

  render() {
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
        <CardItem>
          <Button>Login</Button>
        </CardItem>
      </Card>
    );
  }
}

export default LoginForm;
