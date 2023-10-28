import React, { useRef, useState, useEffect } from "react"
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Camera } from "expo-camera";

const UseCamera = ({ navigation }) => {
    const [cameraPermission, setCameraPermission] = useState(null)
    const [capture, setCapture] = useState(null)
    const [flash, setFlash] = useState(Camera.Constants.FlashMode.off)
    const cameraRef = useRef(null)

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            setCameraPermission(cameraStatus.status == 'granted');
        })();
    }, [])

    const takePicture = async () => {
        if (cameraRef) {
            try {
                const data = await cameraRef.current.takePictureAsync();
                setCapture(data.uri)
            } catch (e) {
                console.log(e)
            }
        }
    }

    const savePicture = async () => {
        if (cameraRef) {
            try {
                //data.uri to django
                setCapture(null)
                console.log('Upload success')
            } catch (e) {
                console.log(e)
            }
        }
    }

    if (cameraPermission === false) {
        return (
            <Text>No access to camera</Text>
        )
    } 

    return (
        <View style={styles.container}>
            {!capture ?
            <Camera
                style={styles.camera}
                    type={Camera.Constants.Type.back}
                flashMode={flash}
                ref={cameraRef}
            >
                
                <View style={{padding:30}}>
                    <TouchableOpacity
                            style={{
                                backgroundColor: "#000000",
                            }}
                        onPress={() => {
                            setFlash(flash === Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off);
                        }}>
                        <Ionicons style={{ marginRight: 10 }} name='flash-outline' size={28} color={'#ffffff'} />
                    </TouchableOpacity>
                </View>

                <View style={{
                            flexDirection: 'row',
                        }}>
                    <View style={{
                        flex:1,
                        borderWidth: 2,
                        borderColor: "#61DBFB",
                        backgroundColor: 'transparent',
                        borderRadius: 2,
                        paddingVertical: 120,
                        paddingHorizontal: 15,
                        marginLeft: 20,
                        marginRight: 40, 
                        marginVertical: 90,
                        alignItems:'center',
                    }}>
                        <Text style={{
                            color: '#ffffff',
                        }}>Calibration</Text>
                    </View>

                    <View style={{
                        flex:2,
                        borderWidth: 2,
                        borderColor: "#FF0000",
                        backgroundColor: 'transparent',
                        borderRadius: 2,
                        paddingHorizontal: 15,
                        marginRight: 20,
                        marginVertical: 20,
                        alignItems:'center',
                    }}>
                        <Text style={{
                            color: '#ffffff',
                        }}>Sample</Text>
                    </View>
                </View>

            </Camera>
            :
            <Image source={{uri: capture}} style={styles.camera}/>
            }

            {capture ?
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            savePicture;
                        }}>
                        <Ionicons style={{ marginRight: 10 }} name='cloud-upload-outline' size={28} color={'#ffffff'} />
                        <Text style={styles.buttonText}>Upload</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            :
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            takePicture();
                        }}>
                        <Ionicons style={{ marginRight: 10 }} name='camera' size={28} color={'#ffffff'} />
                        <Text style={styles.buttonText}>Take photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            }
            
            
        </View>
    );
};

export default UseCamera;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingBottom:20,
    },
    camera: {
        flex: 1,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        backgroundColor: "#000000",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 80,
        maxHeight: 45,
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});