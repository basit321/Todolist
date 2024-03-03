import { Colors } from "../../../assets";
import { CommonStyles,FontSize,UtilityMethods } from "../../../utility";

const { StyleSheet } = require("react-native");


const styles = StyleSheet.create({
    header:{
        flex:UtilityMethods.hasNotch()?0.15:0.1,
      paddingHorizontal:UtilityMethods.wp(5),
        borderBottomWidth:1,
        borderBottomColor:Colors.PLACE_HOLDER_COLOR,
        paddingBottom:UtilityMethods.hp(2),
        justifyContent:"flex-end"


        

    },
    body:{
        flex:1,
        backgroundColor:Colors.WHITE,
        //paddingHorizontal:UtilityMethods.wp(5),

      
    },
    title:{
        fontSize:FontSize.VALUE(25),
        fontWeight:"500",
        color:Colors.BLACK,
        fontStyle:"italic"
    
    },
    logoutButton:{
        backgroundColor:Colors.WHITE,
       borderRadius:UtilityMethods.wp(100),
       width:UtilityMethods.wp(10),
         height:UtilityMethods.wp(10),

        justifyContent:"center",
        alignItems:"center",
        
        shadowColor:Colors.BLACK,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.15,
        shadowRadius:3.84,
        elevation:5

       
    
    },
    rowView:{
        flexDirection: 'row',
        alignItems: 'center',
         backgroundColor:Colors.WHITE,
        justifyContent: 'space-between',
        shadowColor: Colors.BLACK,
        
    },
    logoutIcon:{
        width:UtilityMethods.wp(6),
        height:UtilityMethods.wp(6),
       
        tintColor:Colors.BLACK
    },
    MenuRow:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:UtilityMethods.hp(2),
       
    },
    menuItem:(index)=>({
        backgroundColor:Colors.WHITE,
        borderRadius:UtilityMethods.wp(2),
        padding:UtilityMethods.wp(3),
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        
        marginLeft:index==0?UtilityMethods.wp(5):UtilityMethods.wp(2),
        shadowColor:Colors.BLACK,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.15,
        shadowRadius:3.84,
        elevation:5
    }),
    icon:{
        width:UtilityMethods.wp(5),
        height:UtilityMethods.wp(5),
        tintColor:Colors.PRIMARY
    },
    itemText:{
        fontSize:FontSize.VALUE(18),fontWeight:"400",color:Colors.BLACK,
        marginLeft:UtilityMethods.wp(2)
    },
    emptyComp:{
        flex:1,
       // justifyContent:"center",
        alignItems:"center",
        paddingTop:UtilityMethods.hp(20)
    },
    emptyCart:{
        width:UtilityMethods.wp(50),
        height:UtilityMethods.wp(40),
       
    },
    emptyText:{
        fontSize:FontSize.VALUE(20),
        fontWeight:"500",
        color:Colors.TEXT_GRAY,
       
    },
    taskCard:{
        width:UtilityMethods.wp(90),
        height:UtilityMethods.hp(15),
        backgroundColor:Colors.WHITE,
        borderRadius:UtilityMethods.wp(3),
        alignSelf:"center",
        marginTop:UtilityMethods.hp(2),
        
       
        shadowColor:Colors.BLACK,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.15,
        shadowRadius:3.84,
        elevation:5,
        paddingHorizontal:UtilityMethods.wp(4),
        paddingTop:UtilityMethods.hp(1.2),
    },
    firstHalf:{
      flex:0.6,
        
        borderBottomWidth:1,
        borderBottomColor:Colors.BORDER_COLOR,
        flexDirection:"row",

     

    },
    secondHalf:{
        flex:0.4,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        // backgroundColor:"blue"
    },
    taskTitle:{
        fontSize:FontSize.VALUE(20),
        fontWeight:"500",
        color:Colors.BLACK,
        

    },
    taskDes:{
        fontSize:FontSize.VALUE(14),
        fontWeight:"400",
        color:Colors.TEXT_GRAY,
        marginTop:UtilityMethods.hp(0.5)
        
    
        

    },
    taskTitleCont:{
        width:UtilityMethods.wp(60),
  

    },
    tasKMenuAndSwitch:{
width:UtilityMethods.wp(20),
     

    },
    menuIcon:{
        width:UtilityMethods.wp(2),
        height:UtilityMethods.wp(5),
        tintColor:Colors.BLACK,
        alignSelf:"flex-end"
    },
    switchCont:{
         marginTop:UtilityMethods.hp(2),
         alignSelf:"flex-end"
    },
    statusCont:{
        width:UtilityMethods.wp(25),
        height:UtilityMethods.wp(8),
        backgroundColor:Colors.PRIMARY,
        borderRadius:UtilityMethods.wp(1),
        justifyContent:"center",
        alignItems:"center"

    },
    addTask:{
        width:UtilityMethods.wp(15),
        height:UtilityMethods.wp(15),
        borderRadius:UtilityMethods.wp(100),
        backgroundColor:Colors.PRIMARY,
        justifyContent:"center",
        alignItems:"center",
        shadowColor:Colors.BLACK,
        shadowOffset:{width:0,height:2},
        shadowOpacity:0.15,
        shadowRadius:3.84,
        elevation:5,
        position:"absolute",
        bottom:UtilityMethods.hp(6),
        right:UtilityMethods.wp(5),
        zIndex:100
    

    },
    plusIcon:{
        width:UtilityMethods.wp(5),
        height:UtilityMethods.wp(5),
        tintColor:Colors.WHITE
    },


})

export default styles;