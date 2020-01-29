import React, { Component } from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/AntDesign';


const Input = ({
    placeholder,
    selectionColor,
    value,
    onChangeText,
    extraInpuStyles,
    keyboardType,
    returnKeyType,
    autoFocus,
    extraStyles,
    iconName,
    iconColor,
    iconSize,
    primary,
    placeholderTextColor,
    clearOnpress
}) => {
    if (primary) {
        return (
            <View style={[styles.pcontainer, extraStyles]}>

                <TextInput
                    autoFocus={autoFocus}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    style={[styles.input, extraInpuStyles]}
                    placeholder={placeholder}
                    selectionColor={selectionColor}
                    value={value}
                    placeholderTextColor={placeholderTextColor}
                    onChangeText={onChangeText}
                />
            </View>
        );
    } else {
        return (
            <View style={[styles.container, extraStyles]}>
                    <Icon
                        name={iconName}
                        color={iconColor}
                        size={iconSize}
                        onPress={clearOnpress}
                    />

                <TextInput
                    autoFocus={autoFocus}
                    returnKeyType={returnKeyType}
                    keyboardType={keyboardType}
                    style={[styles.input, extraInpuStyles]}
                    placeholder={placeholder}
                    selectionColor={selectionColor}
                    placeholderTextColor={placeholderTextColor}
                    value={value}
                    onChangeText={onChangeText}
                />
            </View>
        );
    };
};
const styles = {
    pcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#D1D1D1',
        borderRadius: 20,
        backgroundColor: '#FBFBFB',
        paddingHorizontal: 10,
        width: '100%',
        marginTop: 5
    },
    onclicks: {
        padding: 15,
        margin: -15,
    },
    input: {
        width: '100%',
        height: 40,
        fontFamily: 'num',
        textAlign: 'right',
    },
    container: {
        borderWidth: 2,
        borderColor: '#fff',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 5,
        height: 45,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginVertical: 10,
    }
};
export { Input }