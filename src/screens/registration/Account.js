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
import { Input, Button } from '../../components';
import Icon from 'react-native-vector-icons/Entypo';
import { ModalComponent } from '../../components/ModalComponent';
import { Actions } from 'react-native-router-flux';
import { inject, observer } from 'mobx-react';
import GetString from '../../assets/languages/GetString';

const australia = require('../../assets/images/countries/australia.png');
const iran = require('../../assets/images/countries/iran.png');
const us = require('../../assets/images/countries/us.png');
const canada = require('../../assets/images/countries/canada.png');


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
            <View style={styles.container}>

                <ScrollView>
                    <Text style={[styles.hdrTitle, { marginTop: 16 }]}>
                        {GetString().verifyingAccount}
                    </Text>


                    <Text style={styles.innerTitle}>
                        {GetString().accountDes}
                    </Text>

                    <View style={{ padding: 16, }}>
                        <Text style={styles.hdrCardsectionTitle}>
                            {GetString().legalName}
                        </Text>

                        <View style={styles.cardSection}>
                            <Input
                                placeholder={GetString().fName}
                                selectionColor={'#505050'}
                                value={this.state.fName}
                                extraStyles={{ width: '45%' }}
                                onChangeText={fName => this.setState({ fName })}
                            />

                            <Input
                                placeholder={GetString().mName}
                                selectionColor={'#505050'}
                                value={this.state.mName}
                                extraStyles={{ width: '45%' }}
                                onChangeText={mName => this.setState({ mName })}
                            />
                        </View>

                        <Input
                            selectionColor={'#505050'}
                            placeholder={GetString().lName}
                            value={this.state.lName}
                            onChangeText={lName => this.setState({ lName: lName, disabled: false })}
                        />

                    </View>

                    <View style={{ paddingLeft: 16, }}>
                        <Text style={styles.hdrCardsectionTitle}>
                            {GetString().country}
                        </Text>

                        <TouchableHighlight
                            onPress={() => this.setModalVisible(true)}
                            underlayColor={'transparent'}>
                            <View style={styles.countryContainer}>
                                <View style={styles.innerCountryContainer}>
                                    <Image
                                        source={this.state.flag}
                                        style={styles.flagIcons}
                                    />
                                    <Text style={[styles.hdrCardsectionTitle, { fontSize: 15, marginLeft: 10 }]}>
                                        {this.state.flagTitle}
                                    </Text>
                                </View>

                                <Icon
                                    name={'chevron-small-down'}
                                    size={20}
                                    color={'gray'}
                                />
                            </View>
                        </TouchableHighlight>

                    </View>
                </ScrollView>

                <Button
                    disabled={this.state.disabled}
                    extraStyles={{ backgroundColor: this.state.disabled ? '#CBD1DF' : '#7577FF' }}
                    onPress={() => this.confirmInfoOnclick()}
                    title={ GetString().nextButton}
                />

                <Modal
                    animationType="fade"
                    transparent
                    onRequestClose={() => this.setModalVisible(false)}
                    visible={this.state.modalVisible}>

                    <View style={styles.modalView}>
                        <View style={styles.innerContainer}>
                            {flags.map(item => {
                                return (
                                    <TouchableHighlight
                                        onPress={() => this.flagSelectedOnclick(item)}
                                        underlayColor={'transparent'}>
                                        <View
                                            key={item.id}
                                            style={styles.modalFlagContainer}>
                                            <Image
                                                source={item.flag}
                                                style={styles.flagIcons}
                                            />

                                            <Text style={[styles.hdrCardsectionTitle, { fontSize: 15, marginLeft: 10 }]}>
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
    modalFlagContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        // flexDirection: thisprops.home.language === 'en' ? 'row' : 'row-reverse',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 16,
        paddingLeft: 10,
        alignSelf: 'stretch',
        width: Dimensions.get('window').width - 32,
    },
    innerContainer: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: Dimensions.get('window').width - 32,
        height: Dimensions.get('window').height / 3,
        borderRadius: 10
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
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    countryContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginRight: 10,
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    flagIcons: {
        height: 30,
        width: 30,
    },
    cardSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    hdrCardsectionTitle: {
        fontWeight: '600',
        textAlign: 'left',
        fontSize: 16,
        color: '#000'
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
export { Account };