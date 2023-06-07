import {FlatList, TouchableOpacity} from "react-native";
import MarqueListItem from "../components/MarqueListItem";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Marque} from "../entity/Marque";
import {createMarquesList} from "../data/stub";

export default function ListMarquesScreen() {

    const navigation = useNavigation();
    const MARQUES_LIST = createMarquesList();
    return (
        <FlatList
            data={MARQUES_LIST}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('MarqueDetailScreen', { marque: item })}>
                    <MarqueListItem item={item} />
                </TouchableOpacity>
            )}
            keyExtractor={(item: Marque) => item.nom}
        />    )
}
