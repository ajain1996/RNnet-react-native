import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, View, Icon } from 'native-base';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';

export default function AppBar({ navigation, title }) {
    return (
        <Header style={{ backgroundColor: '#ff375e' }}>
            <Left>
                <Button transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body style={{ marginLeft: 30 }}>
                <Title>{title}</Title>
            </Body>
            <Right>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LeaveDashboard')}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <Icon name='arrow-forward' color="#fff" />
                    </Button>
                </TouchableOpacity>
            </Right>
        </Header>
    );
}
