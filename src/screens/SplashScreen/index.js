import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Images } from '../../assets'
import { useSelector } from 'react-redux'
import Routes from '../../navigation/Routes'


const SplashScreen = ({navigation}) => {
    let isLogin = useSelector(state => state.auth?.user)
    useEffect(() => {
        setTimeout(() => {
            if (isLogin) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: Routes.DASHBOARD_STACK }],
                })
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{ name: Routes.AUTH_STACK }],
                })
            }
        }, 2000)
    }
    )
  return (
    <View style={styles.container}>

    <Image source={Images.APP_ICON} style={styles.logo} />
    <Text style={styles.title}>Todo List</Text>
     
    </View>
  )
}

export default SplashScreen