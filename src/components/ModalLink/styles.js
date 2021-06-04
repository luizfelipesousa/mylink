import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

export const ModalContainer = styled.View`
    width: 100%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    justify-content: center;
    background-color: #fff;
    position: absolute;
    height:50%;
    bottom: 0;
`;


export const BoxIcon = styled.View`
    flex-direction: row;   
    justify-content: space-between;
    margin: 20px
`;

export const ContentContainer = styled.View`
    justify-content: center;
    align-items:flex-start;
    margin: 60px 30px 30px 30px;
`;

export const LinkTitle = styled.Text`
   color:#1CCBAE;
   font-weight: bold;
   font-size: 30px;
`;

export const LinkSource = styled.Text`
    color:#A7A7A7;
    font-size: 19px;
`;

export const LinkContainer = styled.TouchableOpacity`
    flex-direction: row;   
    background-color:#172742;  
    border-radius: 7px;
    height: 60px;
    width: 90%;
    align-items:center;
    margin-left: 20px;
    margin-bottom: 50px;
    padding: 10px;
    justify-content: space-between;
`;

export const LinkShorted = styled.Text`
    width: 85%;
    padding: 10px;
    color: #fff;
`;

export const ShortLinkInput = styled.Text`
`;