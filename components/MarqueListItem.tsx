import { StyleSheet, Text, View, Image } from 'react-native';
import {Marque} from "../entity/Marque";

type MarqueListItemProps = {
    item: Marque;
}

export default function MarqueListItem(props: MarqueListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={{width: "80%"}}>
                    <Text>Name : {props.item.nom}</Text>
                    <Text>{props.item.annee_creation}</Text>
                    <Text>{props.item.pays}</Text>
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
