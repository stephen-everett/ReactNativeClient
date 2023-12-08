/*
    This component is where the messages are being grabbed
*/

// imports
import React, {useState, Fragment} from 'react';
import {Text, View, TextInput, StyleSheet, Button, Keyboard} from 'react-native';
import {postMessage} from "./ApiCalls.tsx"
import styles from "./Styles.tsx"

const PostTest = (props) => {
    // state variables
    // the message is set to an empty string by default
    const [message, setMessage] = useState("")

    /*
        sendMessage() is fired when the button is pressed. If the string is not empty
        then call the postMessage() function defined in ApiCalls.tsx, set the message
        state variable to an empty string, and trigger the refresh page boolean so that
        GetTest.tsx will pull the new data from the server
    */
    const sendMessage = () => {
        if(message !== "") {
            postMessage(message).then( result =>{
            setMessage("")
            Keyboard.dismiss()
            props.setRefreshPage(refreshPage => true)
            })
        }
    }

   // The components that are returned to App.tsx
  return (
  <Fragment>
      <TextInput
        value = {message}
        onChangeText = {text => setMessage(text)}
        style = {styles.input}/>

      <Button
       onPress = {()=>sendMessage()}
       title="Send Message"
       color="#841584"
     />
  </Fragment>
  );
};

export default PostTest;

