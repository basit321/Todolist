import moment from 'moment';
import React, { useState } from 'react';
import { Alert, Platform, Switch, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Colors } from '../../../assets';
import { Button, CustomHeader, CustomizedInput, Loader } from '../../../components';
import Routes from '../../../navigation/Routes';
import FirebaseService from '../../../services/FirebaseService';
import { CommonStyles, UtilityMethods } from '../../../utility';
import styles from './styles';


const CreateTask = ({navigation}) => {
    
    let userData = useSelector(state => state.auth?.user)

    const [title, setTitle] = useState('');
    
    const  [titleError, setTittleError] = useState('')
    const [dueDateError, setDueDateError] = useState('')
    const [loading, setLoading] = useState(false)
   const [dueDate, setDueDate] = useState('')
    const [ReminderValue, setReminderValue] = useState(false)
    const [description, setDescription] = useState('')


/// Function to handle Create Task//
    const onPressCreateTask = async() => {
        if(title=="")
        {
            setTittleError("Title is required")
            
        }
        
         if(dueDate=="")
        {
            setDueDateError("Due date is required")
            
        }

      
        else
        {
    setLoading(true)
 /// convert date in unix timestamp
          const data={
            userId:userData?.id,
            status:"Incomplete",
            createdAt:moment().unix(),
            title:title,
            dueDate:moment(dueDate).unix(),
            reminder:ReminderValue,
            ...(description!="" && {description:description})

          }

         
         const response = await  FirebaseService.CreateTask(data,userData?.id)
        if (response.isSuccess) {
          setLoading(false)
          Alert.alert("Success","Task has been created successfully")
          navigation.navigate(Routes.HOME_SCREEN)
        }
        else
        {
          setLoading(false)
          Alert.alert("Error","Something went wrong")
        }
          
        }
    }
    
    return (
       <KeyboardAwareScrollView
       style={CommonStyles.container}
       contentContainerStyle={{flexGrow:1,paddingHorizontal:UtilityMethods.wp(5)}}
        showsVerticalScrollIndicator={false}
        
       >
      <Loader visible={loading} />
      <CustomHeader
       label={"Create a new task"}
      />
   

      <View style={styles.rowView}>
       <Text style={styles.labelText}>
         Set Reminder
       </Text>
         
            <Switch 
            value={ReminderValue}
            onValueChange={(value) => setReminderValue(value)}
            trackColor={{false:Colors.BORDER_GRAY,true:Colors.PRIMARY}}
            thumbColor={Colors.WHITE}
            ios_backgroundColor={Colors.BORDER_GRAY}
            />
      </View>
        
        <CustomizedInput
        type="text"
        value={title}
        setValue={(text) => {
            setTitle(text)
            setTittleError('')
            
          
        }}
        label="Title"
        placeholder="Enter task title"
        errorMessage={titleError}
        />
        <CustomizedInput
        type="date"
        value={dueDate}
        setValue={(text) => {
            setDueDate(text)
            setTittleError('')
            
          
        }}
        label="Due Date"
        placeholder="Enter due date"
        errorMessage={dueDateError}
        />
        <CustomizedInput
        type="text"
        value={description}
        textContStyle={{height:UtilityMethods.hp(20),
        alignItems:"flex-start",
        paddingTop:Platform.OS=="ios"?UtilityMethods.hp(2):0,
        }}
        setValue={(text) => {
            setDescription(text)
            
            
          

        }}

        label="Description"
        placeholder="Enter task description"
        />


        
        <Button
        label="Create Task"
        onPress={onPressCreateTask}
        loading={loading}
        buttonStyle={{marginTop:UtilityMethods.hp(3)}}
        />
      
       



       </KeyboardAwareScrollView>

            
        
      
    )
}

export default CreateTask