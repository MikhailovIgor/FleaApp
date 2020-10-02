import React, { useEffect } from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback, Alert, } from 'react-native';
import colors from "../config/colors";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ImageInput = ({ imageUri, onChangeImage }) => {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        // const result = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.LOCATION);
        const { granted } = await ImagePicker.getCameraRollPermissionsAsync();
        if(!granted) {
            alert('YOU NEED TO ENABLE PERMISSION TO ACCESS THE LIBRARY')
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if(!result.cancelled) onChangeImage(result.uri);
        } catch (err) {
            console.log('error reading an image: ', err );
        }
    };

    const handlePress = () => {
        if(!imageUri) selectImage();
        else Alert.alert('Delete', 'Are you sure you wanna to delete this button?', [
            {text: 'Yes', onPress: () => onChangeImage(null)},
            {text: 'No'}
        ])
    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
          <View style={styles.container} >
            {imageUri
                ? <Image source={{ uri: imageUri }} style={styles.image} />
                : <MaterialCommunityIcons name='camera' size={40} color={colors.medium} />
            }
          </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 100,
        width: 100,
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',

    }
});

export default ImageInput;
