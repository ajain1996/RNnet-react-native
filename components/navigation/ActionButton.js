import React, { Component } from 'react';
import { View, Button, Icon, Fab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class ActionButton extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false
        };
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{ backgroundColor: '#5067FF' }}
                    position="bottomRight"
                    onPress={() => this.setState({ active: !this.state.active })}>
                    <Icon name="add" />
                    <Button style={{ backgroundColor: '#34A34F' }}>
                        <Icon name="logo-whatsapp" />
                    </Button>
                    <Button style={{ backgroundColor: '#3B5998' }}>
                        <Icon name="logo-facebook" />
                    </Button>
                    <Button disabled style={{ backgroundColor: '#2E64E5' }}>
                        <FontAwesome name="camera" color="white" size={20} />
                    </Button>
                </Fab>
            </View>
        );
    }
}