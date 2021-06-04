import styled from 'styled-components';

export const Item = styled.View`
    align-items: center;
    color: white;
    margin: 7px;
`;

export const LinkIcon = styled.TouchableOpacity`
    background-color: rgba(255,255,255,0.15);
    justify-content: center;
    padding: 11px;
    margin-left: 5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const LinkText = styled.Text`
    padding-top: 20px;
    padding-left: 10px;
    margin-right: 5px;
    justify-content: center;
    width: 82%;
    background-color: rgba(255,255,255,0.15);
    color: white;
    font-size: 17px;
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
`;