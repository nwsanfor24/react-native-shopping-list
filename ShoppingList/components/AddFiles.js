import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({addItem}) => {
    const [text, setText] = useState('');
    const onChange = textValue => setText(textValue);

    return (
        <View>
            <TextInput
                placeholder="Add Item..."
                style={styles.input}
                onChangeText={onChange}
                value={text}
            />
            <TouchableOpacity 
                style={styles.btn}
                onPress={() => {
                    addItem(text);
                    setText('');
                }}
            />
        </View>
    )
}