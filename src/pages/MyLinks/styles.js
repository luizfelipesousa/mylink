import styled from 'styled-components';
import { Platform } from 'react-native';


export const Container = styled.View`
`;

export const Title = styled.Text`
    margin-top: ${Platform.OS === 'ios' ? 37 + '%' : 25 + '%'}
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 33px;
    font-weight: bold;
    color: white;
`;

export const Links = styled.FlatList`
`;

export const ContainerEmpty = styled.View`
    height: 50%;
    justify-content: center;
    align-items: center;
`;

export const WarningText = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #FFF;
`;
