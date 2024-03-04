import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { Provider } from 'react-redux'
import store, { persister } from './redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native'

import dynamicLinks from '@react-native-firebase/dynamic-links';
import RootStack from './navigation/RootStack'
import { setLink } from './redux/Reducers/DeepLinkReducer'

export const navigationRef = createNavigationContainerRef();



const App = () => {

 const HandleDeepLink = () => {

  const handleDynamicLink = (link) => {
    store.dispatch(setLink(link))
  };``
  useEffect(() => {
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);
  
return null
 }
  return (
      <Provider store={store}>
        <PersistGate persistor={persister}>
          <NavigationContainer ref={navigationRef}>
          <HandleDeepLink />
            <GestureHandlerRootView style={{ flex: 1 }}>
              <RootStack />
            </GestureHandlerRootView>
          </NavigationContainer>
        </PersistGate>
      </Provider>
  )
}

export default App