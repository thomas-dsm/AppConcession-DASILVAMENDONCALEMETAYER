import {FlatList, TouchableOpacity} from "react-native";
import MarqueListItem from "../components/MarqueListItem";
import React from "react";
import {useNavigation} from "@react-navigation/native";
import {Marque} from "../Entity/Marque";

export const MARQUES_LIST : Marque[] = [
    new Marque("FIAT", "1899", "Italie", require("../assets/images/default-brand.png")),
    new Marque("Toyota", "1937", "Japon", require("../assets/images/default-brand.png")),
    new Marque("Mercedes-Benz", "1926", "Allemagne", require("../assets/images/default-brand.png")),
    new Marque("Ford", "1903", "États-Unis", require("../assets/images/default-brand.png")),
    new Marque("Volkswagen", "1937", "Allemagne", require("../assets/images/default-brand.png")),
    new Marque("BMW", "1916", "Allemagne", require("../assets/images/default-brand.png")),
    new Marque("Honda", "1948", "Japon", require("../assets/images/default-brand.png")),
    new Marque("Renault", "1899", "France", require("../assets/images/default-brand.png")),
    new Marque("Chevrolet", "1911", "États-Unis", require("../assets/images/default-brand.png")),
    new Marque("Audi", "1909", "Allemagne", require("../assets/images/default-brand.png"))
]

export default function ListMarquesScreen() {

    const navigation = useNavigation();

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
