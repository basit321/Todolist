import { Colors } from '../../assets';
import { FontSize, UtilityMethods } from '../../utility';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
flex:1,
    
    
    
  },


  labelText: {
    fontSize: FontSize.VALUE(20),
    color: Colors.BLACK,
    marginBottom:UtilityMethods.hp(1),
    fontWeight:"500",
    marginLeft:UtilityMethods.wp(1)

  },
  modalRow:{
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-between",
    
    paddingHorizontal:UtilityMethods.wp(3),
   
  },
 
  modalCont:{
    width: '99%',
    height: '30%',
    paddingTop:UtilityMethods.hp(2),
    backgroundColor:Colors.WHITE,
    borderTopLeftRadius:UtilityMethods.hp(2),
    borderTopRightRadius:UtilityMethods.hp(2),
  
  },
  modalItem:{
    width: '100%',
    height: UtilityMethods.hp(7),
    borderBottomWidth:1,
    borderBottomColor:"#E5E5E5",
    justifyContent:"center",
    alignItems:'center'

  },
  modalText:{
    fontSize:FontSize.VALUE(20),
    color:Colors.BLACK,
    fontWeight:"400"
  },
  closeIcon:{
    width:UtilityMethods.hp(3),
    height:UtilityMethods.hp(3)
  }


});

export default styles;
