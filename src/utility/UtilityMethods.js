import { Dimensions, PixelRatio, Platform } from "react-native";
let screenWidth = Dimensions.get("window").width;
let screenHeight = Dimensions.get("window").height;


/**
 * Helper Functions
 *
 * @class UtilityMethods
 */
class UtilityMethodsClass {
    hp = (height) => {
        const elemHeight = typeof height === "number" ? height : parseFloat(height);
        return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
    };
    wp = (width) => {
        const elemWidth = typeof width === "number" ? width : parseFloat(width);
        return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
    };

    hasNotch = () => {
        let d = Dimensions.get("window");
        const { height, width } = d;
        return (
            // This has to be iOS duh
            Platform.OS === "ios" &&
            // Accounting for the height in either orientation
            (height >= 812 || width >= 812)
        );
    };
    isIphoneX = () => {
        const dimen = Dimensions.get("window");
        return (
            Platform.OS === "ios" &&
            !Platform.isPad &&
            !Platform.isTVOS &&
            (dimen.height === 812 || dimen.width === 812)
        );
    };
    isEmailValid = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return reg.test(email);
    };
    isPasswordValid = (password) => {
        return password.length >= 6;
    };

}
    


const UtilityMethods = new UtilityMethodsClass();

export default UtilityMethods;
