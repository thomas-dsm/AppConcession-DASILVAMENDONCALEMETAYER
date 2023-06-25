import {Voiture} from "../entity/Voiture";
import {FlatList, TouchableOpacity} from "react-native";
import VoitureListItem from "../components/VoitureListItem";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {createVoituresList} from "../data/stub";

export default function ListVoituresScreen() {

    const navigation = useNavigation();
    const VOITURES_LIST = createVoituresList();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Liste des voitures',
        });
    }, [navigation]);

    return (
        <FlatList
            data={VOITURES_LIST}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('VoitureDetailScreen', { voiture: item })}>
                    <VoitureListItem item={item} />
                </TouchableOpacity>
            )}
            keyExtractor={(item: Voiture) => item.immat}
        />    )
}
