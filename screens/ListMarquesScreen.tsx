import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MarqueListItem from "../components/MarqueListItem";
import { Marque } from "../entity/Marque";
import { createMarquesList } from "../data/stub";

export default function ListMarquesScreen() {
    const navigation = useNavigation();
    const MARQUES_LIST = createMarquesList();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Liste des marques',
        });
    }, [navigation]);

    const renderMarqueItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate("MarqueDetailScreen", { marque: item })}
        >
            <MarqueListItem item={item} />
        </TouchableOpacity>
    );

    const keyExtractor = (item: Marque) => item.nom;

    return (
        <FlatList
            data={MARQUES_LIST}
            renderItem={renderMarqueItem}
            keyExtractor={keyExtractor}
        />
    );
}
