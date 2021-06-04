import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinksSave(key) {
    const myLinks = await AsyncStorage.getItem(key);

    let LinkSaves = JSON.parse(myLinks) || [];

    return LinkSaves;
}

export async function saveLink(key, newLink) {
    const linksStored = await getLinksSave(key);
    const hasLink = linksStored.some(link => link.id === newLink.id);
    if (hasLink) {
        return;
    } else {
        linksStored.push(newLink);
        await AsyncStorage.setItem(key, JSON.stringify(linksStored));
    }
}

export async function deleteLink(links, id, key) {

    let result = links.filter((item) => {
        return (item.id !== id);
    });

    console.log(result);

    await AsyncStorage.setItem(key, JSON.stringify(result));
    return result;

}