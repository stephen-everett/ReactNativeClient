/*
    Main entry point for program. Contains the main screen, wrapped in a fragment
    Two views, one to display messages, and one to input messages
*/

import React, {Fragment, useState, useRef} from 'react';
import {Text, View,ScrollView, StyleSheet,Button} from 'react-native';
import GetTest from "./GetTest.tsx"
import PostTest from "./PostTest.tsx"
import styles from "./Styles.tsx"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const MessageScreen = ({navigation}) => {

   // refreshPage and setRefreshPage toggle the refresh state to trigger
   // pulling data from the server
  const [refreshPage, setRefreshPage] = useState(false)

  // scrollViewRef is used to make the ScrollView scroll to to the end
  // when its data is updated
  const scrollViewRef = useRef<ScrollView>(null);

  const loadLobby = () => {
  }

  return (
  <Fragment>

      {/* This section contains the messages */}
      <View style = {styles.container}>
          <ScrollView
                contentContainerStyle={styles.top}
                onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
                ref={scrollViewRef}
                >
                {/* This component is where the messages are being retrieved */}
               <GetTest
                    refreshPage = {refreshPage}
                    setRefreshPage = {setRefreshPage}/>

           </ScrollView>
       </View>

       {/* this section contains the input */}
       <View
            style={{
             flex: 1,
             justifyContent:'flex-end'
            }}>

            {/* This component is where the messages are being sent */}
            <PostTest
                setRefreshPage = {setRefreshPage}/>
            <Button
                   onPress = {() => navigation.navigate('Lobby')}
                   title="Join Lobby"
                   color="#841584"
                 />
        </View>

   </Fragment>
  );
};

export default MessageScreen;

