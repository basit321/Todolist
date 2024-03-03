import React from "react";
import { ActivityIndicator, Modal, Text, View } from "react-native";

import { Colors } from "../../assets";
import { FontSize, UtilityMethods } from "../../utility";

const ANIM_SPEED = 2.0;

const Loader = ({ visible,showIndicator=false }) => {
    return (

        <Modal transparent={true} onRequestClose={() => null} visible={visible}>
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             {showIndicator && 
             <>
             <ActivityIndicator size="large"color={Colors.PRIMARY} style={{marginTop:UtilityMethods.hp(5)}} />
             <Text
                style={{
                    color: Colors.TEXT_GRAY,
                    fontSize:FontSize.VALUE(20),
                    fontWeight:"500",
                    marginTop: UtilityMethods.hp(2)
                }}
            >
                Please wait...
            </Text>
                </> 
             
              
             }
            </View>
        </Modal>
    );
};

export default Loader;