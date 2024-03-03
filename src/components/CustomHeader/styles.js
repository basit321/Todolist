import { Colors } from '../../assets';
import { FontSize, UtilityMethods } from '../../utility';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainCont: {
    width: '100%',
    height:UtilityMethods.hasNotch() ? UtilityMethods.hp(12) : UtilityMethods.hp(10),
    backgroundColor: Colors.WHITE,
    
    
    
  },
  insideCont:
  {
    flexDirection:'row',
    alignItems:"flex-end",
    justifyContent:'space-between',

    height:'100%',

  },
  firstHaf:
  {
    flexDirection:'row',
    alignItems:'center',
    
    flex:0.5,
   
  },
  backIcon: {
    width: UtilityMethods.hp(3),
    height: UtilityMethods.hp(3),
    resizeMode: 'contain',
    tintColor: Colors.PRIMARY,

    
  },

 
  labelText: {
    fontSize: FontSize.VALUE(25),
    color: Colors.BLACK,
    fontWeight: '400',

   
   

  },
 

});

export default styles;
