import React from 'react';
import { StyleSheet } from 'react-native';

import { Container, Header, Left, Body, Button, Icon, Title } from 'native-base';

import MyProfile from './MyProfile';
import { Colors } from './Colors';

export default function MyProfileScreen({ navigation }) {
    return (
        <Container style={{backgroundColor: Colors.AIR}}>
            <Header style={{backgroundColor: Colors.CORAL}}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{marginLeft: 50}}>
                    <Title>Me</Title>
                </Body>
                
            </Header>
            <Container style={styles.container}>
                <MyProfile 
                    navigation={navigation} 
                    icon="bell"
                    info="Personal Profile"
                />
                <MyProfile 
                    navigation={navigation} 
                    icon="bell"
                    info="Job Details"
                />
                <MyProfile 
                    navigation={navigation} 
                    icon="tasks"
                    info="Payslips"
                />
                <MyProfile 
                    navigation={navigation} 
                    icon="university"
                    info="Dashboards"
                />
                <MyProfile 
                    navigation={navigation} 
                    icon="birthday-cake"
                    info="Add new departments"
                />
            </Container>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.AIR,
        paddingTop: 20,
        paddingHorizontal: 4,
    }
});
