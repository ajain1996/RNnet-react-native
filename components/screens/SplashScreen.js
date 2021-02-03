import React, { Component } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert
} from 'react-native';
export default class SplashScreens extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: true,
        }
    }
    Hide_Splash_Screen = () => {
        this.setState({
            isVisible: false
        });
    }

    componentDidMount() {
        var that = this;
        setTimeout(function () {
            that.Hide_Splash_Screen();
        }, 5000);
    }

    render() {
        let Splash_Screen = (
            <View style={styles.s_RootView}>
                <View style={styles.s_ChildView}>
                    {/* <Image source={{ uri: 'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png' }}
                        style={{ width: '100%', height: '100%', resizeMode: 'contain' }} /> */}
                    <Image
                        source={require('../../assets/stc_icon.png')}
                        style={styles.splashImage}
                    />
                </View>
            </View>)
        return (
            <View style={styles.MainContainer}>
                <Text style={{ textAlign: 'center' }}> Splash Screen Example</Text>
                {
                    (this.state.isVisible === true) ? Splash_Screen : null
                }
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer:
    {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    s_RootView:
    {
        justifyContent: 'center',
        flex: 1,
        margin: 10,
        position: 'absolute',
        width: '100%',
        height: '100%',
    },

    s_ChildView:
    {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BCD4',
        flex: 1,
    },
    splashText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
});  