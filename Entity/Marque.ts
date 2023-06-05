import {Image} from "react-native";

export class Marque {
    nom: string;
    annee_creation: string;
    pays: string;
    image: Image;

    constructor(nom: string, annee_creation: string, pays: string, image: Image) {
        this.nom = nom;
        this.annee_creation = annee_creation;
        this.pays = pays;
        this.image = image;
    }
}