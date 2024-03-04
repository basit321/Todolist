//================================ React Native Imported Files ======================================//


import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import dynamicLinks from '@react-native-firebase/dynamic-links';

import {
  COLLECTION_TASKS
} from "./FirebaseConstants";


class FirebaseServices {
  constructor(props) {}

  // ----------------------------  Firebase Utils ---------------------------- //
  getGeoPoint = (latitude, longitude) =>
    new firestore.GeoPoint(latitude, longitude);

  
  getCurrentUser = () => auth().currentUser;

  getAuth = () => auth();


  
  // ---------------------------- Authentication ---------------------------- //


  signUpWith = async (email, password) => {
    try {
      const authResponse = await auth().createUserWithEmailAndPassword(
        email,
        password
      );
      return {
        isSuccess: true,
        response: authResponse.user.uid,
        message: "User signed up successfully.",
      };
    } catch (error) {
      console.error(error);
      return { isSuccess: false, response: null, message: error.message };
    }
  };


  loginWithEmailPass = async (email, password) => {
  
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      
     return {
        isSuccess: true,
        data: user,
        message: "User logged in successfully.",
      };
    } catch (error) {
      console.error(error);
      return { isSuccess: false, response: null, message: error.message };
    }
  };

    
  // ---------------------------- Create Task ---------------------------- //

  CreateTask = async (data,userID) => {
    console.log("data",userID)
    try {
      const response = await firestore().collection(COLLECTION_TASKS).add(data);
      return {
        isSuccess: true,
        response: response,
        message: "Task created successfully",
      };
    } catch (error) {
      console.log("CreateTask (Error) ==> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  }

  // ---------------------------- Get Tasks ---------------------------- //
  getTasks = async (userID) => {
    try {
      const response = await firestore().collection(COLLECTION_TASKS).where('userId', '==', userID).get();
      const data = response.docs.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      }
      );
      
      return {
        isSuccess: true,
        response: data,
        message: "Tasks fetched successfully",
      };

    } catch (error) {
      console.log("getTasks (Error) ==> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  }

  // ---------------------------- Update Task ---------------------------- //
  updateTask = async (data,taskId) => {
    try {
      const response = await firestore().collection(COLLECTION_TASKS).doc(taskId).update(data);
      return {
        isSuccess: true,
        response: response,
        message: "Task updated successfully",
      };
    } catch (error) {
      console.log("updateTask (Error) ==> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  }

  // ---------------------------- Delete Task ---------------------------- //

  deleteTask = async (taskId) => {
    try {
      const response = await firestore().collection(COLLECTION_TASKS).doc(taskId).delete();
      return {
        isSuccess: true,
        response: response,
        message: "Task deleted successfully",
      };
    } catch (error) {
      console.log("deleteTask (Error) ==> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  }

  // ---------------------------- Dynamic Links ---------------------------- //

  createDynamicLink = async (id) => {
    try {
      const link = await dynamicLinks().buildShortLink({
        link: `https://mytodolist.page.link/userId=${id}`,
        domainUriPrefix: 'https://mytodolist.page.link',
        android: {
          packageName: 'com.todolist',
        },
        ios: {
          bundleId: 'com.todolist',
        },
      });
      return {
        isSuccess: true,
        response: link,
        message: "Dynamic Link created successfully",
      };
    } catch (error) {
      console.log("createDynamicLink (Error) ==> ", error);
      return { isSuccess: false, response: null, message: error.message };
    }
  }

  // ---------------------------- Dynamic Links ---------------------------- //
  
  
  
  

 
}
const FirebaseService = new FirebaseServices();

export default FirebaseService;