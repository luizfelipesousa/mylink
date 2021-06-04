import React from 'react';
import { ButtonMenu } from './styles';
import { Feather } from '@expo/vector-icons';

export default function Share() {

    return (
        <ButtonMenu onPress={() => { console.log('Shared') }}>
            <Feather name="share-2" size={40} color="#FFF" />
        </ButtonMenu>
    );
}