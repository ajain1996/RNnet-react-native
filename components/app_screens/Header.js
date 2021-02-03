import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, View } from 'native-base';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';

export default function NavBar({navigation}) {
    return (
        <Header style={{ backgroundColor: Colors.CORAL }}>
            <Left>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('NotificationScreen')}
                        activeOpacity={.7}
                    >
                        <Button transparent>
                            <FontAwesome name='bell' color="#fff" size={20} />
                        </Button>
                    </TouchableOpacity>

                    <View style={{ marginHorizontal: 12 }}></View>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('PersonalProfile')}
                        activeOpacity={.7}
                    >
                        <Button transparent>
                            <FontAwesome name='address-card' color="#fff" size={20} />
                        </Button>
                    </TouchableOpacity>

                </View>
            </Left>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Title style={{ marginLeft: 80, color: Colors.WHITE, }}>Dashboard</Title>
            </View>
            <Right>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <FontAwesome name='cog' color="#fff" size={20} />
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('MyDashboards')}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <FontAwesome name='sign-out' color="#fff" size={20} />
                    </Button>
                </TouchableOpacity>

            </Right>
        </Header>
    );
}
