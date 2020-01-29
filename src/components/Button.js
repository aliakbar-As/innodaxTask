import React from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

const Button = ({
    onPress,
    title,
    extraStyles,
    onPressIn,
    onPressOut,
    activeOpacity,
    extraTitleStyles,
    disabled,
    back
}) => {
    if (back) {
        return (
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={activeOpacity}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[styles.bbutton, extraStyles]}
                onPress={onPress}>
                <Text style={[styles.btitle, extraTitleStyles]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <TouchableOpacity
                disabled={disabled}
                activeOpacity={activeOpacity}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
                style={[styles.button, extraStyles]}
                onPress={onPress}>
                <Text style={[styles.title, extraTitleStyles]}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    };
};
const styles = {
    bbutton: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        height: 45,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#C4C4C4',
    },
    btitle: {
        fontSize: 17,
        color: '#7D7D7D',
        fontFamily: 'IRANSansMobile_Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        flex: 1,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#63D385',
        height: 45,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#63D385',
    },
    title: {
        fontSize: 17,
        color: '#fff',
        fontFamily: 'IRANSansMobile_Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        flex: 1,
    }
}
export { Button };