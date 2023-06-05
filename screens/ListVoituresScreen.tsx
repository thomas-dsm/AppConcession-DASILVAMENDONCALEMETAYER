import {Voiture} from "../Entity/Voiture";
import {FlatList, TouchableOpacity} from "react-native";
import VoitureListItem from "../components/VoitureListItem";
import React from "react";
import {useNavigation} from "@react-navigation/native";

export const VOITURES_LIST : Voiture[] = [
    new Voiture("AA-000-AA", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("BB-000-BB", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("CC-000-CC", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
]

export default function ListVoituresScreen() {

    const navigation = useNavigation();

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
