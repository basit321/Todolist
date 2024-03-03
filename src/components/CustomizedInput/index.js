import { View, Text, TextInput, Image,TouchableOpacity, Platform, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Colors, Images } from '../../assets'

import DateTimePicker from '@react-native-community/datetimepicker'
import moment from 'moment'
import { FontSize, UtilityMethods } from '../../utility'


export const InputTypes = {
  EMAIL: 'email',
  PASSWORD: 'password',
  TEXT: 'text',
  TEXTAREA: 'textArea',
  DATE: 'date',

}

const CustomizedInput = ({type, 
  value,
  setValue,
  label,
  placeholder,
  textContStyle,
  inputStyle,
  contStyle,
  errorMessage,

  
  ...props}) => {
    const [isSecure, setIsSecure] = useState(true)
    const [showPicker, setShowPicker] = useState(false)
    const onPressPicker = () => {
      setShowPicker(true)
    }
  return (

    <View style={[styles.mainCont,contStyle]}>
      <Text style={styles.labelText}>{label}</Text>
   
    <TouchableOpacity style={[styles.container,textContStyle]}
    disabled={type === InputTypes.DATE? false : true}
    onPress={onPressPicker}
    >
      {
        type === InputTypes.DATE ?
        <View
       
        style={{flex:1}}
        >
          <Text style={{...styles.selectText,
          color:value ?Colors.BLACK : Colors.PLACE_HOLDER_COLOR
          }}>{value ? moment(value).format('DD/MM/YYYY') : placeholder}</Text>
        </View>
        :
      
      
      <TextInput style={[styles.input,inputStyle]} 
      value={value}
      onChangeText={setValue}
      keyboardType={type === InputTypes.EMAIL ? 'email-address' : type === InputTypes.PASSWORD ? 'default' : 'default'}
      secureTextEntry={type === InputTypes.PASSWORD && isSecure}
      placeholder={placeholder}
      placeholderTextColor={Colors.PLACE_HOLDER_COLOR}
      

      {...props}

      />
      }
      {type === InputTypes.PASSWORD &&  
      <TouchableOpacity onPress={() => setIsSecure(!isSecure)}
      style={styles.eyeCont}
      >
        <Image source={
          isSecure ? Images.HIDE : Images.SHOW
        } style={styles.eyeIcon} />
      </TouchableOpacity>
      
      }
    </TouchableOpacity>

    {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}

    {showPicker && Platform.OS != 'ios' && (
      <DateTimePicker
      value={new Date()}
      mode="date"
      minimumDate={new Date()}
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      onChange={(event, selectedDate) => {
        if(event.type === 'set') {
        setShowPicker(false)
        if (selectedDate) {
          setValue(selectedDate)
        }
      }
      else if(event.type === 'dismissed') {
        setShowPicker(false)
      }
      }
    }
      />
    )}
    {showPicker && Platform.OS === 'ios' && 

    <Modal
    transparent={true}
    animationType="slide"
    visible={showPicker}
    >
      <TouchableOpacity style={styles.modalCont} onPress={() => setShowPicker(false)}
      
  
      >


     
        <View style={styles.pickerCont}>

        <View style={styles.modalRow}> 
      <TouchableOpacity>
       <Text style={{
         fontSize: FontSize.VALUE(20),
         color: Colors.RED,
       
         fontWeight:"500",
       
       }}>Cancel</Text>
        </TouchableOpacity>
         <TouchableOpacity
            onPress={
              () => setShowPicker(false)
            }
            >
            <Text style={{
         fontSize: FontSize.VALUE(20),
         color: Colors.BLUE,
       
         fontWeight:"500",
       
       }}>Done</Text>
            </TouchableOpacity>
            </View>
          <DateTimePicker
          value={value?new Date(value):new Date()}
          mode="date"
          minimumDate={new Date()}
          display={"inline"}
          onChange={(event, selectedDate) => {
            if(event.type === 'set') {
            
            if (selectedDate) {
              setValue(selectedDate)
            }
          }
          
          }
        }
          />
        </View>
     
    </TouchableOpacity>
    </Modal>
    }
    </View>
  )
}

export {CustomizedInput} 