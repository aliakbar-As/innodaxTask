import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { RouterComponent } from './src/routerComponent';

class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <RouterComponent />
      </View>
    );
  };
};
export default App;
