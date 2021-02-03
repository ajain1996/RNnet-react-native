import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, View } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Post({ item }) {
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={item.userImg} />
                    <Body>
                        <Text>{item.userName}</Text>
                        <Text note>{item.postTime}</Text>
                    </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                {item.postImg ? <Image source={item.postImg}
                    style={{ height: 200, width: null, flex: 1 }}
                /> : <View></View>}
            </CardItem>
            <View style={{ paddingHorizontal: 8, paddingVertical: 12 }}>
                <Text>{item.post}</Text>
            </View>
            <CardItem>
                <View style={styles.postContent}>
                    <FontAwesome name="heart" color="#2e64e5" size={18} />
                    <View style={{ width: 4 }}></View>
                    <Text style={styles.like}>{item.likes}</Text>
                </View>
                <View style={{ width: 20 }}></View>
                <View style={styles.postContent}>
                    <FontAwesome name="comment" color="#2e64e5" size={20} />
                    <View style={{ width: 4 }}></View>
                    <Text style={styles.comment}>{item.comments}</Text>
                </View>
            </CardItem>
        </Card>
    );
}

const styles = StyleSheet.create({
    postContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    like: {
        fontSize: 16,
    },
    comment: {
        fontSize: 16,
    }
});
