import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    TouchableHighlight,
    SwipeableListView,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import GetString from '../../assets/languages/GetString';
import { row } from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/Entypo';

const passport = require('../../assets/images/identity/passport.png');
const driver = require('../../assets/images/identity/driver.png');
const card = require('../../assets/images/identity/card.png');
const widthScreen = Dimensions.get('window').width;

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
        passed: false,
    },
    {
        id: 2,
        title: 'third one',
        icon: 'user',
        passed: false,
    }
];

class Identity extends Component {
    render() {
        let items = [
            {
                id: 0,
                title: GetString().passport,
                icon: passport
            },
            {
                id: 1,
                title: GetString().driver,
                icon: driver
            },
            {
                id: 2,
                title: GetString().identityCard,
                icon: card
            },
        ];

        return (
            <View style={styles.container}>

                <View style={styles.mainHdrItemContainer}>
                    {hdrItems.map(item => {
                        return (
                            <View style={[styles.hdrItemContainer, { 
                                backgroundColor: item.passed ? '#727AF9' : '#CFD4E4',
                                zIndex: 1
                                }]}>
                                <Icon
                                    name={item.icon}
                                    size={15}
                                    color={'#fff'}
                                />
                            </View>
                        );
                    })}
                    <View style={styles.lineContainer} />
                </View>

                <ScrollView>
                    <Text style={[styles.hdrTitle, { marginTop: 16 }]}>
                        {GetString().identity}
                    </Text>


                    <Text style={styles.innerTitle}>
                        {GetString().identityDes}
                    </Text>

                    <View style={styles.innerContainer}>
                        {items.map(item => {
                            return (
                                <TouchableHighlight
                                    onPress={() => this.itemSelectedOnclick(item)}
                                    key={item.id}
                                    underlayColor={'transparent'}>
                                    <View style={styles.itemsContainer}>
                                        <Image
                                            style={{ width: 30, height: 30 }}
                                            source={item.icon}
                                        />

                                        <Text style={styles.primarytitle}>
                                            {item.title}
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            )
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    };

    itemSelectedOnclick(item) {
        let idSelected = item.id;

        switch (idSelected) {
            case 0:
                console.log('passport');
                // Actions.passport();
                Actions.uploadImages();

                break;
            case 1:
                console.log("driver's license");
                Actions.uploadImages();
                break;
            case 2:
                console.log('identity Card');
                Actions.uploadImages();

                break;
            default:
                console.log('default');
                break;
        };
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
        backgroundColor: '#CED1E2',
        borderRadius: 100,
        justifyContent: 'center',
    },
    lineContainer: {
        height: 1,
        backgroundColor: '#CED1E2',
        width: '60%',
        position: 'absolute',
        right: '30%',
        left: '30%',
        top: '50%',
        bottom: '50%',
        alignSelf: 'center',
        justifyContent: 'center',

    },

    itemsContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: widthScreen / 3 - 16,
        height: widthScreen / 3 - 16,
    },
    primarytitle: {
        fontSize: 14,
        color: 'gray',
        textAlign: 'center',
        marginTop: 10
    },
    innerContainer: {
        flexDirection: row(),
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 16,
        padding: 16
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
        marginVertical: 16,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
};
export { Identity };