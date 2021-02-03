import React from 'react';

import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import { windowWidth } from '../../utils/utils';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Header, Left, Body, Button, Icon, Title, Right } from 'native-base';
import { Colors } from './Colors';

export default function PersonalProfile({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <Container style={{ backgroundColor: Colors.AIR }}>
                <Header style={{ backgroundColor: Colors.CORAL }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: 20 }}>
                        <Title>Personal Profile</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('JobDetails')} activeOpacity={.7}
                        >
                            <Button transparent>
                                <Icon name='arrow-forward' color={Colors.WHITE}  />
                            </Button>
                        </TouchableOpacity>
                    </Right>

                </Header>
                <View style={styles.container}>

                    <View style={styles.userBlock}>
                        <Image
                            source={require('../../assets/userProfile.png')}
                            style={styles.userProfile}
                        />
                        <View style={{ padding: 10 }}>
                            <Text style={styles.infoText}>Alama Diab</Text>
                            <Text style={{ color: Colors.SILVER }}>Executive</Text>
                        </View>
                        <View style={{ justifyContent: 'center', marginLeft: 20 }}>
                            <FontAwesome name="edit" size={20} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Martial Status</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>Married</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Date of birth</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>20/06/1980</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Civil ID</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>27589051479018</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Expiry date</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>01/01/2020</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Staff ID</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>5698</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Mobile number</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>9876905534</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Number of value cards received</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>8</Text>
                        </View>
                    </View>

                    {/* Bio */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Bio</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.title}>Lorem ipsum dolar sit amet, temper consectetur adipiscingelit, sed do elusmod temper incididunt</Text>
                        </View>
                    </View>

                    {/* Attachments */}
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Attachments</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome 
                                    name="file" 
                                    size={20} 
                                    color={Colors.CORAL} 
                                />
                                <View style={{ width: 10 }}></View>
                                <Text style={styles.infoText}>Document 1</Text>
                            </View>
                            <View style={{ height: 20 }}></View>
                            <View style={{ flexDirection: 'row' }}>
                                <FontAwesome 
                                    name="file" 
                                    size={20} 
                                    color={Colors.CORAL} 
                                />
                                <View style={{ width: 10 }}></View>
                                <Text style={styles.infoText}>Document 1</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: Colors.WHITE,
        margin: 8,
    },
    iconLeft: {
        alignItems: 'center', padding: 10,
        width: windowWidth / 2 - 40,
    },
    iconRight: {
        alignItems: 'center', paddingVertical: 10,
        width: windowWidth / 2,
    },
    title: {
        fontSize: 14,
        color: Colors.SILVER,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
    infoText: {
        fontSize: 14,
        fontWeight: '700',
        color: Colors.ONYX,
        textAlign: 'left',
        alignSelf: 'stretch',
    },

    // User Profile styling
    userBlock: {
        flexDirection: 'row',
        textAlign: 'left', alignSelf: 'stretch',
        marginVertical: 20,
        marginHorizontal: 8,
    },
    userProfile: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        borderColor: Colors.CORAL,
        borderWidth: 3,
        borderRadius: 50,
    },
    fingerprint: {
        height: 50,
        width: 50,
        marginRight: 10,
        resizeMode: 'cover',
    },
});