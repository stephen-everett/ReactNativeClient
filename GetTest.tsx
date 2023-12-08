/*
    This component is where the messages are being grabbed
*/

// imports
import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {getMessages} from './ApiCalls.tsx'

const GetTest = (props) => {

// state variables
const [messages, setMessages] = useState([])

// if messages is not undefined then map all of the messages to a <Text> component and return them
const showMessages = () => {
    if(messages) {
       return messages.map(message => (<Text key = {message["id"]}>{message["message"]}</Text>))
    }
}

// on initial load, grab the messages using the getMessages() function defined in ApiCalls.tsx
useEffect(() => {
    getMessages().then(result => setMessages(result))
},[])

// if the refresh page state variable is toggled, refresh page if it is set to true
useEffect(() => {
    if(props.refreshPage) {
        getMessages().then(result => {
            setMessages(result)
            props.setRefreshPage(refreshPage => false)
        })
    }
},[props.refreshPage])

  return (
      showMessages()
  );
};
export default GetTest;

