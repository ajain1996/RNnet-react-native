import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Card, Container, Left, Right, Row } from 'native-base';
import { Colors } from './Colors';

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: props.data,
            expanded: false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {

        return (
            <Card style={styles.container}>
                <TouchableOpacity ref={this.accordian} style={styles.row}
                    onPress={() => this.toggleExpand()}
                >
                    <Text style={[styles.title, styles.font]}>
                        {this.props.title}
                    </Text>
                    <Icon
                        name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} 
                        size={22} 
                        color={Colors.SILVER} 
                    />
                </TouchableOpacity>
                <View style={styles.parentHr} />
                {
                    this.state.expanded &&
                    <View style={styles.child}>
                        <Row style={{backgroundColor: Colors.OASISLIGHT, padding: 10,}}>
                            <Text style={{color: Colors.WHITE}}>{this.props.data}</Text>
                            <Right>
                                <Text>$ 300</Text>
                            </Right>
                        </Row>
                        <View style={{ height: 1, backgroundColor: Colors.AIR }}></View>
                        <Row style={{backgroundColor: Colors.AIR, padding: 10,}}>
                            <Text>{this.props.data}</Text>
                            <Right>
                                <Text>$ 300</Text>
                            </Right>
                        </Row>
                        <View style={{ height: 1, backgroundColor: Colors.AIR }}></View>
                        <Row style={{backgroundColor: Colors.AIR, padding: 10,}}>
                            <Text>{this.props.data}</Text>
                            <Right>
                                <Text>$ 300</Text>
                            </Right>
                        </Row>
                    </View>
                }

            </Card>
        )
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }

}

const styles = StyleSheet.create({
    container: {
        elevation: 1,
        color: Colors.WHITE,
        borderColor: Colors.WHITE,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.ONYX,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 42,
        paddingLeft: 12,
        paddingRight: 4,
        alignItems: 'center',
    },
    parentHr: {
        height: 1,
        width: '86%',
        elevation: 1,
    },
    child: {
        marginHorizontal: 12,
        marginBottom: 10,
    }

});