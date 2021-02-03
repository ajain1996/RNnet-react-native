import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Left,
    Right,
    Card,
    CardItem,
    Body,
    Text,
    Thumbnail,
    Radio,
    Row,
    Accordion,
    View
} from "native-base";
import { windowWidth } from '../../utils/utils';
import { TouchableOpacity } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from './Colors';

const logo = require("../../assets/userProfile.png");

export default function Settings({ navigation }) {
    return (
        <Container style={styles.container}>
            <Header style={{ backgroundColor: Colors.CORAL }}>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body style={{ marginLeft: 90 }}>
                    <Title>Settings</Title>
                </Body>
                <Right>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MyDashboards')}
                        activeOpacity={.7}
                    >
                        <Button transparent>
                            <Icon name='arrow-forward' color={Colors.WHITE} />
                        </Button>
                    </TouchableOpacity>
                </Right>
            </Header>

            <Content padder style={{ marginVertical: 20 }}>
                <Text style={{ marginBottom: 10 }}>Notifications</Text>
                <View style={styles.mbs}>
                    <FontAwesome name='bell' size={24} color={Colors.CORAL} />
                    <View style={{
                        paddingHorizontal: 10, width: windowWidth / 1.5
                    }}>
                        <Text style={styles.cardlargetext}>
                            Filter Notifications
                        </Text>
                        <View style={{ height: 10 }}></View>
                        <Text note style={styles.cardsmalltext}>
                            Do not send me notifications that are not related to my profile
                        </Text>
                    </View>
                    <Right>
                        <Radio selected={false} />
                    </Right>
                </View>

                <Text style={{ marginVertical: 15 }}>Security</Text>
                <View style={styles.mbs}>
                    <FontAwesome name='asterisk' size={24} color={Colors.CORAL} />
                    <View style={{
                        paddingHorizontal: 10, width: windowWidth / 1.5
                    }}>
                        <Text style={styles.cardlargetext}>
                            Face ID/fingerprint
                        </Text>
                        <View style={{ height: 10 }}></View>
                        <Text note style={styles.cardsmalltext}>
                            Do not send me notifications that are not related to my profile
                        </Text>
                    </View>
                    <Right>
                        <Radio selected={true} />
                    </Right>
                </View>

                <View style={styles.mbs}>
                    <FontAwesome name='lock' size={24} color={Colors.CORAL} />
                    <View style={{ width: 10 }}></View>
                    <Text style={styles.cardlargetext}>
                        Password reset
                    </Text>
                </View>

                <View style={styles.mbs}>
                    <FontAwesome name='angellist' size={24} color={Colors.CORAL} />
                    <View style={{
                        paddingHorizontal: 10, width: windowWidth / 1.5
                    }}>
                        <Text style={styles.cardlargetext}>
                            Session timeout
                        </Text>
                        <View style={{ height: 10 }}></View>
                        <Text note style={styles.cardsmalltext}>
                            Do not send me notifications that are not related to my profile
                        </Text>
                        <Row style={styles.rowbtn}>
                            <Button style={styles.mb15}>
                                <Text style={{ color: Colors.ONYX }}>05 min</Text>
                            </Button>
                            <Button style={styles.mb15}>
                                <Text style={{ color: Colors.ONYX }}>10 min</Text>
                            </Button>
                            <Button style={[
                                styles.mb15, { backgroundColor: Colors.WHITE }
                            ]}>
                                <Text style={{ color: Colors.CORAL, fontSize: 13 }}>
                                    15 min
                                </Text>
                            </Button>
                        </Row>
                    </View>
                    <Right>
                        <Radio selected={false} />
                    </Right>
                </View>

                <View style={[styles.mbs, { marginTop: 6 }]}>
                    <FontAwesome name='lock' size={24} color={Colors.CORAL} />
                    <View style={{ width: 10 }}></View>
                    <Text style={styles.cardlargetext}>
                        User manual
                    </Text>
                    <Right>
                        <View style={styles.downloadBtn}>
                            <FontAwesome name="download" size={14} color={Colors.SILVER} />
                        </View>
                    </Right>
                </View>

            </Content>
        </Container>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.AIR,
    },
    mbs: {
        padding: 10,
        flexDirection: 'row',
        backgroundColor: Colors.WHITE,
    },
    mb: {
        marginBottom: 0
    },
    cardlargetext: {
        fontSize: 14
    },
    cardsmalltext: {
        fontSize: 13
    },
    mb15: {
        marginBottom: 0,
        elevation: 1,
        height: 32,
        backgroundColor: Colors.AIR,
    },
    rowbtn: {
        marginVertical: 10
    },
    downloadBtn: {
        height: 24,
        width: 24,
        borderColor: Colors.SILVER,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    }
});
