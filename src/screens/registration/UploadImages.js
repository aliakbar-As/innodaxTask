import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { Button } from '../../components';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import { inject, observer } from 'mobx-react';
import GetString from '../../assets/languages/GetString';
import GetColors from '../../assets/styles/themes/GetColors';


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


@inject('login')
@inject('home')
@observer
class UploadImage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userPic: '',
            imgFile: '',
            userPictures: [],
        };

    };

    uploadUserPic() {
        const options = {
            title: '',
            cancelButtonTitle: GetString().cancelButtonTitle,
            takePhotoButtonTitle: GetString().takePhotoButtonTitle,
            chooseFromLibraryButtonTitle: GetString().chooseFromLibraryButtonTitle,
            // customButtons: [{name: 'removeImage', title: 'حذف عکس'}],

            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            quality: 0.8,
            maxWidth: 1000,
            maxHeight: 1000
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            let result = response.data;
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                this.setState({
                    userPic: response.uri,
                    imgFile: response.data,
                    userPictures: this.state.userPictures.concat(response.uri)
                });
                // this.props.login.setUserImageUploaded(response.uri);
            }
        });
    };

    viewImages() {
        return this.state.userPictures.map(function (image, index) {
            console.log(image);
            return (
                <View style={[styles.imgContainer, {
                    borderColor: this.props.home.currentTheme.borderColor,

                }]}>
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.imageStyle}
                    />
                </View>
            )
        });

    }


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
                        {GetString().uploadImage}
                    </Text>


                    <Text style={[styles.innerTitle, {
                        color: colors.acountInnerTitleColor,
                    }]}>
                        {GetString().uploadDes}

                    </Text>

                    {this.viewImages()}


                    <TouchableHighlight
                        style={{ alignSelf: 'center', }}
                        onPress={() => this.uploadUserPic()}
                        underlayColor={'transparent'}>
                        <ImageBackground
                            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjw-AcNC3CDPl1a9cSMySx0SyqS6dmbHOwJc-RRAWkN2RYJUCu&s' }}
                            style={styles.imgBackground}
                        >
                            <Icon
                                name={'image'}
                                size={50}
                                color={colors.acountInnerTitleColor}
                            />

                            <Text style={[styles.uploadtitle, {
                                color: colors.acountInnerTitleColor,
                            }]}>
                                {GetString().uploadTitle}
                            </Text>

                        </ImageBackground>
                    </TouchableHighlight>

                    <Button
                        title={GetString().confirmButton}
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

    confirmOnclick() {
        if (this.state.userPictures.length !== 0) {
            Actions.passport();
        } else {
            Alert.alert(
                '',
                GetString().imageAlert,
                [
                    { text: GetString().ok, onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
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


    buttonStyle: {
        width: widthScreen / 2 - 30,
        alignSelf: 'center',
        marginTop: 32
    },
    imageStyle: {
        width: widthScreen - 40,
        height: widthScreen / 2,
        alignSelf: 'center'
    },
    imgContainer: {
        margin: 16,
        borderWidth: 1,
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
export { UploadImage };