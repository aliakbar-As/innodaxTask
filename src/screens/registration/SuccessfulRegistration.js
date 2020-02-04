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
import { observer, inject } from 'mobx-react';

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

@inject('home')
@observer
class SuccessfulRegistration extends Component {
    render() {
        let colors = this.props.home.currentTheme;

        return (
            <View style={[styles.container, {
                backgroundColor: colors.mainBgColor,
            }]}>


                <View style={styles.mainHdrItemContainer}>
                    {hdrItems.map(item => {
                        return (
                            <View style={[styles.hdrItemContainer, {
                                backgroundColor: item.passed ? colors.hdrItemsBgColorPassed : colors.hdrItemsBgColorNotPassed, zIndex: 1
                            }]}>
                                <Icon
                                    name={item.icon}
                                    size={15}
                                    color={colors.hdrIconColor}
                                />
                            </View>
                        );
                    })}
                    <View style={[styles.lineContainer, {
                        backgroundColor: colors.hdrItemBg,
                    }]} />
                </View>

                <ScrollView style={{ paddingBottom: 16 }}>
                    <Text style={[styles.hdrTitle, {
                        marginTop: 16,
                        color: colors.acountHdrTitleColor
                    }]}>
                        {GetString().successHdrTitle}
                    </Text>


                    <Text style={[styles.innerTitle, {
                        color: colors.acountInnerTitleColor,
                    }]}>
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

                        <Text style={[styles.uploadtitle, {
                            color: colors.acountInnerTitleColor,
                        }]}>
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
    },
    innerTitle: {
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 16
    },
    container: {
        flex: 1,
    },
};
export { SuccessfulRegistration };