import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions
} from 'react-native';

const checkedIcon = require('../assets/images/checked.png');
const unChecked = require('../assets/images/unChecked.png');
const play = require('../assets/images/play.png');
const widthSize = Dimensions.get('window').width;

const CardSection = ({
    checked,
    title,
    onPress,
    disabled,
    video,
    image,
    extraStyles
}) => {
    if (video) {
        return (
            <ImageBackground
                source={image}
                style={[styles.backgroundColorStyle, extraStyles]}>

                <View style={styles.innerContainer}>

                    <Image
                        source={play}
                        style={styles.playIcon}
                    />

                    <Text style={styles.cardTitles}>
                        {title}
                    </Text>

                </View>

            </ImageBackground>
        );
    } else {
        return (
            <TouchableOpacity
                disabled={disabled}
                onPress={onPress}>
                <View style={[styles.container, extraStyles]}>
                    <Image
                        source={checked ? checkedIcon : unChecked}
                        style={styles.checkedImage}
                    />

                    <Text style={styles.titles}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    };
};
const styles = {
    cardTitles: {
        fontFamily: 'num',
        fontSize: 20,
        color: "#fff",
        textAlign: 'right',
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 16
    },
    playIcon: {
        width: 40,
        height: 40,
        alignSelf: 'flex-end',
        margin: 16
    },
    innerContainer: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        flex: 1,
        borderRadius: 20
    },
    backgroundColorStyle: {
        width: widthSize / 2 + 100,
        height: widthSize / 2,
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 16,
        marginTop: 16
    },
    container: {
        width: Dimensions.get('window').width - 16,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: '#D1D1D1',
        backgroundColor: '#FBFBFB',
        justifyContent: 'flex-start',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderRadius: 15,
        alignSelf: 'center',
        paddingHorizontal: 16,
        marginTop: 16
    },
    checkedImage: { height: 25, width: 25, alignSelf: 'flex-start', },
    titles: {
        fontFamily: 'num',
        color: '#B4B4B4',
        textAlign: 'right',
        marginRight: 16,
        fontSize: 16
    },
};

export { CardSection };