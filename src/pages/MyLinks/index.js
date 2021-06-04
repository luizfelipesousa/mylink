import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, Modal, ActivityIndicator } from 'react-native';
import { useIsFocused } from '@react-navigation/core';

import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import ModalLink from '../../components/ModalLink';
import StatusBarPage from '../../components/StatusBarPage';

import {
    Container, Title, Links, ContainerEmpty,
    WarningText
} from './styles';

import { getLinksSave, deleteLink } from '../../utils/storeLinks';

export default function MyLinks() {

    const isFocused = useIsFocused();
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [links, setLinks] = useState([]);
    const [itemSelected, setItemSelected] = useState([]);

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave('secretKey');
            setLinks(result);
            setIsLoading(false);
        }
        getLinks();
    }, [isFocused])

    function handleTouchLink(item) {
        setItemSelected(item);
        setShowModal(true);
    }

    function handleCloseModal() {
        setItemSelected([]);
        setShowModal(false);
    }

    async function handleRemoveLink(item) {
        const result = await deleteLink(links, item.id, 'secretKey');
        setLinks(result);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#132742' }}>
            <View>
                <StatusBarPage
                    backgroundColor='#132742'
                    barStyle='light-content'
                />
                <Menu />

                <Container>

                    <Title>Meus links</Title>

                    {isLoading && (
                        <ContainerEmpty
                            style={{
                                backgroundColor: 'background: rgba(255, 255, 255, 0.15)',
                                borderRadius: 8,
                                margin: 50
                            }}
                        >
                            <ActivityIndicator color="#FFF" size={60} />
                        </ContainerEmpty>
                    )}

                    {!isLoading && links.length === 0 && (
                        <ContainerEmpty>
                            <WarningText>Você não possui nenhum link :(</WarningText>
                        </ContainerEmpty>
                    )}

                    <Links
                        data={links}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) =>
                            <ListItem
                                currentItem={item}
                                onTouch={() => handleTouchLink(item)}
                                onDelete={handleRemoveLink}
                            />}
                        contentContainerStyle={{ paddingBottom: 20 }}
                        showVerticalScrollIndicator={false}
                    />

                    <Modal
                        visible={showModal}
                        transparent
                        animationType="slide">
                        <ModalLink shortLink={itemSelected} onClose={handleCloseModal} />
                    </Modal>
                </Container>
            </View>
        </SafeAreaView>
    );
}