import { StyleSheet, Text, View, Image } from 'react-native';
import {Voiture} from "../entity/Voiture";

type VoitureListItemProps = {
    item: Voiture;
}

export default function VoitureListItem(props: VoitureListItemProps) {
    return (
        <View>
            <View style={styles.container}>
        <View style={{width: "80%"}}>
    <Text>Name : {props.item.immat}</Text>
    <Text>{props.item.dateImmat}</Text>
    <Text>{props.item.couleur}</Text>
    </View>
    <View>
    <Image style={styles.teaserImage} source={props.item.image}/>
    </View>
    </View>
    <View style={styles.separator}/>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        marginHorizontal: "5%"
    },
    separator: {
        marginVertical: 4,
        backgroundColor: "rgba(255,255,255,0.3)",
        height: 1,
        width: '90%',
    },
    teaserImage: {
        width: 50,
        height: 50,
    }
});
