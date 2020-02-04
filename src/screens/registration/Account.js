import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    Modal,
    TouchableHighlight,
    Dimensions,
    Alert,
    Picker
} from 'react-native';
import { Input, Button, Line } from '../../components';
import Icon from 'react-native-vector-icons/Entypo';
import { ModalComponent } from '../../components/ModalComponent';
import { Actions, ActionConst } from 'react-native-router-flux';
import { inject, observer } from 'mobx-react';
import GetString from '../../assets/languages/GetString';
import { flex, row, position, fontBold } from '../../assets/styles/styles';
import GetColors from '../../assets/styles/themes/GetColors';
import stores from '../../assets/stores';

const australia = require('../../assets/images/countries/australia.png');
const iran = require('../../assets/images/countries/iran.png');
const us = require('../../assets/images/countries/us.png');
const canada = require('../../assets/images/countries/canada.png');

let hdrItems = [
    {
        id: 0,
        title: 'first one',
        icon: 'paper-plane',
        passed: false,
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

@inject('home')
@observer
class Account extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fName: '',
            mName: '',
            lName: '',
            flag: australia,
            flagTitle: GetString().australia,
            disabled: true,
            modalVisible: false,
            language: 'en',

        };
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    };

    render() {

        let colors = this.props.home.currentTheme;

        let flags = [
            {
                id: 0,
                flag: australia,
                title: GetString().australia,
            },
            {
                id: 1,
                flag: iran,
                title: GetString().iran,
            },
            {
                id: 2,
                flag: us,
                title: GetString().us,
            },
            {
                id: 3,
                flag: canada,
                title: GetString().canada,
            },
        ];
        return (
            <View style={[styles.container, {
                backgroundColor: colors.mainBgColor
            }]}>
                <TouchableHighlight
                    onPress={() => Actions.settings()}
                    underlayColor={'transparent'}>
                    <Icon
                        name={'menu'}
                        color={colors.acountInnerTitleColor}
                        size={30}
                        style={{ alignSelf: flex(), margin: 16 }}
                    />
                </TouchableHighlight>


                <View style={styles.mainHdrItemContainer}>
                    {hdrItems.map(item => {
                        return (
                            <View style={[styles.hdrItemContainer, { backgroundColor: item.passed ? colors.hdrItemsBgColorPassed : colors.hdrItemsBgColorNotPassed }]}>
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


                <ScrollView>
                    <Text style={[styles.hdrTitle, {
                        marginTop: 16,
                        color: colors.acountHdrTitleColor,
                    }]}>
                        {GetString().verifyingAccount}
                    </Text>


                    <Text style={[styles.innerTitle, {
                        color: colors.acountInnerTitleColor,
                    }]}>
                        {GetString().accountDes}
                    </Text>

                    <View style={{ padding: 16, }}>
                        <Text style={[styles.hdrCardsectionTitle, {
                            color: colors.acountHdrTitleColor,
                        }]}>
                            {GetString().legalName}
                        </Text>

                        <View style={styles.cardSection}>
                            <Input
                                placeholder={GetString().fName}
                                selectionColor={colors.selectionColor}
                                value={this.state.fName}
                                placeholderTextColor={colors.selectionColor}
                                extraStyles={{ width: '45%', }}
                                extraInpuStyles={{ color: colors.inputColor }}
                                onChangeText={fName => this.setState({ fName })}
                            />

                            <Input
                                placeholder={GetString().mName}
                                selectionColor={colors.selectionColor}
                                value={this.state.mName}
                                placeholderTextColor={colors.selectionColor}
                                extraStyles={{ width: '45%' }}
                                extraInpuStyles={{ color: colors.inputColor }}
                                onChangeText={mName => this.setState({ mName })}
                            />
                        </View>

                        <Input
                            selectionColor={colors.selectionColor}
                            placeholder={GetString().lName}
                            value={this.state.lName}
                            placeholderTextColor={colors.selectionColor}
                            extraInpuStyles={{ color: colors.inputColor }}
                            onChangeText={lName => this.setState({ lName: lName, disabled: false })}
                        />

                    </View>

                    <View style={{ paddingHorizontal: 16, }}>
                        <Text style={[styles.hdrCardsectionTitle, {
                            color: colors.acountHdrTitleColor,
                        }]}>
                            {GetString().country}
                        </Text>

                        <TouchableHighlight
                            onPress={() => this.setModalVisible(true)}
                            underlayColor={'transparent'}>
                            <View style={[styles.countryContainer, {
                                borderColor: colors.borderColor,

                            }]}>
                                <View style={styles.innerCountryContainer}>
                                    <Image
                                        source={this.state.flag}
                                        style={styles.flagIcons}
                                    />
                                    <Text style={[styles.hdrCardsectionTitle, {
                                        fontSize: 15, marginHorizontal: 10,
                                        color: colors.acountHdrTitleColor,
                                    }]}>
                                        {this.state.flagTitle}
                                    </Text>
                                </View>

                                <Icon
                                    name={'chevron-small-down'}
                                    size={20}
                                    color={colors.acountInnerTitleColor}
                                />
                            </View>
                        </TouchableHighlight>

                    </View>
                </ScrollView>

                <Button
                    disabled={this.state.disabled}
                    extraStyles={{ backgroundColor: this.state.disabled ? colors.nextButtonDisabled : colors.nextButtonNotDisabled }}
                    onPress={() => this.confirmInfoOnclick()}
                    title={GetString().nextButton}
                />

                <Modal
                    animationType="fade"
                    transparent
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.modalView}>
                        <View style={[styles.innerContainer]}>
                            {flags.map(item => {
                                return (
                                    <TouchableHighlight
                                        onPress={() => this.flagSelectedOnclick(item)}
                                        underlayColor={'transparent'}>
                                        <View
                                            key={item.id}
                                            style={[styles.modalFlagContainer, {
                                                borderBottomColor: '#eee',
                                            }]}>
                                            <Image
                                                source={item.flag}
                                                style={styles.flagIcons}
                                            />

                                            <Text style={[styles.hdrCardsectionTitle, {
                                                fontSize: 15, marginHorizontal: 10,
                                                color: '#707070',
                                            }]}>
                                                {item.title}
                                            </Text>
                                        </View>
                                    </TouchableHighlight>
                                )
                            })}
                        </View>

                    </View>
                </Modal>

            </View >
        );
    };

    flagSelectedOnclick(item) {
        this.setState({ flag: item.flag, flagTitle: item.title });
        this.setModalVisible(false);
    };

    confirmInfoOnclick() {
        let fName = this.state.fName;
        let mName = this.state.mName;
        let lName = this.state.lName;

        if (fName === '' || mName === '' || lName === '') {
            Alert.alert(
                '',
                GetString().accountAlert,
                [
                    { text: GetString().ok, onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
            return;
        };

        Actions.identity();
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
    ///////////////////////

    modalFlagContainer: {
        borderBottomWidth: 1,
        flexDirection: row(),
        justifyContent: flex(),
        alignItems: 'center',
        marginTop: 16,
        paddingLeft: 10,
        alignSelf: 'stretch',
        width: Dimensions.get('window').width - 32,
    },
    innerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height / 3,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        //height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    innerCountryContainer: {
        alignItems: 'center',
        justifyContent: flex(),
        flexDirection: row(),
    },
    countryContainer: {
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        flexDirection: row(),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flagIcons: {
        height: 30,
        width: 30,
    },
    cardSection: {
        flexDirection: row(),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    hdrCardsectionTitle: {
        textAlign: position(),
        fontfamily: 'IRANSans(FaNum)_Bold',
        fontSize: 16,
    },
    hdrTitle: {
        fontfamily: 'IRANSans(FaNum)_Bold',
        textAlign: 'center',
        fontSize: 18,
    },
    innerTitle: {
        fontfamily: 'IRANSans(FaNum)_Bold',
        textAlign: 'center',
        marginVertical: 16
    },
    container: {
        flex: 1,
        // backgroundColor: GetColors().mainBgColor,

    },
};
export { Account };