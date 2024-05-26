import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, LayoutAnimation, UIManager, Platform, ActivityIndicator } from 'react-native';


// If user is on android, enable animations
if (Platform.OS === 'android') {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
}

// Component for each Garage and their percent bar
export const GaragePercentBar = (props) => {
    // Stores the percent number of a garage
    const [percentNumber, setPercentNumber] = useState(0.1);

    // Sets the percent of the percent bar
    useEffect(() => {
        // Sets the percentNumber to the percent value
        setPercentNumber(props.percent);

        // Smoothly moves the bar to the correct percentage
        LayoutAnimation.configureNext(LayoutAnimation.create(1000, 'easeInEaseOut', 'opacity'));
    }, []);

    return (
        <>
            <Text style={styles.garageNameText}>Garage {props.garage}</Text>
            <View style={styles.emptyPercentBar}>
                <View style={[styles.activePercentBar, { width: percentNumber + '%' }, { backgroundColor: props.backgroundColor }]}>
                    <Text style={styles.percentText}>
                        {percentNumber}%
                    </Text>
                </View>
                {props.loading && <ActivityIndicator style={styles.loadingWheel} size='large' color='#000000' />}
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    emptyPercentBar: {
        flex: 0,
        justifyContent: 'center',
        width: '100%',
        height: 45,
        backgroundColor: '#F5F5F5',
        borderRadius: 16,
        overflow: 'hidden',
    },
    activePercentBar: {
        borderRadius: 16,
        width: '0%',
        height: '100%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    garageNameText: {
        fontSize: 20,
        fontWeight: '350',
        paddingTop: 16,
        paddingBottom: 16,
    },
    percentText: {
        fontSize: 20,
        color: '#ffffff',

    },
    loadingWheel: {
        position: 'absolute',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
    }
});
