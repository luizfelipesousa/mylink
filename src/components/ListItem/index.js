import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Item, LinkText, LinkIcon } from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function ListItem({ onTouch, currentItem, onDelete }) {

    function rightAction() {
        return (
            <TouchableOpacity
                style={{
                    backgroundColor: '#FF5555',
                    justifyContent: 'center',
                    width: '15%',
                    borderRadius: 7,
                }}
                onPress={() => onDelete(currentItem)}>
                <LinkIcon >
                    <Feather
                        onPress={() => onDelete(currentItem)}
                        name="trash"
                        size={25}
                        style={{
                            color: '#FFF',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }} />
                </LinkIcon>
            </TouchableOpacity>
        );
    }

    return (
        <Item>
            <Swipeable renderRightActions={() => rightAction()}>
                <TouchableOpacity style={{ flexDirection: 'row', height: 60 }} onPress={onTouch}>
                    <LinkIcon>
                        <Feather name="link" size={24} style={{ color: '#FFF' }} />
                    </LinkIcon>
                    <LinkText numberOfLines={1} >{currentItem.long_url}</LinkText>
                </TouchableOpacity>
            </Swipeable>
        </Item>
    )
}