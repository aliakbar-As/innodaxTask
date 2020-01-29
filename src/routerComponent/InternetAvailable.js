import React from "react";
import {
    Image,
    Modal,
    Text,
    TouchableOpacity,
    View
} from "react-native";


const InternetAvailable = ({
    show,
    onPressCheck
}) => {
    return (
        <View>
            <Modal
                animationType="fade"
                transparent
                visible={show}>

                <View style={styles.modalView}>
                    <View style={styles.modal_internet}>
                        <View style={styles.modal_internet_title}>

                            <Image
                                source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD4s1PWRtxdf82SO-KrYHERCTPcV8zshTSN1M0NT79-OJLSy-ohA&s'}}
                                style={{ height: 65, width: 65 }} />

                            <Text style={styles.title}>
                                عدم دسترسی به اینترنت!
                            </Text>
                        </View>

                        <View style={styles.view}>

                            <Text style={styles.checkTitle}>
                                لطفا دسترسی خود به اینترنت را بررسی کنید.
                                </Text>

                            <TouchableOpacity
                                onPress={onPressCheck}>
                                <View style={styles.tryContainer}>
                                    <Text style={styles.tryTtitle}>
                                        سعی مجدد
                                        </Text>
                                </View>
                            </TouchableOpacity>

                        </View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};
const styles = {
    modal_internet_title: {
        backgroundColor: '#000',
        height: 150,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal_internet: {
        backgroundColor: '#fff',
        height: 300,
        width: 250,
        elevation: 3,
        // justifyContent:'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        flex: 1,
        //height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        color: '#fff',
        fontFamily: 'num'
    },
    checkTitle: {
        fontSize: 12,
        color: '#888888',
        fontFamily: 'num'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    tryContainer: {
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 5,
        marginTop: 20
    },
    tryTtitle: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'num',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
    },
}
export { InternetAvailable };