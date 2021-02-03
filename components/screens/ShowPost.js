import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet, ScrollView, ActivityIndicator, Alert, ToastAndroid } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { windowHeight, windowWidth } from '../../utils/utils';
import firestore from '@react-native-firebase/firestore';

import AnotherCategory from '../navigation/AnotherCategory';

export default function ShowPost({ navigation, route }) {
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const stopLoading = () => {
        setLoading(false);
    }

    useEffect(() => {
        setTimeout(() => {
            stopLoading();
        }, 1000);
    }, []);

    useEffect(() => {
        setDeleted(false);
    }, [deleted]);

    const handleDelete = (postId) => {
        Alert.alert(
            'Delete post',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel',
                },
                {
                    text: 'Confirm',
                    onPress: () => deletePost(postId),
                },
            ],
            { cancelable: false },
        );
    };

    const deletePost = (postId) => {
        console.log('Current Post Id: ', postId);

        firestore()
            .collection('posts')
            .doc(postId)
            .get()
            .then((documentSnapshot) => {
                if (documentSnapshot.exists) {
                    const { postImg } = documentSnapshot.data();

                    if (postImg != null) {
                        const storageRef = storage().refFromURL(postImg);
                        const imageRef = storage().ref(storageRef.fullPath);

                        imageRef
                            .delete()
                            .then(() => {
                                console.log(`${postImg} has been deleted successfully.`);
                                deleteFirestoreData(postId);
                            })
                            .catch((e) => {
                                console.log('Error while deleting the image. ', e);
                            });
                        // If the post image is not available
                    } else {
                        deleteFirestoreData(postId);
                    }
                }
            });
    };

    const deleteFirestoreData = (postId) => {
        firestore()
            .collection('posts')
            .doc(postId)
            .delete()
            .then(() => {
                // Alert.alert(
                //     'Post deleted!',
                //     'Your post has been deleted successfully!',
                // );
                ToastAndroid.show('Your post has been Deleted Successfully!', ToastAndroid.SHORT);
                setDeleted(true);
                navigation.replace("HomeScreen");
            })
            .catch((e) => console.log('Error deleting posst.', e));
    };

    return (

        <ScrollView>
            {loading ? (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" color="#000" />
                    {/* {setLoading(false)} */}
                </View>
            ) :
                <View>
                    <View style={{ justifyContent: 'center', paddingTop: 30 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 250 }}>
                            {route.params.postImg ? <Image source={{ uri: route.params.postImg }}
                                style={{ width: windowWidth - 30, flex: 1 }}
                            /> : <View></View>}
                        </View>
                        <View style={{ paddingHorizontal: 15, marginVertical: 20 }}>
                            <Text style={{ fontSize: 20, color: '#21242f', fontWeight: '600' }}>
                                Mens T-shirt
                            </Text>
                            {route.params.postInfo == null ? <Text style={{ fontSize: 14, color: 'grey', marginVertical: 10 }}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.
                            </Text> : <Text style={{ fontSize: 14, color: 'grey', marginVertical: 10 }}>{route.params.postInfo}</Text>}

                            <Text style={{ fontSize: 14, color: 'grey', marginVertical: 10 }}>{route.params.location}</Text>

                            <Text style={{ fontSize: 14, color: '#21242f', fontWeight: 'bold' }}>
                                Select Size
                            </Text>

                            <View style={{ flexDirection: 'row', marginTop: 6, marginBottom: 30 }}>
                                <View style={styles.sizeView}>
                                    <Text>S</Text>
                                </View>
                                <View style={styles.osizeView}>
                                    <Text style={{ color: 'white' }}>M</Text>
                                </View>
                                <View style={styles.sizeView}>
                                    <Text>L</Text>
                                </View>
                                <View style={styles.sizeView}>
                                    <Text>XL</Text>
                                </View>
                            </View>

                            <Text style={{ fontSize: 14, color: '#21242f', fontWeight: 'bold' }}>
                                Select Color
                    </Text>

                            <View style={{ flexDirection: 'row', marginTop: 6 }}>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: '#d12a32'
                                }}></View>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: '#7719aa'
                                }}></View>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: '#f08f35'
                                }}></View>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: 'blue'
                                }}></View>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: '#419bf9'
                                }}></View>
                                <View style={{
                                    width: 32, height: 32, marginRight: 6,
                                    backgroundColor: 'pink'
                                }}></View>
                            </View>

                            <View style={styles.editDeleteView}>
                                <TouchableOpacity style={styles.editPost}
                                    onPress={() => navigation.navigate('EditPost', {
                                        postId: route.params.postId,
                                        postInfo: route.params.postInfo,
                                        postImg: route.params.postImg,
                                        postTitle: route.params.postTitle,
                                    })}
                                >
                                    <Text style={styles.btnText}>Edit Post</Text>
                                </TouchableOpacity>
                                <View style={{ width: 20 }}></View>
                                <TouchableOpacity style={styles.deletePost}
                                    onPress={() => handleDelete(route.params.postId)}
                                >
                                    <Text style={styles.btnText}>Delete Post</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>

                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                        <AnotherCategory
                            imageUri={{ uri: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                            name='Browse through our collection of lovely home photos. Cozy interiors and astonishing architecture, you will find pictures of different home settings here.'
                        />
                        <AnotherCategory
                            imageUri={{ uri: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                            name='The Internet Is UNDER ATTACK, Net Neutrality is Dying, and What You Can Do...'
                        />
                        <AnotherCategory
                            imageUri={{ uri: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                            name='The Poop In My Pants | Rick and Morty | Adult Swim.The Poop In My Pants | Rick and Morty | Adult Swim.'
                        />
                        <AnotherCategory
                            imageUri={{ uri: 'https://images.pexels.com/photos/33972/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                            name="In today's video, we find out just how much proto-putty can take before it"
                        />
                        <AnotherCategory
                            imageUri={{ uri: 'https://cdn.pixabay.com/photo/2019/07/14/10/48/mosel-4336787__340.jpg' }}
                            name='We asked our readers to share with us the many ways they think of home and what having a home really means to them.'
                        />
                    </ScrollView>
                </View>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    sizeView: {
        width: 32, height: 32,
        backgroundColor: '#c1c1c1',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    osizeView: {
        width: 32, height: 32,
        backgroundColor: '#f08f35',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 6,
    },
    editDeleteView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40,
        marginBottom: 20
    },
    editPost: {
        width: windowWidth / 2 - 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#007bff',
    },
    deletePost: {
        width: windowWidth / 2 - 30,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dc3545',
    },
    btnText: {
        color: 'white',
        fontSize: 18
    }
});
