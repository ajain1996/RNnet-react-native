import React, { Component } from "react";
import { windowHeight, windowWidth } from '../../utils/utils';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{
                height: 280, width: 240, marginLeft: 20, marginBottom: 20,
                borderWidth: 0.5, borderColor: '#dddddd' 
            }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri} style={{ 
                        flex: 1, width: null, height: null, resizeMode: 'cover' 
                    }}/>
                </View>
                <View style={{ 
                    flex: 1, paddingHorizontal: 10, 
                    justifyContent: 'center'
                }}>
                    <Text numberOfLines={3} style={{ 
                        fontSize: 16, letterSpacing: 1
                    }}>
                        {this.props.name}
                    </Text>
                </View>
            </View>
        );
    }
}
export default Category;
