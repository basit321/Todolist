import { View, Text,Modal, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images } from '../../assets'

const CustomModal = ({visible,data,onCLose,onPressItem,title}) => {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={visible}
    onRequestClose={onCLose}
    >
    <TouchableOpacity style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',justifyContent:"flex-end",alignItems:'center'}}
    onPress={onCLose}
    activeOpacity={1}
    >
     <View style={styles.modalCont}>
        <View style={styles.modalRow}> 
       <Text style={styles.labelText}>{title}</Text>
         <TouchableOpacity
            onPress={onCLose}
            >
              <Image source={Images.CLOSE} style={styles.closeIcon}/>
            </TouchableOpacity>
        </View>
        <View style={{height:5}}/>
         {data.map((item,index)=>(
            <TouchableOpacity style={styles.modalItem} key={index}
            onPress={()=>onPressItem(item)}
            >
              <Text style={styles.modalText}>{item.title}</Text>
            </TouchableOpacity>
         ))}
     </View>
    </TouchableOpacity>
    </Modal>



  )
}

export default CustomModal