import React, { Component } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

class Account extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>
                    hello Account    
                </Text>
            </View>
        );
    };
};
const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
};
export { Account };