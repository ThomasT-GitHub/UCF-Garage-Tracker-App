import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, LayoutAnimation, UIManager, Platform, Linking, TouchableOpacity } from 'react-native';

// If user is on android, enable animations
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

export const GarageIcon = (props) => {
    // Stores the garage icon color
    const [garageIconColor, setGarageIconColor] = useState('#f3f3f3');

    // Stores the link for the directions of each garage
    const garageLinks = {
        'A': 'https://maps.app.goo.gl/zfTdWzFy2py2wUkY9',
        'B': 'https://maps.app.goo.gl/S8cmBEDo3HUCssjn6',
        'C': 'https://maps.app.goo.gl/4Yg85Qy2obhzRJ6QA',
        'D': 'https://maps.app.goo.gl/4xEsx9yemY5hTng16',
        'H': 'https://maps.app.goo.gl/4xEsx9yemY5hTng16',
        'I': 'https://maps.app.goo.gl/1XzfkG3YJtN4itaM7'


    };

    useEffect(() => {
        // Sets the color
        setGarageIconColor(props.color);

        // Smoothly moves the bar to the correct percentage
        LayoutAnimation.configureNext(LayoutAnimation.create(1000, 'easeInEaseOut', 'opacity'));
    }, []);


    return (
        <TouchableOpacity onPress={() => Linking.openURL(garageLinks[props.garage])} style={[styles.overlay, { top: props.top, left: props.left, width: props.width, height: props.height, transform: [{ rotate: props.transform }], backgroundColor: garageIconColor }]}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.garageLetter}>{props.garage}</Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute', // Position the overlay absolutely
        opacity: 0.95,
        zIndex: 2,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        borderColor: 'rgba(0, 0, 0, 0.66)',
        borderWidth: 1

    },
    garageLetter: {
        fontSize: 20,
        fontWeight: 'bolder',
        color: 'rgba(0, 0, 0, 0.66)',
    }
});
