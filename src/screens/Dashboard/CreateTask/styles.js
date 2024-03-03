

const { StyleSheet } = require("react-native");
import { Colors } from "../../../assets";
import { CommonStyles,FontSize,UtilityMethods } from "../../../utility";

const styles = StyleSheet.create({
      logo:{
        width: UtilityMethods.wp(40),
        height: UtilityMethods.wp(40),
        alignSelf: 'center',
        marginTop:UtilityMethods.hp(8)

    },
    body:{
    
    },
    rowView:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:UtilityMethods.hp(3),
        justifyContent: 'space-between'
        
    },
    normalText:{
        fontSize: FontSize.VALUE(20),
        color:Colors.TEXT_GRAY,
        fontWeight: '400'
    },
    labelText:{
    fontSize: FontSize.VALUE(25),
    color: Colors.BORDER_GRAY,
    
    fontWeight:"700",

    },
   
    

})

export default styles;