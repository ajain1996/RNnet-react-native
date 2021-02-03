import React, { useState } from 'react';
import {
    StyleSheet, Text, View, ScrollView, 
    TouchableOpacity, Image
} from 'react-native';

// import firebase from 'firebase';

import FormInput from '../auth/FormInput';
import FormButton from '../auth/FormButton';
import SocialButton from '../auth/SocialButton';
import { Colors } from './Colors';

export default function SignIn({ navigation }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/stc_icon.png')}
                style={styles.logo}
            />

            <Text style={styles.text1}>Employee services app</Text>

            <Text style={styles.text2}>Sign In with your ESB credentials</Text>
            <FormInput
                labelValue={username}
                onChangeText={(userName) => setUserName(userName)}
                placeholderText="Username"
                iconType="user"
                autoCapitalize='none'
                autoCorrect={false}
            />
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            

            <Text style={styles.text3}>
                Civil ID no. {"\n"}Last two digits of your civil ID
            </Text>


            <View style={styles.twoBordersView}>
                <Text style={styles.twoBorder}>aaaaa</Text>
                <Text style={styles.twoBorder}>aaaaa</Text>
            </View>


            <FormButton
                buttonTitle="Generate OTP"
                onPress={() => navigation.navigate('FirstTimeLogin')}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 40,
    },
    logo: {
        height: 150,
        width: 150,
        paddingBottom: 20,
        resizeMode: 'cover',
    },
    text1: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: Colors.ONYX,
    },
    text2: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 40,
        color: Colors.ONYX,
    },
    text3: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 14,
        textAlign: 'left', alignSelf: 'stretch',
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 10,
        paddingTop: 10,
        color: Colors.SILVER,
        
    },
    twoBordersView: {
        flexDirection: 'row', textAlign: 'left', alignSelf: 'stretch',
    },
    twoBorder: {
        borderColor: Colors.SILVER,
        borderTopWidth: 2,
        color: 'transparent',
        textAlign: 'left', alignSelf: 'stretch',
        marginRight: 10,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.ONYX,
        fontFamily: 'Lato-Regular',
    },
});