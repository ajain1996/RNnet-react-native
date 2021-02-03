import React, { useContext } from 'react';
import { Container, Header, Left, Body, Right, Button, Title, View } from 'native-base';

import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../app_screens/Colors';
import { AuthContext } from '../../navigation/AuthProvider';

export default function HeadBar() {

    const { user, logout } = useContext(AuthContext);

    return (
        <Header>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Title style={{ color: Colors.WHITE, }}>{user.email}</Title>
            </View>
            <Right>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <FontAwesome name='plus' color="#fff" size={20} />
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <FontAwesome name='cog' color="#fff" size={20} />
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => logout()}
                    activeOpacity={.7}
                >
                    <Button transparent>
                        <FontAwesome name='sign-out' color="#fff" size={20} />
                    </Button>
                </TouchableOpacity>

            </Right>
        </Header>
    );
}
