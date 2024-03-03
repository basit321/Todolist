import { Colors } from '../../assets';
import { FontSize, UtilityMethods } from '../../utility';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.BORDER_GRAY,
    height:UtilityMethods.hp(6),
    borderRadius: 10,
    paddingHorizontal:UtilityMethods.wp(3),
     alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    
    
    
  },
  input: {
    width: '90%',
    color: Colors.BLACK,
    backgroundColor:Colors.WHITE,
    fontSize:FontSize.VALUE(20),
    

  },
  selectText:{
    color:Colors.BLACK,
    fontSize:FontSize.VALUE(20),
   

  },
  dateCont:{
    width: '100%',
    height: '100%',
   
  
  },
  labelText: {
    fontSize: FontSize.VALUE(25),
    color: Colors.BORDER_GRAY,
    marginBottom:UtilityMethods.hp(1),
    fontWeight:"700",
    marginLeft:UtilityMethods.wp(1),
   

  },
  mainCont: {
    width: '100%',
    marginTop:UtilityMethods.hp(2),
  },
  eyeIcon: {
    width: UtilityMethods.wp(6),
    height: UtilityMethods.wp(6),
    resizeMode: 'contain',
  tintColor:Colors.BORDER_GRAY
  },
  eyeCont:{
 
  zIndex:1,
   
  },
  errorMessage:{
    color:Colors.RED,
    fontSize:FontSize.VALUE(20),
    marginTop:UtilityMethods.hp(1),
    marginLeft:UtilityMethods.wp(1),
    fontWeight:"600"
  
  },
  modalCont:{
    flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:"flex-end",alignItems:'center'
  },
  modalRow:{
    width: '100%',
    flexDirection:"row",
    justifyContent:"space-between",
  
    paddingBottom:UtilityMethods.hp(1)
  },
  pickerCont:{
    width: '99%',
    height: '45%',
    paddingTop:UtilityMethods.hp(2),
    backgroundColor:Colors.WHITE,
    borderTopLeftRadius:UtilityMethods.hp(2),
    borderTopRightRadius:UtilityMethods.hp(2),
    paddingHorizontal:UtilityMethods.wp(3),
  },
  closeIcon:{
    width:UtilityMethods.hp(3),
    height:UtilityMethods.hp(3)
  }



});

export default styles;
