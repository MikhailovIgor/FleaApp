import React from "react";
import { StyleSheet, View, Modal } from "react-native";
import * as Progress from 'react-native-progress';
import colors from "../config/colors";
import  LottieView  from 'lottie-react-native';

const UploadScreen = ({onDone, progress = 0, visible = false}) => {
    return(
        <Modal visible={visible}>
           <View style={styles.container}>
               {progress < 1
                   ? (<Progress.Bar
                       progress={progress}
                       color={colors.primary}
                       width={200}
                   />)
                   : (<LottieView
                       autoPlay
                       loop={false}
                       onAnimationFinish={onDone}
                       source={require('../assets/animations/done.json')}
                       style={styles.animation}
                   />)
               }
           </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    animation: {
        width: 150,
    }
});

export default UploadScreen;
