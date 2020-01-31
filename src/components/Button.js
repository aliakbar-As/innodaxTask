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
const styles = {
    
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#7577FF',
        height: 45,
        // borderWidth: 1,
        // borderColor: '#7577FF',
    },
    title: {
        fontSize: 17,
        color: '#fff',
        // fontFamily: 'IRANSansMobile_Bold',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'center',
        flex: 1,
    }
}
export { Button };