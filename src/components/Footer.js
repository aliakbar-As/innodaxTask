import React from 'react';
import {
    View,
} from 'react-native';

const Footer = ({
    children,
    extraStyles,

}) => {
    return (
        <View style={[styles.container, extraStyles]}>
            {children}
        </View>
    );
};
const styles = {
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 6,
        paddingBottom: 10,
    },
};

export { Footer };
