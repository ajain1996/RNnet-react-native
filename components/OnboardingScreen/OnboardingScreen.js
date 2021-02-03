import React from 'react';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

// const Skip = ({...props}) => (
//     <Button title='Skip' color='#000000' />
// );

// const Next = ({...props}) => {
//     <Button title='Next' color='#000000' {...props} />
// }

export default OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding 
            // SkipButtonComponent={Skip}
            // NextButtonComponent={Next}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../../assets/onboarding-img1.png')} />,
                    title: 'Connect to the world',
                    subtitle: 'Done with React Native onboarding swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../../assets/onboarding-img2.png')} />,
                    title: 'Share Your Favourites',
                    subtitle: 'Done with React Native onboarding swiper',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../../assets/onboarding-img3.png')} />,
                    title: 'Become the Star',
                    subtitle: 'Done with React Native onboarding swiper',
                },
            ]}
         />
        // <View style={styles.container}>
        //     <Text>Onboarding Screen</Text>
        //     <Button 
        //         title="Login" 
        //         onPress={() => navigation.navigate("Login")} 
        //     />
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
