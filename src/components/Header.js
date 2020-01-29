import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    Platform,
    TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

const menuBar = require('../assets/images/menu.png');

const Header = ({
    primary,
    title,
    backOnpress
}) => {
    if (primary) {
        return (
            <View style={styles.pContainer}>

                <TouchableHighlight
                    underlayColor={'transparent'}
                    style={{ padding: 32, margin: -32 }}
                    onPress={backOnpress}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Icon
                            name={'ios-arrow-back'}
                            size={30}
                            onPress={backOnpress}
                            color={'#A2A2A2'}
                        />
                        <Text style={styles.backTitle}>
                            بازگشت
                        </Text>
                    </View>
                </TouchableHighlight>

                <Text style={styles.pTitle}>
                    {title}
                </Text>

                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => Actions.drawerOpen()}>
                    <Image
                        source={menuBar}
                        style={{ width: 25, height: 25, }}
                    />
                </TouchableHighlight>

            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text style={styles.mainTitle}>
                    Aryanfit
                </Text>

                <TouchableHighlight
                    underlayColor={'transparent'}
                    onPress={() => Actions.drawerOpen()}>
                    <Image
                        source={menuBar}
                        style={{ width: 25, height: 25, }}
                    />
                </TouchableHighlight>
            </View>
        );
    };
};

const styles = {
    pTitle: {
        fontSize: 18,
        color: '#7D7D7D',
        textAlign: 'center',
        alignSelf: 'center',
        fontFamily: 'IRANSans(FaNum)_Bold',
    },
    pContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
    },
    maintitle: {
        fontSize: 18,
        color: '#7D7D7D',
        textAlign: 'center',
        alignSelf: 'center',
        position: 'absolute',
        right: 0,
        top: 16,
        bottom: 0,
        left: 0,
        fontFamily: 'IRANSans(FaNum)_Bold',
        flex: 1,
    },
    backTitle: {
        fontSize: 14,
        color: '#A2A2A2',
        textAlign: 'center',
        fontFamily: 'num',
        marginLeft: 10
    },
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 16,
    },
    mainTitle: {
        fontFamily: 'Roboto_medium',
        fontSize: 18,
        textAlign: 'left',
        color: '#7D7D7D'
    },
};
export { Header };