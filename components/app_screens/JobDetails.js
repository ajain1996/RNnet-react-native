import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Right } from 'native-base';

import { windowWidth } from '../../utils/utils';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';

export default function JobDetails({ navigation }) {
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <Container style={{ backgroundColor: Colors.AIR }}>
                <Header style={{ backgroundColor: Colors.CORAL }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: 80 }}>
                        <Title>Job details</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LeaveDashboard')} activeOpacity={.7}
                        >
                            <Button transparent>
                                <Icon name='arrow-forward' color={Colors.WHITE} />
                            </Button>
                        </TouchableOpacity>
                    </Right>
                </Header>
                <View style={styles.container}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Department</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>Card Operation</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Grade</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>8</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Manager name</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>Zaheer Alama</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Hire date</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>26/1/2017</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Years of service</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>12</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Salary (Basic)</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>850 KD</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Grade allowance</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>12</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Last promotion date</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>5/3/2018</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Talent year</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>2018</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.iconLeft}>
                            <Text style={styles.title}>Talent Category</Text>
                        </View>
                        <View style={styles.iconRight}>
                            <Text style={styles.infoText}>Management</Text>
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
        fontWeight: 'bold',
        color: Colors.ONYX,
        textAlign: 'left',
        alignSelf: 'stretch',
    },
});