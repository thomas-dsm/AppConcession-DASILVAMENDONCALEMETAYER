import {Voiture} from "../Entity/Voiture";
import {FlatList} from "react-native";
import VoitureListItem from "../components/VoitureListItem";

export const VOITURES_LIST : Voiture[] = [
    new Voiture("AA-000-AA", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("BB-000-BB", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("CC-000-CC", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
]

export default function ListVoituresScreen() {

    return (
        <FlatList data={VOITURES_LIST} renderItem={VoitureListItem} keyExtractor={(item: Voiture) => item.immat}/>
    )
}
