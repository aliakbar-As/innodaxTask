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
import AsyncStorage from '@react-native-community/async-storage';
import stores from './src/assets/stores';
import { create } from "mobx-persist";
import { Provider } from 'mobx-react';
import GetColors from './src/assets/styles/themes/GetColors';

const hydrate = create({ storage: AsyncStorage });

class App extends Component {

  componentDidMount() {
    console.disableYellowBox = true;

    hydrate('homeStores', stores.home).then(() => { console.log('homstore') });
    hydrate('RegisterStore', stores.login);
  };

  render() {
    return (
      <Provider {...stores}>

        <View style={{ flex: 1 }}>
          <StatusBar backgroundColor={GetColors().statusBar} barStyle="light-content" />

          <RouterComponent />
        </View>
      </Provider>
    );
  };
};
export default App;
