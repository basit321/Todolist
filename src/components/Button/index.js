import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import { Colors } from '../../assets'

const Button = ({
    onPress,
    buttonStyle,
    disabled,
    label,
    loading
}) => {
  return (
    <TouchableOpacity
    disabled={loading?true:false}
    onPress={onPress}
    style={[{...styles.mainCont,
    backgroundColor:loading?Colors.BORDER_GRAY:Colors.PRIMARY,
    },buttonStyle,]}
    >
    
    <Text style={styles.labelText}>
      
      {
        loading?
        "Please wait ...":
        label
      }</Text>
    </TouchableOpacity>
   
  )
}

export default Button