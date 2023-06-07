import { Voiture } from "../entity/Voiture";
import {Marque} from "../entity/Marque";

export const createVoituresList = (): Voiture[] => {
    const VOITURES_LIST: Voiture[] = [
        new Voiture("AA-000-AA", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("BB-000-BB", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("CC-000-CC", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("DD-000-DD", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("EE-000-EE", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("FF-000-FF", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("GG-000-GG", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("HH-000-HH", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("II-000-II", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
        new Voiture("JJ-000-JJ", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    ];

    return VOITURES_LIST;
};

export const createMarquesList = () : Marque[] => {
    const MARQUES_LIST : Marque[] = [
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
    ];

    return MARQUES_LIST;
}