import React  from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FeedScreen from './screens/Feed'
import CreateStoryScreen from './screens/CreateStory'


const Tab= create.createBottomTabNavigator()

export default function App(){
  return(
    <NavigationContainer>
<Tab.Navigator
screenOptions={({route})=>({
tabBarIcon:({focused,color,size})=>{
 let iconName
 if(route.name=== "Feed"){
  iconName=focused 
  ? 'book'
  :"book-outline"
 }
 else if(route.name==="CreateStory"){
  iconName=focused ? 'create' :'create-outline'
 }
  
 return<Ionicons name={iconName} size={size} color={color}/>

},

})}
tabBarOptions={{
  activeTintColor:'tomato',
  inactiveTintColor:'gray'
}}
>
  <Tab.Screen name="Feed" component={FeedScreen} options={{headerShown:false}}/>
  <Tab.Screen name="CreateStory" component={CreateStoryScreen} options={{headerShown:false}}/>

</Tab.Navigator>

    </NavigationContainer>
  )
}
