import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const ContainerLogo = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px'}
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const ContainerText = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: ${Platform.OS === 'ios' ? 25 % + '%' : 15 + '%'}
`;

export const Title = styled.Text`
    color: white;
    font-size: 35px;
    font-weight: bold;
    text-align: center;
`;

export const SubTitle = styled.Text`
    color: white
    font-size: 20px;
    text-align: center;
    padding-bottom: 10%;
`;

export const LinkContainer = styled.View`
    align-items: center;
    flex-direction: row ;
    margin: 15px 0 ;
    padding: 0 15px;
    border-radius: 7px;
`;

export const IconBox = styled.View`
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 11%;
    padding: 0 10px;
    background-color: rgba(255,255,255,0.15);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const LinkField = styled.TextInput`
    color: white;
    height: 50px;
    width: 90%;
    padding: 10px;
    background-color: rgba(255,255,255,0.15);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    font-size: 15px;
`;

export const LinkGenerator = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    margin: 0 15px;
    height: 50px;
    background-color: #FFF;
    font-size: 25px;
    border-radius: 7px;
    margin: 0 15px 15px 15px;
    width: 94%;
`;

export const ButtonLink = styled.Text`
    color: #000;
    text-align: center;
    width: 100%;
    font-size: 17px;
`;