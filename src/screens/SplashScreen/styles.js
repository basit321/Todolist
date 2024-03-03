import { StyleSheet } from "react-native";
import { Colors } from "../../assets";
import { CommonStyles,UtilityMethods,FontSize } from '../../utility'
 const styles=StyleSheet.create({
    container: {
        ...CommonStyles.container,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: UtilityMethods.wp(40),
        height: UtilityMethods.wp(40)
    },
    title: {
        fontSize: FontSize.VALUE(25),
        fontWeight: 'bold',
        color:Colors.BLACK,
        marginTop:UtilityMethods.hp(2),
        fontStyle:"italic"
    },
    loadingContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loading: {
        fontSize: FontSize.large,
        fontWeight: 'bold',
        color: Colors.PRIMARY,
    },
});
export default styles;