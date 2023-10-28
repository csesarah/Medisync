import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";

const InfoPage = ( ) => {

    const [showValue, setShowValue] = useState(false);
    const [contentTitle, setContentTitle] = useState("");
    const [contentDesc, setContentDesc] = useState("");

    function display(title, desc) {
        setContentTitle(title);
        setContentDesc(desc);
        setShowValue(!showValue)
    }

    const details = [
        {
            title: "MediSync Bandage",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Integer nec dolor eu metus semper gravida.Phasellus viverra turpis id odio semper aliquet.Praesent ultrices tincidunt mauris.Proin interdum eget tortor in finibus.In dignissim ultrices elit id vulputate.Sed sed nisl lacus.In et fringilla lacus.Cras aliquet, quam quis elementum gravida, nunc ante interdum felis, vel vulputate orci risus et nunc.Quisque vulputate risus in dictum porta.Donec blandit rhoncus urna, suscipit maximus est porta fermentum.Phasellus id nisl sit amet diam sodales eleifend.Etiam a purus in nibh pretium tincidunt.Integer quis nunc tortor.Pellentesque blandit rutrum iaculis. Mauris iaculis, urna ac consectetur facilisis, orci justo condimentum neque, eget dictum enim mi a quam.Nunc sed sodales neque.Vestibulum dolor nibh, auctor eget augue quis, ullamcorper mollis enim.Curabitur non sem arcu.Interdum et malesuada fames ac ante ipsum primis in faucibus.Curabitur purus nisl, bibendum placerat ante consequat, dictum lobortis ex.Maecenas libero ligula, porta vel enim in, scelerisque scelerisque mi.Suspendisse malesuada justo et nisl iaculis dictum.Sed non malesuada magna, commodo volutpat libero.Quisque finibus ligula vel nisi tristique dictum.Integer elit erat, mollis vel mi vitae, laoreet fringilla risus.Nam arcu enim, rutrum nec odio ac, sagittis tristique tortor.Vestibulum id pulvinar est.Cras malesuada elementum nibh, laoreet consectetur erat rutrum a.Morbi in ornare lectus, sit amet facilisis purus.Proin posuere lacus at suscipit pharetra. Cras iaculis feugiat est, non viverra lorem eleifend quis.Nullam orci dolor, lobortis et viverra et, rhoncus vitae nisi.Ut pellentesque mi quis lorem lobortis convallis.Pellentesque rhoncus nisl in justo malesuada feugiat.Nulla nec massa imperdiet, blandit velit a, volutpat turpis.Sed quis rhoncus nisl, et semper tortor.Quisque fermentum, nulla quis accumsan suscipit, turpis est imperdiet ipsum, vitae fermentum ante justo id massa.Cras ac elementum ipsum.Mauris in gravida quam.Vivamus id fringilla velit.Mauris eget vestibulum leo.Vivamus tristique vestibulum dolor sit amet commodo.Ut cursus interdum dapibus. Nunc arcu orci, pretium id nunc laoreet, laoreet elementum sem.Nam sagittis quis dui sed semper.Morbi fermentum eu nibh auctor imperdiet.Nulla consectetur, metus ut euismod ultrices, purus libero tincidunt orci, eleifend posuere nibh diam id est.Phasellus iaculis, risus sed porta malesuada, ipsum leo facilisis est, id commodo augue purus vel mauris.Fusce molestie, lacus et maximus lobortis, lectus nisl convallis libero, in molestie augue tortor quis ipsum.Duis vitae aliquet est.Mauris sodales sit amet nisl quis tempus.Morbi ornare lacus ex, eu ornare velit imperdiet vel.Integer consectetur ex sed lorem congue malesuada.Etiam finibus, dolor quis rutrum tempus, odio dui mollis dolor, nec convallis nunc augue quis purus.Suspendisse mollis risus eu sapien fermentum, sed scelerisque sapien lacinia.Vestibulum ac eros placerat, suscipit justo nec, euismod tellus.Fusce et suscipit nisl. Donec egestas rhoncus ullamcorper.Aenean vel nunc urna.Nunc urna est, tempus et tempor ut, malesuada et orci.Vivamus quis leo arcu.Pellentesque rutrum aliquet velit, quis scelerisque odio blandit sit amet.Curabitur congue rutrum mattis.Ut tincidunt interdum rutrum.Pellentesque ultrices elit et magna blandit, sit amet rhoncus quam molestie.Proin a dignissim libero.Sed pellentesque, ipsum eget pharetra consectetur, turpis nisl tempor eros, nec dictum leo justo quis ante.Ut elit velit, euismod vitae massa eu, lacinia tincidunt arcu.Suspendisse potenti.",
        },
        {
            title: "Wound Care",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
            title: "Change Dressing",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
            title: "Showering",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
        {
            title: "When to Call a Doctor",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
        },
    ];

    return (
        <View style={styles.container}>
            {(!showValue) ?
            details.map((detail) => {
                return (
                        <TouchableOpacity
                            key={detail.title}
                            style={styles.button}
                            onPress={() => {
                                display(detail.title, detail.desc);
                            }}
                        >
                            <Text style={styles.buttonText}>{detail.title}</Text>
                        </TouchableOpacity>
                );
            })
            :
                <>
                <View style={styles.container}>
                    <View style={{
                        marginTop: 50,
                        alignSelf: 'flex-start',
                        flexDirection: 'row'
                    }}>
                        <TouchableOpacity
                            style={styles.smallButton}
                            onPress={() => {setShowValue(!showValue)}}
                            >
                            <Text style={styles.smallButtonText}>Back</Text>
                        </TouchableOpacity>

                        <Text style={styles.infoTitle}>{contentTitle}</Text>
                    </View>

                    <ScrollView style={{
                        alignSelf: 'flex-start',
                    }}>
                        <Text style={styles.infoDesc}>{contentDesc}</Text>
                    </ScrollView>
                </View>
                </>
            }
        </View>
    );
};

export default InfoPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        backgroundColor: "#61DBFB",
        borderRadius: 5,
        paddingVertical: 15,
        marginVertical: 20,
        width: '80%',
    },
    smallButton: {
        flex: 1,
        backgroundColor: "#61DBFB",
        borderRadius: 5,
        paddingVertical: 5,
        marginLeft: 20,
        marginVertical: 5,
        width: 2,
    },
    buttonText: {
        fontSize: 18,
        color: "#fff",
        alignSelf: "center",
        textTransform: "none"
    },
    smallButtonText: {
        fontSize: 15,
        color: "#fff",
        alignSelf: "center",
        textTransform: "none"
    },

    infoTitle: {
        flex: 2,
        fontSize: 18,
        marginHorizontal: 50,
        fontWeight: 'bold',
        textAlign: 'left',
        textAlignVertical: 'center'
    },
    infoDesc: {
        fontSize: 15,
        textAlign: 'left',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
});