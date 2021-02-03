import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Left, Body, View, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function PostCard({ item, navigation, onDelete }) {
    return (
        <TouchableOpacity activeOpacity={.7}
            onPress={() => navigation.navigate('ShowPost', {
                postId: item.id,
                postInfo: item.post,
                postImg: item.postImg,
                postTitle: item.postTitle,
                postLocation: item.postLocation,
                postUserImg: item.userImg,
                location: item.location,
            })}
        >
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: item.userImg }} />
                        <Body>
                            <Text>{item.userName}</Text>
                            <Text note>{moment(item.postTime.toDate()).fromNow()}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    {item.postImg ? <Image source={{ uri: item.postImg }}
                        style={{ height: 260, width: null, flex: 1 }}
                    /> : <View></View>}
                </CardItem>
                <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
                    { item.post ? <Text>{item.post}</Text> : <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>}
                    {/* <Text>{item.location}</Text> */}
                </View>
                <View style={{ paddingHorizontal: 10, paddingVertical: 12 }}>
                    {item.location ? <Text>{item.location}</Text> : 
                    <View style={{flexDirection: 'row'}}>
                        <Icon name="location" style={{fontSize: 22, color:"#cc0000"}} />
                        <View style={{width: 6}}></View>
                        <Text style={{fontSize: 18}}>India</Text>
                    </View>}
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
        </TouchableOpacity>
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
