import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAsHsN_SXygUNk59qWb5f_FKMpofir0zU4',
      authDomain: 'auth-bbc28.firebaseapp.com',
      databaseURL: 'https://auth-bbc28.firebaseio.com',
      projectId: 'auth-bbc28',
      storageBucket: 'auth-bbc28.appspot.com',
      messagingSenderId: '675264302999',
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ flexDirection: 'row' }}>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
          </View>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={{ alignSelf: 'center' }}>
            <Spinner size='large' />
          </View>
        );
      }
  }

  render() {
    return (
      <View>
        <Header title="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
