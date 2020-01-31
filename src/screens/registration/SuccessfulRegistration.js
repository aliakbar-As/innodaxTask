import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView,
    Dimensions,
} from 'react-native';
import { Button } from '../../components';
import GetString from '../../assets/languages/GetString';
import { Actions } from 'react-native-router-flux';

const widthScreen = Dimensions.get('window').width;
const tick = require('../../assets/images/tick.png');

class SuccessfulRegistration extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={{ paddingBottom: 16 }}>
                    <Text style={[styles.hdrTitle, { marginTop: 16 }]}>
                        {GetString().successHdrTitle}
                    </Text>


                    <Text style={styles.innerTitle}>
                        {GetString().successDes}
                    </Text>


                    <Image
                        source={tick}
                        style={{ width: 100, height: 100, alignSelf: 'center', marginVertical: 16 }}
                    />

                    <Button
                        title={GetString().submitButton}
                        onPress={() => this.confirmOnclick()}
                        extraStyles={styles.buttonStyle}
                    />


                    <TouchableOpacity
                        onPress={() => Actions.pop()}
                        style={{ alignSelf: 'center', marginTop: 10 }}>

                        <Text style={styles.uploadtitle}>
                            {GetString().goBack}
                        </Text>

                    </TouchableOpacity>


                </ScrollView>
            </View>
        );
    };
};
const styles = {
    buttonStyle: {
        width: widthScreen / 2 + 10,
        alignSelf: 'center',
        marginTop: 32
    },
    uploadtitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    },
    imgBackground: {
        width: widthScreen / 2 - 30,
        height: widthScreen / 2 - 30,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32
    },
    hdrTitle: {
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 18,
        color: '#000'
    },
    innerTitle: {
        fontWeight: '600',
        textAlign: 'center',
        color: 'gray',
        marginVertical: 16
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
};
export { SuccessfulRegistration };