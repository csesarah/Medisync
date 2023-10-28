import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from '../components/globalContext';

const SettingsPage = ({  }) => {
    const globalContext = useContext(Context)
    const { userObj, setIsLoggedIn } = globalContext;

    function logout() {
        setIsLoggedIn(false)
    }

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.label}>First Name</Text>
                <Text style={styles.input}>{userObj.first_name}</Text>
                
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.input}>{userObj.last_name}</Text>
                
                <Text style={styles.label}>Username</Text>
                <Text style={styles.input}>{userObj.username}</Text>
                

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        logout();
                    }}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default SettingsPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wrapper: {
        width: '80%',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    input: {
        marginBottom: 18,
        borderWidth: 1,
        borderColor: '#bbbbbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        paddingVertical: 8,
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