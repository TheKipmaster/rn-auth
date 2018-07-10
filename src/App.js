import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsHsN_SXygUNk59qWb5f_FKMpofir0zU4',
      authDomain: 'auth-bbc28.firebaseapp.com',
      databaseURL: 'https://auth-bbc28.firebaseio.com',
      projectId: 'auth-bbc28',
      storageBucket: 'auth-bbc28.appspot.com',
      messagingSenderId: '675264302999',
    });
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
