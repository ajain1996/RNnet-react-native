import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, ActivityIndicator, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import PostCard from '../navigation/PostCard';

export default function HomeScreen({ navigation }) {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
            const list = [];

            await firestore()
                .collection('posts')
                .orderBy('postTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    // console.log('Total Posts: ', querySnapshot.size);

                    querySnapshot.forEach((doc) => {
                        const {
                            userId,
                            post,
                            postImg,
                            postTime,
                        } = doc.data();
                        list.push({
                            id: doc.id,
                            userId,
                            userName: 'Test Name',
                            userImg:
                                'https://lh5.googleusercontent.com/-b0PKyNuQv5s/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclxAM4M1SCBGAO7Rp-QP6zgBEUkOQ/s96-c/photo.jpg',
                            postTime: postTime,
                            post,
                            postImg,
                        });
                    });
                });

            setPosts(list);

            if (loading) {
                setLoading(false);
            }

            // console.log('Posts: ', list);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const ListHeader = () => {
        return null;
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {loading ? (
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <ActivityIndicator size="large" color="#fff" />
                </View>
            ) : (
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => (
                            <PostCard item={item}
                                navigation={navigation} 
                            />
                        )}
                        keyExtractor={(item) => item.id}
                        ListHeaderComponent={ListHeader}
                        ListFooterComponent={ListHeader}
                        showsVerticalScrollIndicator={false}
                    // refreshControl={
                    //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                    // }
                    />
                )}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333',
    },
})
