import { useIsFocused } from '@react-navigation/native';
import LottieView from "lottie-react-native";
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { Alert, FlatList, Image, Switch, Text, TouchableOpacity, View,Share, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Animations, Colors, Images } from '../../../assets';
import { Button, CustomModal, Loader } from '../../../components';
import Routes from '../../../navigation/Routes';
import { resetAuth } from '../../../redux/Reducers/AuthReducer';
import FirebaseService from '../../../services/FirebaseService';
import { CommonStyles, UtilityMethods } from '../../../utility';
import { FilterMenu, SortMenu, TaskMenu } from '../../../utility/Data';
import styles from './styles';


const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const isFocused = useIsFocused();
    const  link = useSelector(state => state.deepLink.link)

    
    const [tasks,setTasks]=useState([])
    const [loading,setLoading]=useState(true)
    const [FilteredTasks,setFilteredTasks]=useState([])
    const [TasMenuModal,setTaskMenuModal]=useState(false)
    const [FilterMenuModal,setFilterMenuModal]=useState(false)
    const [SortMenuModal,setSortMenuModal]=useState(false)
    const [selectedTask,setSelectedTask]=useState(null)
    let userData = useSelector(state => state.auth?.user)

/// To get all tasks of user//
useEffect(() => {
    const getTasks = async () => {
   if(link)
   {
    setLoading(true)
    const getId = link.url.split("=").pop()
    console.log("getId",getId)
    const data = await  FirebaseService.getTasks(getId)
    if (data.isSuccess) {
        setLoading(false)
         
        setTasks(data.response)
        setFilteredTasks(data.response)
    }
    else
    {
        setTasks([])
        setFilteredTasks([])
        setLoading(false)
   }
    }
   else  if (isFocused&&userData) {
        setLoading(true)
        const data = await  FirebaseService.getTasks(userData?.id)
        if (data.isSuccess) {
            setLoading(false)
             
            setTasks(data.response)
            setFilteredTasks(data.response)
        }
        else
        {
            setTasks([])
            setFilteredTasks([])
            setLoading(false)
        }
     
    }
    }
    getTasks()
}, [userData,isFocused,link])


/// Menu Data for Task Menu//
     const Menu=[
        {
            id:1,
            title:"Filters",
            icon:Images.FILTER,
            onPress:()=>{
                setFilterMenuModal(true)
            }
        },
        {
            id:1,
            title:"Sort",
            icon:Images.SORT,
            onPress:()=>{
                setSortMenuModal(true)
            }
        },


        ...(
            Platform.OS === 'android' ? [{
                id: 3, // Changed id to be unique
                title: "Share",
                icon: Images.SHARE,
                onPress: async () => {
                    const res = await FirebaseService.createDynamicLink(userData?.id)
                    if(res.isSuccess) {
                        Share.share({
                            message: res.response,
                        });
                    }
                }
            }] : []
        ),

    
    ]
    const backgroundColor={
        "Incomplete":Colors.LIGHT_RED,
        "Completed":Colors.LIGHT_GREEN,

    }
