import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Clipboard from 'expo-clipboard';
import {
    BoxIcon, ContentContainer, LinkContainer, LinkSource,
    LinkShorted, LinkTitle, ModalContainer, ShortLinkInput,
} from './styles';
import {
    TouchableOpacity, Share, TouchableWithoutFeedback
} from 'react-native';

export default function ModalLink({ onClose, shortLink }) {

    const [originalLink, setOriginalLink] = useState(shortLink.long_url);
    const [shortedLink, setShorted] = useState(shortLink.link);

    function copyLink() {
        Clipboard.setString(shortedLink);
    }

    async function handleShare() {
        try {
            const result = await Share.share({
                message: `Veja este link incrível! ${shortedLink}`,
                title: 'Titulo',
                url: `${shortedLink}`
            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    console.log('ActivityType')
                } else {
                    console.log('Compartilhado com sucesso!');
                }
            } else if (result.action === Share.dismissedAction) {
                console.log('Modal fechado!');
            }


        } catch (error) {
            console.error(error);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={onClose}>
            <ModalContainer >
                <BoxIcon>
                    <TouchableOpacity onPress={onClose}>
                        <Feather name="x" size={40} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleShare} >
                        <Feather name="share" size={40} />
                    </TouchableOpacity>
                </BoxIcon>

                <ContentContainer>
                    <LinkTitle>Link Encurtado:</LinkTitle>
                    <LinkSource numberOfLines={1}>
                        {originalLink}
                </LinkSource>
                </ContentContainer>

                <LinkContainer
                    activeOpacity={1} onPress={copyLink}
                >
                    <LinkShorted numberOfLines={1}>
                        {shortedLink}
                    </LinkShorted>
                    <ShortLinkInput>
                        <TouchableOpacity onPress={copyLink}>
                            <Feather name="copy" size={40} color="#FFF" />
                        </TouchableOpacity>
                    </ShortLinkInput>
                </LinkContainer>

            </ModalContainer>
        </TouchableWithoutFeedback>
    );
}