import React, { Component, version } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import GetColors from '../../assets/styles/themes/GetColors';
import { Actions } from 'react-native-router-flux';

class Splash extends Component {

    componentDidMount() {
        this.login();
    };

    login() {
        setTimeout(() => {
            Actions.account();
        }, 2000);
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    hello Splash
                 </Text>
            </View>
        );
    };
};

export { Splash };
const styles = {
    container: {
        flex: 1,
        backgroundColor: GetColors().mainBgColor
    },
};