import React, { Component } from "react";
import { StyleSheet, Image } from 'react-native'
//install
//npm install --save react-native-progress-circle
import {
    Container,
    Header,
    View,
    Title,
    Button,
    Icon,
    Left,
    Body,
    Text,
    Row,
    Right,
    Card,
    CardItem,
    Thumbnail,
} from "native-base";
import { FlatGrid } from 'react-native-super-grid';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { windowHeight, windowWidth } from '../../utils/utils';

import ProgressCircle from 'react-native-progress-circle'
import { Colors } from './Colors';
import { TouchableOpacity } from "react-native-gesture-handler";

const logo = require("../../assets/userProfile.png");
export default function LeaveDashboard() {
    const [items, setItems] = React.useState([
        { name: 'Leaves', icon: 'credit-card' },
        { name: 'Training', icon: 'address-book' },
        { name: 'Performance', icon: 'anchor' },
        { name: 'Overtime', icon: 'id-card' },
        { name: 'Absence permission', icon: 'gift' },
        { name: 'Career', icon: 'globe' },
    ]);
    return (
        <Container style={styles.container}>
            <Header style={{ backgroundColor: Colors.CORAL }}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>LeaveDashboard</Title>
                </Body>
                {/* <Right>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('MyDashboards')}
                            activeOpacity={.7}
                        >
                            <Button transparent>
                                <Icon name='arrow-forward' color="#fff" />
                            </Button>
                        </TouchableOpacity>
                    </Right> */}
            </Header>
            <Container style={styles.container2}>
                <View style={{ height: 28, marginLeft: 30, marginBottom: 50 }}>
                    <CardItem >
                        <Left><Body>
                            <Text style={styles.cardlargetext}>
                                Annual Leave</Text>
                        </Body></Left>
                        <Left><Button iconDown transparent>
                            <Icon name='arrow-down' />
                        </Button></Left>
                    </CardItem>
                </View>

                <Row style={{ marginLeft: 50, backgroundColor: Colors.WHITE }}>
                    <ProgressCircle percent={30} radius={50} borderWidth={10}
                        color={Colors.CORAL} shadowColor={Colors.OASISLIGHT}
                        bgColor={Colors.WHITE}>
                        <Text style={{ fontSize: 18 }}>{'2018'}</Text>
                    </ProgressCircle>
                    <View style={{ marginLeft: 60 }}>
                        <View style={{
                            marginBottom: 10, marginLeft: 0, height: 30, flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 30, height: 30, borderRadius: 50, 
                                backgroundColor: Colors.OASISLIGHT,
                                justifyContent: 'center', alignItems: 'center', marginRight: 10,
                            }}>
                                <Text style={{ color: Colors.WHITE, fontSize: 16 }}>
                                    ✓
                                </Text>
                            </View>
                            <Text style={{ fontSize: 12 }}>Approved</Text>
                        </View>
                        <View style={{
                            marginBottom: 10, marginLeft: 0, height: 30, flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 30, height: 30, borderRadius: 50, backgroundColor: Colors.SUNSET,
                                justifyContent: 'center', alignItems: 'center', marginRight: 10,
                            }}>
                                <Text
                                    style={{ color: Colors.WHITE, fontSize: 12 }}
                                >28</Text>
                            </View>
                            <Text style={{ fontSize: 12 }}>Pending</Text>
                        </View>
                        <View style={{
                            marginBottom: 10, marginLeft: 0, height: 30, flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                            <View style={{
                                width: 30, height: 30, borderRadius: 50, backgroundColor: Colors.CORAL,
                                justifyContent: 'center', alignItems: 'center', marginRight: 10,
                            }}><Text style={{ color: Colors.WHITE, fontSize: 12 }}>28</Text></View>
                            {/* <Icon active name="home" /> */}
                            <Text style={{ fontSize: 12 }}>Rejected</Text>
                        </View>

                    </View>
                </Row>

                <Body white style={{marginTop: 60,}}>
                    <Row style={{
                        alignSelf: "center", borderTopColor: Colors.ONYX,
                        borderBottomColor: Colors.ONYX,
                        borderTopWidth: 1, borderBottomWidth: 1,
                    }}>
                        <Button
                            iconLeft transparent style={{
                                height: 80, flex: 1,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Icon active name="home" color={Colors.ONYX} />
                            <Text style={{ fontSize: 12 }}>Approved</Text>
                        </Button>
                        <Button
                            iconLeft transparent style={{
                                height: 80, flex: 1,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            {/* <Icon active name="home" /> */}
                            <Image style={{width: 20, height: 20}} source={require('../../assets/leaves_taken.jpg')}/>
                            <Text style={{ fontSize: 12 }}>Leaves taken</Text>
                        </Button>
                    </Row>
                </Body>

                <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                    <FlatGrid
                        itemDimension={80}
                        data={items}
                        style={styles.gridView}
                        spacing={6}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.itemContainer} activeOpacity={.7}
                                onPress={() => navigation.navigate('PersonalProfile')}
                            >
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name={item.icon} size={36} color="grey" />
                                </View>
                                <Text style={styles.itemName}>{item.name}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>

            </Container>

        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#DDD"
    },
    container2: {
        backgroundColor: "#FFF",
        margin: 8,
    },
    mb: {
        marginBottom: 0,
        fontSize: 13,
        marginHorizontal: 20
    },
    cardlargetext: {
        fontSize: 13
    },
    cardsmalltext: {
        fontSize: 11
    },
    mb15: {
        marginBottom: 0,
        elevation: 1,
        marginHorizontal: 10
    },
    rowbtn: {
        marginVertical: 10
    },
    gridView: {
        marginTop: 10,
        marginRight: 5,
        // backgroundColor: '#000'
    },
    itemContainer: {
        backgroundColor: Colors.WHITE,
        justifyContent: 'flex-end',
        borderRadius: 5,
        // marginHorizontal: 5,
        paddingBottom: 10,
        height: windowHeight / 6,
        width: windowWidth/3 - 12
    },
    itemName: {
        fontSize: 12,
        color: Colors.ONYX,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: 10
    },
});
