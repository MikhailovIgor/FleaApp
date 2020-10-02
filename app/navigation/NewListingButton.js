import React from 'react';
import {StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

const NewListingButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
       <View style={styles.container}>
         <MaterialCommunityIcons
             name='plus-circle'
             size={38}
             color={colors.white}
         />
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        height: 76,
        width: 76,
        borderRadius: 38,
        borderWidth: 10,
        borderColor: colors.white,
        bottom: 22,
    },
})

export default NewListingButton;
