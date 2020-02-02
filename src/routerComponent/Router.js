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
import { Splash } from '../screens/splash/Splash';

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <Lightbox>
                    <Scene key={'root'}>

                        {/* <Scene
                            component={Splash}
                            initial
                            key={'splash'}
                            hideNavBar
                        /> */}

                        <Scene
                            component={Account}
                            key={'account'}
                            hideNavBar
                            initial
                        />

                        <Scene
                            component={Identity}
                            key={'identity'}
                            hideNavBar
                        />

                        <Scene
                            component={UploadImage}
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

                    <Scene component={Settings} key={'settings'} hideNavBar />
                </Lightbox>
            </Router>
        );
    };
};
export { RouterComponent };