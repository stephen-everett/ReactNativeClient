/*
    Prototype Lobby. Gets a lobby_id from a QR code that is loaded using the
    image picker. Queries the server for the lobby information. Displays the
    receipt items associated with the lobby
*/

// imports
import React, {Fragment, useState, useRef, useEffect} from 'react';
import {Text, View,ScrollView, StyleSheet,Image, PermissionsAndroid,Button,StatusBar} from 'react-native';
import styles from "./Styles.tsx"
import RNQRGenerator from 'rn-qr-generator'
import {launchImageLibrary} from 'react-native-image-picker';
import {getMenuItems} from "./ApiCalls.tsx"

import RNFS from 'react-native-fs'


// component
const Lobby = () => {

    // react state variables
    const [selectedImage, setSelectedImage] = useState()
    const [menuItems, setMenuItems] = useState([])
    const [qrContent, setQrContent] = useState()

    // options passed into launchImageLibrary()
    const options = {
      mediaType: 'photo',
      includeBase64: true,
      maxHeight: 2000,
      maxWidth: 2000,
      }

    // launches the image picker. Sets the image uri from selected image
    const load_qr_code = () => {
        let testUri = launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              setSelectedImage(imageUri)
            }
        });
    }

    // extracts information contained in QR code image and sets the qrContent
    // react state variable
    const extractFromQr = (image) => {
        RNQRGenerator.detect({
            uri: image
        })
        .then(response => {
            const { values } = response;
            setQrContent(response.values[0])
        })
        .catch(error => console.log('Cannot detect QR code in image', error));
    }

    // map every element inside of menuItems to a <Text> element
    // currently says every child needs a unique key prop
    const showMenuItems = () => {
        if (menuItems) {
            return menuItems.map(menuItem => (<Text key = {menuItem.SKU}> {menuItem.name} ......{menuItem.quantity} </Text>))
        }
    }

    // whenever the selectedImage state variable is changed, check to make sure
    // it is not null or undefined. Pass the image to extractFromQr
    useEffect(() => {
        if(selectedImage) {
            extractFromQr(selectedImage)
        }
    },[selectedImage])

    // whenever the qrContent react state variable is changed, check to make sure
    // it is not null or undefined. Call getMenuItems() and then set the menuItems
    // state variable to the return value that returns from getMenuItems()
    useEffect(() => {
        if(qrContent) {
            let data:number = qrContent
            getMenuItems(data).then(result => {
                setMenuItems(result)
            })
        }
    },[qrContent])

  return (
  <Fragment>
      <View style = {styles.container}>
         <Button
           onPress = {() => load_qr_code()}
           title="Load Lobby"
           color="#841584"
         />
         {showMenuItems()}
       </View>

   </Fragment>
  );
};

export default Lobby;

