import React, { Component } from 'react';
import {
    View
} from 'react-native';

const Line = ({
    extraStyles
}) => {
    return (
        <View style={[{
            height: 1,
            marginHorizontal: 10,
            marginTop: 10,
            backgroundColor: '#C3C3C3',
        }, extraStyles]} />
    )
}
export { Line }