import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Icon, Container, Header, Left, Body, Button, Title, Right } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavBar from './Header';
import { windowHeight, windowWidth } from '../../utils/utils';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from './Colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AppBar from './AppBar';

const TopTabs = createMaterialTopTabNavigator();


export default function MyDashboards({ navigation }) {
    return (
        <Container style={{ backgroundColor: '#eee' }}>
            <AppBar title="MyDashboard" />
            <TopTabs.Navigator tabBarOptions={{
                activeTintColor: '#fff',
                inactiveTintColor: '#000',
                indicatorStyle: {
                    height: null,
                    top: '10%',
                    bottom: '10%',
                    width: '45%',
                    left: '2.5%',
                    borderRadius: 5,
                    backgroundColor: '#ff375e',
                },
                style: {
                    alignSelf: "center",
                    width: '95%',
                    borderRadius: 5,
                    marginTop: 20,
                },
            }}
                swipeEnabled={true}>
                <TopTabs.Screen
                    name={"Screen1"}
                    component={ScreenOne}
                    options={{ tabBarLabel: "Screen 1" }}
                />
                <TopTabs.Screen
                    name={"Screen2"}
                    component={ScreenTwo}
                    options={{ tabBarLabel: "Screen 2" }}
                />
            </TopTabs.Navigator>

        </Container>
    );
}



function ScreenOne({ navigation }) {

    const [items, setItems] = React.useState([
        { name: 'Leaves', icon: 'credit-card' },
        { name: 'Training', icon: 'address-book' },
        { name: 'Performance', icon: 'anchor' },
        { name: 'Overtime', icon: 'id-card' },
        { name: 'Absence permission', icon: 'gift' },
        { name: 'Career', icon: 'globe' },
    ]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FlatGrid
                itemDimension={80}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.itemContainer} activeOpacity={.7}
                        onPress={() => navigation.navigate('PersonalProfile')}
                    >
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <FontAwesome name={item.icon} size={40} color="#ff375e" />
                        </View>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

function ScreenTwo({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={require('../../assets/stc_icon.png')}
                style={styles.splashImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
    },
    itemContainer: {
        backgroundColor: "#FFF",
        justifyContent: 'flex-end',
        borderRadius: 5,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 10,
        height: windowHeight / 5.8,
        width: windowWidth / 3 - 10,
        elevation: 1.4,
    },
    itemName: {
        fontSize: 12,
        color: Colors.ONYX,
        fontWeight: '600',
        textAlign: "center",
        marginVertical: 10
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});