import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import { Container, Header, Left, Body, Button, Title, Right } from 'native-base';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import NavBar from './Header';
import {windowHeight, windowWidth} from '../../utils/utils';
import { Colors } from './Colors';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Dashboard({ navigation }) {
    const [items, setItems] = React.useState([
        { name: 'Absence', icon: 'credit-card' },
        { name: 'Overtime', icon: 'hotel' },
        { name: 'Business Card', icon: 'address-book' },
        { name: 'Job Vacancies', icon: 'anchor' },
        { name: 'Value Card ', icon: 'id-card' },
        { name: 'Certificate', icon: 'angellist' },
        { name: 'Gifts', icon: 'gift' },
        { name: 'Travel', icon: 'globe' },
        { name: 'Delegation', icon: 'jsfiddle' },
        { name: 'Resignation', icon: 'copy' },
    ]);

    return (
        <Container style={{ backgroundColor: '#eee' }}>
            <NavBar navigation={navigation} />
            <FlatGrid
                itemDimension={80}
                data={items}
                style={styles.gridView}
                spacing={8}
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
        </Container>
    );
}

const styles = StyleSheet.create({
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