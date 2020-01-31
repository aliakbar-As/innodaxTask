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
        return (
            <View style={[styles.container, extraStyles]}>
                    {/* <Icon
                        name={iconName}
                        color={iconColor}
                        size={iconSize}
                        onPress={clearOnpress}
                    /> */}

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
const styles = {
  
    onclicks: {
        padding: 15,
        margin: -15,
    },
    input: {
        width: '100%',
        height: 40,
        fontFamily: 'num',
        textAlign: 'left',
    },
    container: {
        borderWidth: 1,
        borderColor: '#ddd',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        padding: 5,
        height: 45,
        paddingHorizontal: 16,
        borderRadius: 1,
        marginVertical: 10,
    }
};
export { Input }