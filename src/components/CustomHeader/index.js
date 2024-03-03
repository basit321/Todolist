import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Images } from '../../assets'
import { UtilityMethods } from '../../utility'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = ({
  label,
  showBack = true,
  rightItem

  
}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.mainCont}>
     <View style={styles.insideCont}>
     <TouchableOpacity style={styles.firstHaf}
     onPress={() => {
       if(showBack)
       {
        navigation.goBack()
       }
     }
      }
      disabled={!showBack}
     >
      {showBack&&
      <>
       <Image source={Images.BACK} style={styles.backIcon} />
       <View style={{marginLeft:UtilityMethods.hp(3)}}/>
      </>
      }
        <Text style={styles.labelText}>{
          label
        }</Text>
     </TouchableOpacity>
     </View>
     <View style={{flex:0.5}}>
        {rightItem}
     </View>
    </View>
  )
}

export default CustomHeader