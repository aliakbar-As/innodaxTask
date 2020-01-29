import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid
} from 'react-native';
import {
    Scene,
    Router,
    Drawer,
    Stack,
    Lightbox,
    Actions
} from 'react-native-router-flux';
import { Account } from '../screens/registration';


class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Scene key={'root'}>

                    <Scene
                        component={Account}
                        key={'account'}
                        hideNavBar
                        initial
                    />
                </Scene>
            </Router>
        );
    };
};
export { RouterComponent };