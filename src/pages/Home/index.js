import React, { useState } from 'react';
import {
    View, Text, StyleSheet, SafeAreaView, TouchableWithoutFeedback,
    Keyboard, KeyboardAvoidingView, Modal, ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';
import Share from '../../components/Share';
import api from '../../services/api';
import { saveLink } from '../../utils/storeLinks';

import {
    ContainerLogo, ContainerText, Logo, Title, SubTitle, LinkField,
    LinkGenerator, LinkContainer, IconBox, ButtonLink
} from './styles';
import ModalLink from '../../components/ModalLink';

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [showModal, setModal] = useState(false);
    const [dataShortLink, setDataShortLink] = useState({});

    async function handleShortLink() {
        setLoading(true);
        try {
            console.log('Estou aqui handleShortLink');
            const response = await api.post('shorten',
                { long_url: input }
            );
            console.log(response.data);
            setDataShortLink(response.data);
            setLoading(false);
            setModal(true);
            saveLink('secretKey', response.data);
            Keyboard.dismiss();
            setInput('');


        } catch (error) {
            console.log(error);
            setLoading(false);
            if(input === '') {
                alert('Cole seu link...');
            } else {
                alert('Verifique se a URL está correta...');
                setInput('');
            }
            Keyboard.dismiss();
        }
    }

    function handleDismiss() {
        Keyboard.dismiss();
        setModal(false);
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center' }} >
            <TouchableWithoutFeedback onPress={handleDismiss}>
                <LinearGradient
                    style={{ flex: 1, justifyContent: 'center', height: '100%' }}
                    colors={['#1DDBB9', '#132742']}>

                    <StatusBarPage
                        barStyle='light-content'
                        backgroundColor='#1DDBB9' />
                    <Menu />
                    <Share />

                    <KeyboardAvoidingView
                        behavior={Platform.OS === "ios" ? "padding" : "position"}
                        enabled
                    >

                        <ContainerLogo>
                            <Logo source={require('../../assets/Logo.png')} resizeMode="contain" />
                        </ContainerLogo>

                        <ContainerText>
                            <Title>SujeitoLink</Title>
                            <SubTitle>Cole seu link para encurtar</SubTitle>

                            <LinkContainer>
                                <IconBox>
                                    <Feather name="link" size={22} color="#FFF" />
                                </IconBox>
                                <LinkField
                                    placeholder="Cole seu link aqui..."
                                    placeholderTextColor="#FFF"
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    keyboardType='url'
                                    value={input}
                                    onChangeText={(text) => setInput(text)}
                                />

                            </LinkContainer>

                            <LinkGenerator>
                                {loading ? (
                                    <ActivityIndicator color="#121212" size={24} />
                                ) : (
                                    <ButtonLink onPress={handleShortLink}>
                                        Gerar Link
                                    </ButtonLink>
                                )}

                            </LinkGenerator>
                        </ContainerText>
                    </KeyboardAvoidingView>
                    <Modal
                        style={{ width: '100%' }}
                        visible={showModal}
                        transparent
                        animationType="slide"
                    >
                        <ModalLink shortLink={dataShortLink} onClose={() => setModal(false)} />

                    </Modal>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}