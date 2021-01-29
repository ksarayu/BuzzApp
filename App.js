import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import fbPage from './screens/fb';
import instaPage from './screens/insta';


export default class App extends React.Component{
  render(){
    return (
      <AppContainer />
    );
  }
}

const navigator = createBottomTabNavigator({
  FaceBook : {screen : fbPage},
  Instagram : {screen : instaPage}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "FaceBook"){
        return(
          <Image
          source={require("./assets/images/fbLogo.png")}
          style={{width:30, height:30}}
        />
        )
        
      }
      else if(routeName === "Instagram"){
        return(
          <Image
          source={require("./assets/images/instaLogo.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})

const AppContainer = createAppContainer(navigator)