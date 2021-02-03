import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { Container, Header, Left, Body, Button, Icon, Title, Content, Right, Row } from 'native-base';
import Accordian from './Accordian';
import { Colors } from './Colors';
import { TouchableOpacity } from "react-native-gesture-handler";
import { windowHeight, windowWidth } from '../../utils/utils';

export default class PaySlip extends Component {

    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    key: 1,
                    title: 'Edhoc payment',
                    data: 'Basic salary',
                    info: 'Housing allowance',
                    total: 'Total',
                },
                {
                    key: 2,
                    title: 'Pizzas',
                    data: 'Deduction (KD)',
                    info: 'Employee gratuity fund',
                    info2: 'Employee supplementary social assurance',
                    total: 'Total',
                },
                {
                    key: 3,
                    title: 'Drinks',
                    data: 'A drink (or beverage)',
                    info: 'Employee gratuity fund',
                    info2: 'Employee supplementary social assurance',
                    total: 'Total',
                },
                {
                    key: 4,
                    title: 'Deserts',
                    data: 'A dessert is servire',
                    info: 'Employee gratuity fund',
                    info2: 'Employee supplementary social assurance',
                    total: 'Total',
                },
            ]
        }
    }

    render() {
        return (
            <ScrollView contentContainerStyle={{ backgroundColor: Colors.WHITE }}>
                <Header style={{ backgroundColor: Colors.CORAL }}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ marginLeft: 90 }}>
                        <Title>PaySlip</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='arrow-forward' color="#fff" />
                        </Button>
                    </Right>
                </Header>
                <Content padder>
                    <Row style={styles.rowbtn}>
                        <View style={styles.mb15}>
                            <Text style={{ color: Colors.ONYX }}>March 2018</Text>
                        </View>
                        <View style={styles.mb15}>
                            <Text style={{ color: Colors.ONYX }}>April 2018</Text>
                        </View>
                        <View style={[
                            styles.mb15, { backgroundColor: Colors.CORAL }
                        ]}>
                            <Text style={{ color: Colors.WHITE, fontSize: 13 }}>
                                May 2018
                            </Text>
                        </View>
                    </Row>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ margin: 16 }}>
                            <Text style={{ color: Colors.ONYX }}>Period start date</Text>
                            <Text>01/05/2018</Text>
                        </View>
                        <View style={{ margin: 16 }}>
                            <Text style={{ color: Colors.ONYX }}>Period end date</Text>
                            <Text>31/05/2018</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        {this.renderAccordians()}
                    </View>
                </Content>
            </ScrollView>
        );
    }

    renderAccordians = () => {
        const items = [];
        for (item of this.state.menu) {
            items.push(
                <Accordian
                    title={item.title}
                    data={item.data}
                    key={item.key}
                />
            );
        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: Colors.WHITE,
    },
    mb15: {
        elevation: 1,
        height: 36,
        width: windowWidth / 3 - 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.AIR,
        marginHorizontal: 6,
    },
    rowbtn: {
        marginVertical: 10,
    },
});
