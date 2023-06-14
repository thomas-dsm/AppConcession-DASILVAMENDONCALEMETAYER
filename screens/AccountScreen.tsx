import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from "react";
import SlidingUpCard from 'react-native-slidingcard'
import {addFavorite} from "../redux/actions/addFavorite";
const width = num => Dimensions.get('window').width * (num / 100)
const height = num => Dimensions.get('window').height * (num / 100)

const imgSample1 = require('../assets/images/voiture-deujna-dobby-gp-explorer.png')
const imgSample2 = require('../assets/images/voiture-kaatsup-lebouseuh-gp-explorer.png')
const imgSample3 = require('../assets/images/voiture-manon-djilsi-gp-explorer.png')
const imgSample4 = require('../assets/images/voiture-squezzie-gotaga-gp-explorer.png')
const dataSample = [{ key: 0, image: imgSample1 }, { key: 1, image: imgSample2 },
    { key: 2, image: imgSample3 }, { key: 3, image: imgSample4 }]
export default function AcountScreen() {

    const _onPressSample = () => {
        alert('Ajoutée aux favoris');

        const image = dataSample[0].image;
        addFavorite(image);
        console.log(image);
    };

    return (

        <View style={styles.container}>
            <Text style={styles.text}>Mes voitures  :</Text>
            <SlidingUpCard
                onPress={_onPressSample}
                styleCard={styles.imgCardSize}
                marginFromBottom={height(5)}
                data={dataSample} />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    imgCardSize: {
        marginLeft: width(5),
        height: height(32),
        width: width(90),
        borderRadius: 9
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 10
    }
});