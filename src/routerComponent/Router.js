import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    DrawerLayoutAndroid,
} from 'react-native';
import {
    Scene,
    Router,
    Drawer,
    Stack,
    Lightbox,
} from 'react-native-router-flux';
import {
    Account,
    Identity,
    UploadImage,
    PassportPhoto,
    TakingSelfie,
    SuccessfulRegistration
} from '../screens/registration';
import { Settings } from '../screens/splash';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Lightbox>
                    <Scene key={'root'}>
                        <Scene
                            component={Settings}
                            key={'settings'}
                            hideNavBar
                        />

                        <Scene
                            component={Account}
                            key={'account'}
                            hideNavBar

                        />

                        <Scene
                            component={Identity}
                            key={'identity'}
                            hideNavBar
                        />

                        <Scene
                            component={UploadImage}
                            initial
                            key={'uploadImages'}
                            hideNavBar
                        />

                        <Scene
                            component={PassportPhoto}
                            key={'passport'}
                            hideNavBar
                        />

                        <Scene
                            component={TakingSelfie}
                            key={'selfie'}
                            hideNavBar
                        />

                        <Scene
                            component={SuccessfulRegistration}
                            key={'successfulRegistration'}
                            hideNavBar
                        />
                    </Scene>


                </Lightbox>
            </Router>
        );
    };
};
export { RouterComponent };