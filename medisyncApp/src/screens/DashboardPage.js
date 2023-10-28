import React, { useContext, useState } from "react"
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Context } from '../components/globalContext';
import DeviceModal from "./DeviceConnectionModal"
import useBLE from "./useBLE"

const DashboardPage = ({ navigation }) => {
    const globalContext = useContext(Context)
    const { userObj } = globalContext;

    const [pH, setpH] = useState("");
    
    const {
        requestPermissions,
        scanForPeripherals,
        allDevices,
        connectToDevice,
        connectedDevice,
        temperature,
        humidity,
        disconnectFromDevice
    } = useBLE()
    const [isModalVisible, setIsModalVisible] = useState(false)

    const scanForDevices = async () => {
        const isPermissionsEnabled = await requestPermissions()
        if (isPermissionsEnabled) {
            scanForPeripherals()
        }
    }

    const hideModal = () => {
        setIsModalVisible(false)
    }

    const openModal = async () => {
        scanForDevices()
        setIsModalVisible(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1, justifyContent:'center', paddingBottom:15,}}>
                <Text style={{ fontSize: 18, marginTop:10}}>Hello, </Text>
                <Text style={{ fontWeight: "bold", fontSize: 22, marginBottom:10, }}>{userObj.first_name} {userObj.last_name}</Text>
                <Text>
                    <Ionicons name='pulse-outline' size={20} color={'#777777'} />
                </Text>
            </View>

            <View style={{flex: 1, justifyContent:'center', paddingBottom:25,}}>
                <View style={{ flex: 1, alignItems: 'center', flexDirection: 'row', }}>
                    <View style={{ flex: 4,}}>
                        <Text style={styles.text}>
                            {connectedDevice ? "Medisync device connected" : "Please connect to a \nMedisync device"}
                        </Text>
                    </View>
                    <View style={{ flex: 2, }}>
                        <TouchableOpacity
                            onPress={connectedDevice ? disconnectFromDevice : openModal}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>
                                {connectedDevice ? "Disconnect" : "Connect"}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <DeviceModal
                closeModal={hideModal}
                visible={isModalVisible}
                connectToPeripheral={connectToDevice}
                devices={allDevices}
            />

            <View style={{flex: 5, justifyContent:'center', paddingBottom:15,}}>
                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom:20, }}>Measurement: </Text>
                <View style={{ flex: 1, marginBottom: 40,}}>
                    <View style={styles.flexRow}>
                        <View style={styles.sensorParamContainer}>
                            <Text style={styles.sensorParam}>Temperature:</Text>
                            <Text style={styles.sensorParamValue}>{temperature} &deg; C</Text>
                        </View>
                        <View style={styles.sensorParamContainer}>
                            <Text style={styles.sensorParam}>Humidity:</Text>
                            <Text style={styles.sensorParamValue}>{humidity} %</Text>
                        </View>
                    </View>
                    <View style={styles.flexRow}>
                        <View style={styles.sensorParamContainer}>
                            <Text style={styles.sensorParam}>pH:</Text>
                            <Text style={styles.sensorParamValue}>{pH}</Text>
                        </View>
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('Camera')}
                            style={styles.sensorParamContainer}>
                            <Text style={styles.sensorParam}>
                                Measure pH
                            </Text>
                            <Ionicons name='camera' size={40} color={'#777777'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{ flex: 1, justifyContent: 'center', paddingBottom: 15, }}>
                <Text style={{ fontWeight: "bold", fontSize: 18, marginBottom: 20, }}>Recommended Action: </Text>
                <Text style={{
                    borderWidth: 2,
                    borderColor: "#61DBFB",
                    backgroundColor: "#ffffff",
                    borderRadius: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 16,
                }}>
                    <Text style={{color: '#ffffff',}}>
                        
                    </Text>
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 25,
        paddingVertical: 50,
    },
    flexRow: {
        flex: 1,
        flexDirection: 'row',
    },
    sensorParamContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#cccccc',
        borderRadius: 15,
        marginHorizontal: 10,
        marginBottom: 20,
    },
    sensorParam: {
        marginBottom: 10,
    },
    sensorParamValue: {
        fontSize: 28,
    },
    text: {
        fontSize: 15,
        textAlign: 'left',
    },
    button: {
        elevation: 4,
        backgroundColor: "#61DBFB",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 16,
        maxHeight: 45,
    },
    buttonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
})

export default DashboardPage
