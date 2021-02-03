import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Container } from 'native-base';
import FormButton from '../auth/FormButton';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { windowHeight, windowWidth } from '../../utils/utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Icon } from 'native-base';

const ProfileScreen = () => {
  const list = [];
  const { user, logout } = useContext(AuthContext);

  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      await firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then((querySnapshot) => {
          // setPosts(querySnapshot);

          list.push({
            firstName: querySnapshot.data().firstName,
            lastName: querySnapshot.data().lastName,
            email: querySnapshot.data().email,
          })

        });

      console.log('this is This is list ooooooooooooo \n\n\n\n\n\n\n\n', list);

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
    fetchUsers();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{ height: 160, width: windowWidth, backgroundColor: '#0073ff' }}></View>
        <View style={{
          borderWidth: 6, borderColor: '#fff', borderRadius: 15, width: windowWidth / 3 + 50,
          height: windowWidth / 3 + 50, marginTop: -85,
        }}>
          <Image source={require('../../assets/users/user-1.jpg')}
            style={{ height: 260, width: null, flex: 1, borderRadius: 15 }}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.text}>Ankit Jain{list.firstName} </Text>
          {/* <Text style={styles.text}> {posts.lastName}</Text> */}
        </View>

        <View style={{ marginTop: 2 }}>
          <Text style={{ fontSize: 16, color: 'grey' }}>React Native developer, India</Text>
        </View>

        <View style={{ marginTop: 4, }}>
          <Image source={require('../../assets/rating.png')} style={{
            width: windowWidth / 2 - 60, height: 30,
          }} />
        </View>

        <View style={styles.mentorme}>
          <AntDesign name="user" size={20} color="#fff" />
          <View style={{ width: 12 }}></View>
          <Text style={styles.f_20}>Mentor Me</Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <View style={[styles.userInfoSection, {
            width: windowWidth / 2 - 12
          }]}>
            <View style={styles.row}>
              <Icon style={{ fontSize: 22, color: 'red' }} name="location" />
              <Text style={{ fontSize: 16, marginLeft: 6 }}>Kolkata, India</Text>
            </View>
            <View style={styles.row}>
              <Icon style={{ fontSize: 22, color: 'green' }} name="call" />
              <Text style={{ 
                color: "#000", fontSize: 16, marginLeft: 6 
              }}>+91-900000009</Text>
            </View>
            <View style={styles.row}>
              <AntDesign name="mail" size={20} color="orange" />
              <Text style={{ 
                color: "#000", fontSize: 16, marginLeft: 6 
              }}>My Profile</Text>
            </View>
          </View>

          <View style={{ width: 12 }}></View>

          <View style={{ width: windowWidth / 2, justifyContent: 'center', paddingRight: 8 }}>
            <Text>About Me</Text>
            <View style={styles.aboutBorder}></View>
            <Text>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical </Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <View style={styles.w2}>
            <FormButton buttonTitle="Logout" onPress={() => logout()} />
          </View>
          <View style={{ width: windowWidth / 2 - 20, marginRight: 20 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={styles.mail}>
                <AntDesign name="mail" size={24} color="black" />
              </View>
              <View style={styles.mail}>
                <AntDesign name="edit" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>

        {/* <Text>{posts.firstName}</Text> */}

      </View>
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: '#333333'
  },
  mentorme: {
    width: windowWidth / 2 - 20, height: 50, backgroundColor: '#0073ff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
  },
  f_20: {
    color: '#fff',
    fontSize: 20,
  },
  mail: {
    justifyContent: 'center', alignItems: 'center',
    width: windowWidth / 4, height: windowHeight / 8,
  },
  w2: {
    width: windowWidth / 2 - 20, marginLeft: 20,
  },
  userInfoSection: {
    paddingHorizontal: 15,
    marginBottom: 25,
    paddingTop: 30
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  aboutBorder: {
    borderBottomColor: '#0073ff', borderBottomWidth: 4,
    marginRight: 12, marginVertical: 6,
  }
});