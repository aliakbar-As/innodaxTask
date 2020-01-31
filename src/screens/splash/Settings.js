import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Text,
    Alert,
    Animated,
    Easing,
    TextInput,
    TouchableHighlight,
    TouchableWithoutFeedback,
    ScrollView,
    Image,
    CheckBox
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Button, Line } from '../../components';
import Icon from 'react-native-vector-icons/AntDesign';
import { inject, observer } from 'mobx-react';
import GetString from '../../assets/languages/GetString';

const { width, height } = Dimensions.get('window');

@inject('home')
@observer
class Settings extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            opacity: new Animated.Value(0),
            xy: new Animated.ValueXY({ x: 0, y: height }),
            checked: false,
            selected: 1,
            radioId: 0,
            Halls: false,
            Hairdressers: false,
            themeId: 0
            
        }
    }

    componentDidMount() {
        this.showContent()
    }

    showContent() {
        Animated.timing(this.state.xy, {
            toValue: { x: 0, y: 1 },
            duration: 1000,
            easing: Easing.elastic()
        }).start()
    }



    press = () => {
        this.setState((state) => ({
            checked: !state.checked,
        }));
    }






    render() {
        return (

            <View style={styles.container}>

                <Animated.View style={[styles.lightboxContainer, this.state.xy.getLayout()]}>

                    <TouchableOpacity
                        style={[styles.onclicks, { alignSelf: 'flex-start' }]}
                        onPress={() => Actions.pop()}>
                        <Icon
                            size={30}
                            color={'#7E7D7D'}
                            name={'closecircleo'} />
                    </TouchableOpacity>

                    <Text style={styles.hdrtitle}>
                        {GetString().filterLanguage}
                    </Text>

                    <ScrollView>
                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => this.setState({ radioId: 0 })}>
                                <View style={styles.reserveContainer}>
                                    <View style={[styles.radioContainer, { backgroundColor: this.state.radioId === 0 ? '#CCD4F2' : '#fff', }]} />

                                    <Text style={styles.innerTitle}>
                                        {GetString().fa}
                                    </Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => this.setState({ radioId: 1 })}>
                                <View style={styles.reserveContainer}>
                                    <View style={[styles.radioContainer, { backgroundColor: this.state.radioId === 1 ? '#CCD4F2' : '#fff', }]} />

                                    <Text style={styles.innerTitle}>
                                        {GetString().en}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>

                        <Line />


                        <Text style={styles.hdrtitle}>
                            {GetString().filterTheme}
                        </Text>

                        <View style={{ alignItems: 'flex-end' }}>
                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => this.setState({ themeId: 0 })}>
                                <View style={styles.reserveContainer}>
                                    <View style={[styles.radioContainer, { backgroundColor: this.state.themeId === 0 ? '#CCD4F2' : '#fff', }]} />

                                    <Text style={styles.innerTitle}>
                                        {GetString().light}
                                    </Text>
                                </View>
                            </TouchableHighlight>

                            <TouchableHighlight
                                underlayColor={'transparent'}
                                onPress={() => this.setState({ themeId: 1 })}>
                                <View style={styles.reserveContainer}>
                                    <View style={[styles.radioContainer, { backgroundColor: this.state.themeId === 1 ? '#CCD4F2' : '#fff', }]} />

                                    <Text style={styles.innerTitle}>
                                        {GetString().dark}
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>

                    <Button
                        extraStyles={{ margin: 16 }}
                        onPress={() => this.confirm()}
                        title={'اعمال'}
                    />
                </Animated.View>

            </View>
        )
    };

    confirm() {
        this.props.home.setLanguages(this.state.radioId === 0 ? 'fa' : 'en');

        this.props.home.setTheme(this.state.themeId === 0 ? 'light' : 'dark');
        Actions.account();
    };

};

const styles = StyleSheet.create({
    checkboxContainers: {
        flexDirection: 'row-reverse',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 10,
    },
    radioContainer: {
        height: 20,
        width: 20,
        borderRadius: 100,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#6981D9',
        marginBottom: 5,
    },
    reserveContainer: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 16,
        alignItems: 'flex-end'
    },
    hdrtitle: {
        fontSize: 16,
        fontFamily: 'num',
        textAlign: 'right',
        color: '#343434',
        marginTop: 10,
    },
    innerTitle: {
        fontSize: 16,
        fontFamily: 'num',
        textAlign: 'center',
        color: '#505050',
        marginRight: 10,
    },
    onclicks: {
        padding: 16,
        margin: -16,
        alignSelf: 'flex-end'
    },
    container: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    lightboxContainer: {
        borderRadius: 5,
        borderColor: '#000',
        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 1,
        width: width - 32,
        height: height - 64,
        backgroundColor: '#fff',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 10
    },


})
export { Settings }