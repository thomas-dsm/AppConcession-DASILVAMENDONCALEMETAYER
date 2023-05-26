import { StyleSheet, Text, View } from 'react-native';
import {Nounours} from "../data/Nounours";

type NounoursListItemProps = {
    item: Nounours;
}

export default function NounoursListItem(props: NounoursListItemProps) {
    return (
        <View>
            <View style={styles.container}>
                <View style={{width: "80%"}}>
                    <Text>Name : {props.item.name}</Text>
                    <Text>{props.item.nbPoils} poils</Text>
                    <Text>{props.item.age} ans</Text>
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