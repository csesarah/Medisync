import { useMemo, useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import { BleError, BleManager, Characteristic, Device, }from "react-native-ble-plx";
import * as ExpoDevice from "expo-device";
import base64 from "react-native-base64";

const DEVICE_NAME = "Medisync"
const SENSOR_UUID = "0000180C-0000-1000-8000-00805F9B34FB"; //convert 16-bit UUID from Arduino to 128-bit
const SENSOR_CHARACTERISTIC = "00002A56-0000-1000-8000-00805F9B34FB"; //convert 16-bit UUID from Arduino to 128-bit

function useBLE() {
    const bleManager = useMemo(() => new BleManager(), [])
    const [ allDevices, setAllDevices ] = useState([])
    const [ connectedDevice, setConnectedDevice ] = useState(null)
    const [ temperature, setTemperature ] = useState("");
    const [ humidity, setHumidity ] = useState("");

    const requestAndroid31Permissions = async () => {
        const bluetoothScanPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
            {
                title: "Location Permission",
                message: "Location required to scan for nearby Bluetooth devices.",
                buttonPositive: "OK"
            }
        )
        const bluetoothConnectPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
            {
                title: "Location Permission",
                message: "Location required to scan for nearby Bluetooth devices.",
                buttonPositive: "OK"
            }
        )
        const fineLocationPermission = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Location Permission",
                message: "Location required to scan for nearby Bluetooth devices.",
                buttonPositive: "OK"
            }
        )

        return (
            bluetoothScanPermission === "granted" &&
            bluetoothConnectPermission === "granted" &&
            fineLocationPermission === "granted"
        )
    }

    const requestPermissions = async () => {
        if (Platform.OS === "android") {
            if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                    {
                        title: "Location Permission",
                        message: "Location required to scan for nearby Bluetooth devices.",
                        buttonPositive: "OK"
                    }
                )
                return granted === PermissionsAndroid.RESULTS.GRANTED
            } else {
                const isAndroid31PermissionsGranted = await requestAndroid31Permissions()

                return isAndroid31PermissionsGranted
            }
        } else {
            return true
        }
    }

    const isDuplicteDevice = (devices, nextDevice) =>
        devices.findIndex(device => nextDevice.id === device.id) > -1

    const scanForPeripherals = () =>
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.log(error)
            }
            if (device && device.name?.includes(DEVICE_NAME)) {
                setAllDevices(prevState => {
                    if (!isDuplicteDevice(prevState, device)) {
                        return [...prevState, device]
                    }
                    return prevState
                })
            }
        })

    const connectToDevice = async device => {
        try {
            const deviceConnection = await bleManager.connectToDevice(device.id)
            setConnectedDevice(deviceConnection)
            await deviceConnection.discoverAllServicesAndCharacteristics()
            bleManager.stopDeviceScan()
            startStreamingData(deviceConnection)
        } catch (e) {
            console.log("FAILED TO CONNECT", e)
        }
    }

    const disconnectFromDevice = () => {
        if (connectedDevice) {
            bleManager.cancelDeviceConnection(connectedDevice.id)
            setConnectedDevice(null)
            setTemperature("")
            setHumidity("")
        }
    }

    const onSensorUpdate = (error, characteristic) => {
        if (error) {
            console.log(error)
            return -1
        } else if (!characteristic?.value) {
            console.log("No Data was recieved")
            return -1
        }

        const rawData = base64.decode(characteristic.value)
        console.log(rawData);
        let dataArray = text.split(",");
        setTemperature(dataArray[1]);
        setHumidity(dataArray[3]);
    }

    const startStreamingData = async device => {
        if (device) {
            device.monitorCharacteristicForService(
                SENSOR_UUID,
                SENSOR_CHARACTERISTIC,
                onSensorUpdate
            )
        } else {
            console.log("No Device Connected")
        }
    }

    return {
        scanForPeripherals,
        requestPermissions,
        connectToDevice,
        allDevices,
        connectedDevice,
        disconnectFromDevice,
        temperature,
        humidity,
    }
}

export default useBLE
