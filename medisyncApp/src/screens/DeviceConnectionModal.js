import React, { useCallback } from "react"
import {
    FlatList,
    Modal,
    SafeAreaView,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native"

const DeviceModalListItem = props => {
    const { item, connectToPeripheral, closeModal } = props

    const connectAndCloseModal = useCallback(() => {
        connectToPeripheral(item.item)
        closeModal()
    }, [closeModal, connectToPeripheral, item.item])

    return (
        <TouchableOpacity
            onPress={connectAndCloseModal}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{item.item.name}</Text>
        </TouchableOpacity>
    )
}

const DeviceModal = props => {
    const { devices, visible, connectToPeripheral, closeModal } = props

    const renderDeviceModalListItem = useCallback(
        item => {
            return (
                <DeviceModalListItem
                    item={item}
                    connectToPeripheral={connectToPeripheral}
                    closeModal={closeModal}
                />
            )
        },
        [closeModal, connectToPeripheral]
    )

    return (
        <Modal
            style={styles.modalContainer}
            animationType="slide"
            transparent={false}
            visible={visible}
        >
            <SafeAreaView style={styles.modalTitle}>
                <Text style={styles.modalTitleText}>
                    Tap on a device to connect
                </Text>
                <FlatList
                    contentContainerStyle={styles.modalFlatlistContiner}
                    data={devices}
                    renderItem={renderDeviceModalListItem}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        closeModal();
                    }}
                >
                    <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    modalFlatlistContiner: {
        flex: 1,
        justifyContent: "center"
    },
    modalCellOutline: {
        borderWidth: 1,
        borderColor: "black",
        alignItems: "center",
        marginHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 8
    },
    modalTitle: {
        flex: 1,
        backgroundColor: "#f2f2f2"
    },
    modalTitleText: {
        marginTop: 40,
        fontSize: 30,
        fontWeight: "bold",
        marginHorizontal: 20,
        textAlign: "center"
    },
    button: {
        elevation: 4,
        backgroundColor: "#61DBFB",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default DeviceModal
