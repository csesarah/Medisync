import React, { useContext, useState } from 'react';
import { Dimensions, Text, Image, TextInput, TouchableOpacity, View, StyleSheet, } from 'react-native';
import { Context } from '../components/globalContext';

const win = Dimensions.get('window');

const LoginPage = ({ navigation }) => {
    const globalContext = useContext(Context)
    const { setIsLoggedIn, domain, setToken, setUserObj } = globalContext;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    function login() {
        setError("")

        let body = JSON.stringify( {
            'username': email.toLowerCase(),
            'password': password,
        })

        fetch(`${domain}/api/user/login-user`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: body,
        }).then(
            res => {
                if (res.ok) {
                    return res.json()
                } else {
                    setError("Invalid username/password.")
                    throw res.json()
                }
            }
        ).then(
            json => {
                setUserObj(json)
                setToken(json.token)
                setIsLoggedIn(true)
            }
        ).catch(
            error => {
                console.log(error)
            }
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Image
                    style={{
                        height: win.width * .3,
                        resizeMode: "contain",
                        alignSelf: "center",
                        marginBottom: 50,
                    }} source={require("../rsc/img/logo.png")}
                />

                <Text style={{
                    flexDirection: 'row',
                    marginBottom: 20,
                    fontWeight: 'bold',
                    fontSize: 24,
                    textAlign: 'center',
                }}>Login</Text>

                <Text style={{
                    color: 'red',
                    marginBottom: 15,
                    fontSize: 14,
                    textAlign: 'left',
                }}>{error}</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    placeholder="Enter email"
                    autoCompleteType="email"
                    onChangeText={text => setEmail(text)}
                />

                <TextInput
                    style={styles.input}
                    value={password}
                    placeholder="Enter password"
                    autoCompleteType="password"
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        login();
                    }}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>
                    <Text>Don't have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={styles.link}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    input: {
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        paddingVertical: 5,
    },
    link: {
        color: '#61DBFB',
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
});

export default LoginPage;