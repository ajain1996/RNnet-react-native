import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';

import Notification from './Notification';
import { Colors } from './Colors';

export default function NotificationScreen({ navigation }) {
    return (
        <Container style={{backgroundColor: Colors.AIR}}>
            <Header style={{backgroundColor: Colors.CORAL}}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{marginLeft: 50}}>
                    <Title>Notification</Title>
                </Body>
                
            </Header>
            <Container style={styles.container}>
                <Notification 
                    navigation={navigation} 
                    icon="bell"
                    info="A user will be able to click on any of the notifications to initiate"
                    time="9:00 AM"
                />
                <Notification 
                    navigation={navigation} 
                    icon="bell"
                    info="A user will be able to click on any of the notifications to initiate"
                    time="9:00 AM"
                    chevron="chevron-right"
                />
                <Notification 
                    navigation={navigation} 
                    icon="tasks"
                    info="A user will be able to click on any of the notifications to initiate"
                    time="9:00 AM"
                />
                <Notification 
                    navigation={navigation} 
                    icon="university"
                    info="Boubyan Bank wins another award fro being digital leaders in banking."
                    time="8:30 AM"
                    chevron="chevron-right"
                />
                <Notification 
                    navigation={navigation} 
                    icon="birthday-cake"
                    info="Happy Birthday"
                    time="8:30 AM"
                />
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: Colors.ONYX,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1,
        margin: 8,
    }
});
