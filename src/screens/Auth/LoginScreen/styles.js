

const { StyleSheet } = require("react-native");
import { Colors } from "../../../assets";
import { CommonStyles,FontSize,UtilityMethods } from "../../../utility";

const styles = StyleSheet.create({
      logo:{
        width: UtilityMethods.wp(40),
        height: UtilityMethods.wp(40),
        alignSelf: 'center',
        marginTop:UtilityMethods.hp(15)

    },
    body:{
    
    },
    rowView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:UtilityMethods.hp(2)
    },
    normalText:{
        fontSize: FontSize.VALUE(20),
        color:Colors.TEXT_GRAY,
        fontWeight: '400'
    }
    

})

export default styles;