import React from "react";
import {
    Image,
    Modal,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator
} from "react-native";

const ModalComponent = ({
    show,
    onPressCheck,
    title,
    flag,
    flagTitle
}) => {
    return (
        <Modal
            animationType="fade"
            transparent
            visible={show}>

            <View style={styles.modalView}>
                <View style={styles.innerContainer}>
                    <View style={styles.innerCountryContainer}>
                        <Image
                            source={flag}
                            style={styles.flagIcons}
                        />

                        <Text style={[styles.hdrCardsectionTitle, { fontSize: 15, marginLeft: 10 }]}>
                            {flagTitle}
                        </Text>
                    </View>
                </View>

            </View>
        </Modal>
    )
};
const styles = {
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
    mainTitleStyles: {
        fontFamily: 'num',
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        marginTop: 16,
    },
    innerContainer: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.8)',
        flex: 1,
        //height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
};
export { ModalComponent };