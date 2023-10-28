import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GraphPage = ({ }) => {
    return (
        <View style={styles.container}>
            <Text>Graph</Text>
        </View>
    );
};

export default GraphPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});