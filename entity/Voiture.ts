import {Image} from "react-native";

export class Voiture {
    immat: string;
    dateImmat: string;
    couleur: string;
    image: Image;

    constructor(immat: string, dateImmat: string, couleur: string, image: Image) {
        this.immat = immat;
        this.dateImmat = dateImmat;
        this.couleur = couleur;
        this.image = image;
    }

    // getImmat(): string {
    //     return this.immat;
    // }
    //
    // getDateImmat(): string {
    //     return this.dateImmat;
    // }
    //
    // getCouleur(): string {
    //     return this.couleur;
    // }
    //
    // getImage(): Image {
    //     return this.image;
    // }
}

