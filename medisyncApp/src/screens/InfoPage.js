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

    function MediSyncBandageInfo() {
        return (
          <View style={{ width: '100%', paddingHorizontal: 0}}>
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"18%"}}>
              MediSync's Smart Abdominal Surgical Wound Bandage is designed to aid in wound healing and empower patients by providing valuable insights into their surgical wounds. This innovative bandage combines moisture and temperature monitoring capabilities to ensure optimal healing conditions.{"\n"}
            </Text>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"18%"}}>{"\n"}</Text>
            </View>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"18%"}}>{"\n"}</Text>
            </View>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"18%"}}>{"\n"}</Text>
            </View>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"18%"}}>{"\n"}</Text>
            </View>

            </View>
          </View>
        );
      }

    function DressingChange() {
        return (
          <View style={{ width: '100%', paddingHorizontal: 0}}>
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>When?{"\n"}</Text>
            <Text style={{width:"30%"}}>Change your dressing as often as your doctor says. Change it if it becomes wet or soaked with blood or other fluids.{"\n"}</Text>
            </View>
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>Things To Note{"\n"}</Text>
            <Text style={{width:"30%"}}>Do not touch the inside of your dressing.{"\n"}</Text>
            <Text style={{width:"30%"}}>Do not pull at your stitches or try to remove them on your own. Your doctor will do it for you.{"\n"}</Text>
            </View>

            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>Before{"\n"}</Text>
            <Text style={{width:"30%"}}>Wash your hands with soap and warm water before changing your dressing. Follow the 8-steps guide. Rinse, then dry your hands with a clean towel.{"\n"}</Text>
            {/* Image component would go here */}
            </View>

            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
              <Text style={{width:"30%"}}>Remove Old Dressing{"\n"}</Text>
              <Text style={{width:"30%"}}>1. Put on clean medical gloves if your wound is infected (red or oozing).{"\n"}</Text>
              <Text style={{width:"30%"}}>2. Carefully remove the dressing. If the dressing sticks to the wound, moisten it gently with water and try again, unless your doctor instructed you to remove it dry.{"\n"}</Text>
              <Text style={{width:"30%"}}>3. Remove your gloves and wash your hands again.{"\n"}</Text>
            </View>
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
              <Text style={{width:"30%"}}>Put On New Dressing{"\n"}</Text>
              <Text style={{width:"30%"}}>1. Apply any ointments that were prescribed to you.{"\n"}</Text>
              <Text style={{width:"30%"}}>2. Place the dressing over the wound and secure it.{"\n"}</Text>
              <Text style={{width:"30%"}}>3. Remove your gloves and wash your hands again.{"\n"}</Text>
            </View>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"30%"}}>{"\n"}</Text>
            </View>
          </View>
        );
      }

      function WoundCareInstructions() {
        return (
          <View style={{ width: '100%', paddingHorizontal: 0}} >
            <View style={{ width: '100%', paddingHorizontal: 0}} >
            <Text style={{width:"50%"}}>Avoid tight clothing as it can rub against the incision and slow healing.{"\n"}</Text>
            <Text style={{width:"50%"}}>Do not touch the inside of your dressing.{"\n"}</Text>
            <Text style={{width:"50%"}}>Do not pull at your stitches or try to remove them on your own. Your doctor will do it for you.{"\n"}</Text>
            <Text style={{width:"50%"}}>{"\n"}</Text>
            </View>
          </View>
        );
      }

      function StitchCareInstructions() {
        return (
          <View style={{ width: '100%', paddingHorizontal: 0}}>
            <View style={{ width: '100%', paddingHorizontal: 0}} >
            <Text style={{width:"30%"}}>If you have a dressing over your stitches, avoid getting it wet.{"\n"}</Text>
            <Text style={{width:"30%"}}>If you have been advised to keep your stitches dry, you could:{"\n"}</Text>
            <Text style={{width:"30%"}}>• Cover your stitches when you have a shower, with a waterproof dressing – you may be able to use a rubber glove or plastic bag if they will cover your wound.{"\n"}</Text>
            <Text style={{width:"30%"}}>• Have a wash standing up. Use a cloth to clean yourself and avoid your stitches.{"\n"}</Text>
            <Text style={{width:"30%"}}>If your stitches get wet, simply dry the area immediately with a clean towel and make sure all the moisture around the stitches is soaked up.{"\n"}</Text>
            </View>
          </View>
        );
      }

      function DoctorCallInstructions() {
        return (
          <View style={{ width: '100%', paddingHorizontal: 0}}>
            <View style={{ width: '100%', paddingHorizontal: 0}}>
              <Text style={{width:"32%"}}>Call a doctor If:{"\n"}</Text>
              <Text style={{width:"32%"}}>The app notifies you.{"\n"}</Text>
              <Text style={{width:"32%"}}>There is more redness, pain, swelling, or bleeding at the wound site than at the start.{"\n"}</Text>
              <Text style={{width:"32%"}}>The wound is larger or deeper, or it looks dried out or dark.{"\n"}</Text>
              <Text style={{width:"32%"}}>The drainage coming from or around the wound increases or becomes thick, tan, green, or yellow, or smells bad (which indicates pus).{"\n"}</Text>
              <Text style={{width:"32%"}}>Your temperature is 38.5°C (100°F) or higher.{"\n"}</Text>
              
            </View>
            
            
            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"32%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"32%"}}>{"\n"}</Text>
            </View>

            <View style={{ width: '100%', paddingHorizontal: 0}}>
            <Text style={{width:"32%"}}>{"\n"}</Text>
            </View>

          </View>
        );
      }

    const details = [
        {
            title: "MediSync Bandage",
            desc: MediSyncBandageInfo(),
        },
        {
            title: "Wound Care",
            desc: WoundCareInstructions(),
        },
        {
            title: "Change Dressing",
            desc: DressingChange(),
        },
        {
            title: "Showering",
            desc: StitchCareInstructions(),
        },
        {
            title: "When to Call a Doctor",
            desc: DoctorCallInstructions(),
        },
    ];

    return (
        <View  style={styles.container}>
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
                <View  style={styles.container}>
                    <View  style={{
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
    
    heading: {
        fontWeight: 'bold',
        fontSize: 20,
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

