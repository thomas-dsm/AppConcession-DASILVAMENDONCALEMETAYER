import {Image, StyleSheet, Text, View} from 'react-native';
import React from "react";
import {Card} from '@ui-kitten/components';

const Col = ({ numRows, children }) => {
    return  (
        <View style={styles[`${numRows}col`]}>{children}</View>
    )
}

const Row = ({ children }) => (
    <View style={styles.row}>{children}</View>
)
export default function AcountScreen() {
    return (
        <View style={styles.app}>
            <Row>
                <Col numRows={3}>
                    <Card>
                        <Image style={styles.teaserImage} source= {require("../assets/images/default-car.png")}  alt={"car-icon"}/>
                        <Text>Voiture 1</Text>
                    </Card>
                </Col>
                <Col numRows={3}>
                    <Text>Second column</Text>
                    <Image style={styles.teaserImage} source= {require("../assets/images/default-car.png")}  alt={"car-icon"}/>
                </Col>
                <Col numRows={3}>
                    <Text>Third column</Text>
                    <Image style={styles.teaserImage} source= {require("../assets/images/default-car.png")}  alt={"car-icon"}/>
                </Col>
            </Row>
        </View>
    )
};

const styles = StyleSheet.create({
    app: {
        flex: 2,
        marginHorizontal: "auto",
        width: "100%",
    },
    row: {
        flexDirection: "row"
    },
    "3col":  {
        backgroundColor:  "grey",
        borderColor:  "#fff",
        borderWidth:  1,
        flex:  3,
        height:  300,
        alignItems:  "center",
        justifyContent:  "center",
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
});