/// Function to handle logout//
    const logout = () => {
        Alert.alert("Logout", "Are you sure you want to logout?", [
            {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Yes", onPress: () => {

                dispatch(resetAuth())
                navigation.replace(Routes.AUTH_STACK)

            } }
        ]);
      
    
    }
   // Function to update task status//
    const onPressCompleteTask=async(task)=>{

        const taskIndex = tasks.findIndex((item)=>item.id===task.id)
        let tempTasks = tasks
        tempTasks[taskIndex].status="Completed"
        setTasks(tempTasks)
        setFilteredTasks(tempTasks)

        await FirebaseService.updateTask({status:"Completed"},task.id,)
        

    }

    /// Function to delete task//
    const onPressDeleteTask=async(task)=>{
        const taskIndex = tasks.findIndex((item)=>item.id===task.id)
        let tempTasks = tasks
        tempTasks.splice(taskIndex,1)
        setTasks(tempTasks)
        setFilteredTasks(tempTasks)
        await FirebaseService.deleteTask(task.id)
    }

    // Function to handle filter//
    const onPressFilter=(item)=>{
        if(item.title==="All")
        {
            setFilteredTasks(tasks)
        }
        else if (item.title==="Completed Tasks")
        {
            const tempTasks = tasks.filter((task)=>task.status==="Completed")
            setFilteredTasks(tempTasks)
        }
        else if (item.title==="Incomplete Tasks")
        {
            const tempTasks = tasks.filter((task)=>task.status==="Incomplete")
            setFilteredTasks(tempTasks)
        }
    }
    // Function to handle sorting//
    const onPressSort=(item)=>{
        if(item.title==="Newest")
        {
            const tempTasks = tasks.sort((a,b)=>b.createdAt-a.createdAt)
            setFilteredTasks(tempTasks)
        }
        else if (item.title==="Due Date")
        {
            const tempTasks = tasks.sort((a,b)=>a.dueDate-b.dueDate)
            setFilteredTasks(tempTasks)
        }
    }
    // Function to handle reminder for task //
    const onPressSwitch=async(value,task)=>{
        const filteredTasks = tasks.map((item)=>{
            if(item.id===task.id)
            {
                item.reminder=value
            }
            return item
        })
        setTasks(filteredTasks)
        setFilteredTasks(filteredTasks)
       
       await FirebaseService.updateTask({reminder:value},task.id)
    }



    return (
        <View style={CommonStyles.container}>
        <Loader visible={loading} showIndicator={true} />
        
        <View style={styles.header}>
        <View style={styles.rowView}>
        <Text style={styles.title}>
            {link?"User's Tasks": "My Tasks"}
        </Text>
        <TouchableOpacity style={styles.logoutButton} onPress={() => logout()}>
           <Image source={Images.LOGOUT} style={styles.logoutIcon}/>
        </TouchableOpacity>
        </View>
        </View> 

        <View style={styles.body}>
      {link ?null:
        <View style={styles.MenuRow}>
            {
                Menu.map((item,index)=>{
                    return(
                        <TouchableOpacity key={index} onPress={item.onPress}
                        style={styles.menuItem(index)}
                        >
                      
                        <Image source={item.icon} style={styles.icon}/>
                        <Text style={styles.itemText}>{item.title}</Text>
                       
                        </TouchableOpacity>
                    )
                })
            }

            </View>
        }
        {FilteredTasks.length==0|| link?null:
        <TouchableOpacity style={styles.addTask}
        onPress={()=>{
            navigation.navigate(Routes.CREATE_TASK)
        }}
        
        >
            <Image source={Images.PLUS} style={styles.plusIcon}/>
        </TouchableOpacity>

        }
        <FlatList
        style={{flex:1}}
        contentContainerStyle={{flexGrow:1,}}
         data={FilteredTasks}
        renderItem={({item,index})=>(
            <View style={styles.taskCard}>
              <View style={styles.firstHalf}>
                <View style={styles.taskTitleCont}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                 <Text style={styles.taskDes}>
                    {moment.unix(item?.createdAt).fromNow()}
                    </Text> 
                    <Text style={{...styles.taskDes,marginTop:"2%",
                   
                    }} numberOfLines={1} >
                    {item?.description}
                    </Text> 
                </View>
                <View style={styles.tasKMenuAndSwitch}>
                    <TouchableOpacity
                    hitSlop={20}
                    onPress={()=>{
                        setTaskMenuModal(true)
                        setSelectedTask(item)
                    }}
                    >


                        <Image source={Images.MENU} style={styles.menuIcon}/>
                    </TouchableOpacity>
                   <View style={styles.switchCont}>
                    <Switch
                    value={item?.reminder}
                    trackColor={{false:Colors.TEXT_GRAY,true:Colors.PRIMARY}}
                    thumbColor={Colors.WHITE}
                    ios_backgroundColor={Colors.TEXT_GRAY}

                    onValueChange={(value)=>{
                       onPressSwitch(value,item)
                    }}
                    />
                  </View>

                    </View>
  </View>
                <View style={styles.secondHalf}>
                    <View style={{flexDirection:"row",alignItems:"center",
                  
                   
                }}>
                    <Text style={styles.taskTitle}>Due Date : </Text>
                    <Text style={{...styles.taskDes,marginTop:2}}>
                    {moment.unix(item?.dueDate).format("DD-MM-YYYY")}
                    </Text>
                    </View>
                    <View 
                    style={{
                        ...styles.statusCont,
                        backgroundColor:backgroundColor[item?.status]
                    }}

                    >
                        <Text style={{color:Colors.WHITE,fontWeight:"600"}}>{item?.status}</Text>

                    </View>
                    </View>

            </View>
        )
        }


            keyExtractor={(item,index)=>index.toString()}
        ListEmptyComponent={<View style={styles.emptyComp}>
    {loading?null:<>
 <LottieView  style={styles.emptyCart} source={Animations.EMPTY_LIST} autoPlay loop />
    <Text style={styles.emptyText}>
  {link?"User did not have any active tasks": "Oh! You haven't made any tasks yet"}
 </Text>

{link?null:
 <Button
        label="Add Task"
        onPress={
            ()=>{
                navigation.navigate(Routes.CREATE_TASK)
            }
        }
        loading={false}
        buttonStyle={{marginTop:UtilityMethods.hp(3),
        width:UtilityMethods.wp(50),
        height:UtilityMethods.hp(6),
        }}
        />
    }
      
</>
    }
        </View>}
        />


            </View>

<CustomModal
visible={TasMenuModal}
data={TaskMenu}
title="Task Menu"
onCLose={()=>setTaskMenuModal(false)}
onPressItem={(item)=>{
    if(item.title==="Mark as Complete")

    {
     onPressCompleteTask(selectedTask)
    }
    else if(item.title==="Delete Task")
    {
       onPressDeleteTask(selectedTask)
    }
    setTaskMenuModal(false)

}
}
/>

<CustomModal
visible={FilterMenuModal}
data={FilterMenu}
title="Filter"
onCLose={()=>setFilterMenuModal(false)}
onPressItem={(item)=>{
   
    setFilterMenuModal(false)

     onPressFilter(item)
   
}
}
/>

<CustomModal
visible={SortMenuModal}
data={SortMenu}
title="Sort"
onCLose={()=>setSortMenuModal(false)}
onPressItem={(item)=>{
    onPressSort(item) 
    setSortMenuModal(false)

   
      
  
    
}
}
/>

           
        </View>
    )
}

export default HomeScreen