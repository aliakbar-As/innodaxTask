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
import Icon from 'react-native-vector-icons/Entypo';
import GetColors from '../../assets/styles/themes/GetColors';

const widthScreen = Dimensions.get('window').width;
const tick = require('../../assets/images/tick.png');

let hdrItems = [
    {
        id: 0,
        title: 'first one',
        icon: 'paper-plane',
        passed: true,
    },
    {
        id: 1,
        title: 'second one',
        icon: 'v-card',
        passed: true,
    },
    {
        id: 2,
        title: 'third one',
        icon: 'user',
        passed: true,
    }
];

class SuccessfulRegistration extends Component {
    render() {
        return (
            <View style={styles.container}>


                <View style={styles.mainHdrItemContainer}>
                    {hdrItems.map(item => {
                        return (
                            <View style={[styles.hdrItemContainer, {
                                backgroundColor: item.passed ? GetColors().hdrItemsBgColorPassed : GetColors().hdrItemsBgColorNotPassed, zIndex: 1
                            }]}>
                                <Icon
                                    name={item.icon}
                                    size={15}
                                    color={GetColors().hdrIconColor}
                                />
                            </View>
                        );
                    })}
                    <View style={styles.lineContainer} />
                </View>

                <ScrollView style={{ paddingBottom: 16 }}>
                    <Text style={[styles.hdrTitle, { marginTop: 16 }]}>
                        {GetString().successHdrTitle}
                    </Text>


                    <Text style={styles.innerTitle}>
                        {GetString().successDes}
                    </Text>


                    <Image
                        source={tick}
                        style={styles.tickIcon}
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
    mainHdrItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
        justifyContent: 'space-around',
        marginVertical: 16
    },
    hdrItemContainer: {
        height: 50,
        width: 50,
        alignItems: 'center',
        backgroundColor: GetColors().hdrItemBg,
        borderRadius: 100,
        justifyContent: 'center',
    },
    lineContainer: {
        height: 1,
        backgroundColor: GetColors().hdrItemBg,
        width: '60%',
        position: 'absolute',
        right: '30%',
        left: '30%',
        top: '50%',
        bottom: '50%',
        alignSelf: 'center',
        justifyContent: 'center',

    },


    tickIcon: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginVertical: 16
    },
    buttonStyle: {
        width: widthScreen / 2 + 10,
        alignSelf: 'center',
        marginTop: 32
    },
    uploadtitle: {
        fontSize: 14,
        color: GetColors().acountInnerTitleColor,
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
        color: GetColors().acountHdrTitleColor
    },
    innerTitle: {
        fontWeight: '600',
        textAlign: 'center',
        color: GetColors().acountInnerTitleColor,
        marginVertical: 16
    },
    container: {
        flex: 1,
        backgroundColor: GetColors().mainBgColor,
    },
};
export { SuccessfulRegistration };