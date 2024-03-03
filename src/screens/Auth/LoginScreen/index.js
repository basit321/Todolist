import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'


import { setUser } from '../../../redux/Reducers/AuthReducer';
import { CustomizedInput,Button, Loader } from '../../../components';
import styles from './styles';
import { CommonStyles, UtilityMethods } from '../../../utility';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Colors, Images } from '../../../assets';
import Routes from '../../../navigation/Routes';
import FirebaseService from '../../../services/FirebaseService';


const LoginScreen = ({navigation}) => {
    const dispatch = useDispatch();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  [emailError, setEmailError] = useState('')
    const [loading, setLoading] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

/// Function to handle sign in//
    const onPressSigIn = async() => {
      setEmailError('')
      setPasswordError('')
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
        const response = await  FirebaseService.loginWithEmailPass(email,password)

        if(response.isSuccess)
        {

          const data={
            email:response.data?.user?.email,
            id:response.data?.user?.uid,
          }
         
          dispatch(setUser(data))
          setLoading(false)
          // navigation.reset({
          //   index: 0,
          //   routes: [{ name: Routes.DASHBOARD_STACK }],
          // });
          navigation.replace(Routes.DASHBOARD_STACK,{
            screen:Routes.HOME_SCREEN
          
          })

          
        
        }
        else
        {
          setLoading(false)
          if(response.message.includes("The supplied auth credential is incorrect"))
          {
              setEmailError("Invalid email or password")
              
          }
        }
      }
  }
    return (
       <KeyboardAwareScrollView
       style={CommonStyles.container}
       contentContainerStyle={{flexGrow:1,paddingHorizontal:UtilityMethods.wp(5)}}
       keyboardShouldPersistTaps="handled"
       showsVerticalScrollIndicator={false}
       >
        <Loader visible={loading} />
      <Image source={Images.APP_ICON} style={styles.logo} />

      
        
        <CustomizedInput
        type="email"
        value={email}
        setValue={
          (text) => {
            setEmail(text)
            setEmailError('')
          }
        }
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
        label="Sign In"
        onPress={onPressSigIn}
        loading={loading}
        buttonStyle={{marginTop:UtilityMethods.hp(3)}}
        />
      
       <View style={styles.rowView}>
         <Text style={styles.normalText}>Don't have an account? </Text>
            <TouchableOpacity
             hitSlop={30}
        onPress={() => navigation.navigate(Routes.SIGNUP_SCREEN)}
            >
              <Text style={[styles.normalText,{color:Colors.PRIMARY,fontWeight:"700"}]}>Sign up</Text>
            </TouchableOpacity>
       </View>



       </KeyboardAwareScrollView>

            
        
      
    )
}

export default LoginScreen