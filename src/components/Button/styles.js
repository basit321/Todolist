import { Colors } from '../../assets';
import { FontSize, UtilityMethods } from '../../utility';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  mainCont: {
    width: '100%',
    height: UtilityMethods.hp(7),
    backgroundColor: Colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    
    
  },
 
  labelText: {
    fontSize: FontSize.VALUE(24),
    color: Colors.WHITE,
    fontWeight: '500',
   

  },
 

});

export default styles;
