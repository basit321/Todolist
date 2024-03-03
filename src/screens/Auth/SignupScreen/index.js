import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { Colors, Images } from '../../../assets';
import { Button, CustomHeader, CustomizedInput, Loader } from '../../../components';
import Routes from '../../../navigation/Routes';
import FirebaseService from '../../../services/FirebaseService';
import { CommonStyles, UtilityMethods } from '../../../utility';
import styles from './styles';



const SignupScreen = ({navigation}) => {
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

/// Function to handle sign in//
    const onPressSignUp = async() => {
        if(email=="")
        {
            setEmailError("Email is required")
            
        }
        
         if(password=="")
        {
            setPasswordError("Password is required")
            
        }

       else if(!UtilityMethods.isEmailValid(email))
        {
            setEmailError("Invalid email")
            
        }
        else if(!UtilityMethods.isPasswordValid(password))
        {
            setPasswordError("Password must be at least 6 characters")
            

        }
        else
        {
          setLoading(true)
          const response = await  FirebaseService.signUpWith(email,password)

          if(response.isSuccess)
          {
            Alert.alert("Success","You have successfully signed up")
            // dispatch(setUser(response.data))
            setLoading(false)
          
          }
          else
          {
            setLoading(false)
            if(response.message.includes("[auth/email-already-in-use]"))
            {
                setEmailError("The email address is already in use by another account.")
                
            }
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
       label={"Sign Up"}
      />
      <Image source={Images.APP_ICON} style={styles.logo} />

      
        
        <CustomizedInput
        type="email"
        value={email}
        setValue={(text) => {
            setEmail(text)
            setEmailError('')
          
        }}
        label="Email"
        placeholder="Enter your email"
        errorMessage={emailError}
        />
        <CustomizedInput
        type="password"
        value={password}
        setValue={
            (text) => {
                setPassword(text)
                setPasswordError('')
            }
        }
        label="Password"
        placeholder="Enter your password"
        errorMessage={passwordError}
        />
        <Button
        label="Sign Up"
        onPress={onPressSignUp}
        loading={loading}
        buttonStyle={{marginTop:UtilityMethods.hp(3)}}
        />
      
       <View style={styles.rowView}>
         <Text style={styles.normalText}>
            Already have an account?
         </Text>
            <TouchableOpacity
             hitSlop={30}
            onPress={() => navigation.navigate(Routes.LOGIN_SCREEN)}
            >
              <Text style={[styles.normalText,{color:Colors.PRIMARY,fontWeight:"700"}]}>
                {" "}Sign in
              </Text>
            </TouchableOpacity>
       </View>



       </KeyboardAwareScrollView>

            
        
      
    )
}

export default SignupScreen