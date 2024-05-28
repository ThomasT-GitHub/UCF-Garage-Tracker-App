import React from 'react';
import { ScrollView, StyleSheet, View, RefreshControl } from 'react-native';
import { Map } from './Map.jsx';
import { GaragePercentBar } from './GaragePercentBar.jsx';
import { getGarageInfo } from '../GetGarageData.js';

export const Body = () => {
    // Creates garage data to store the JSON containing the garage data
    const [garageData, setGarageData] = React.useState({});

    // Creates hasUpdatedGarageInfo to act as a flag triggered if the garage information has been fetched
    const [hasUpdatedGarageInfo, setHasUpdatedGarageInfo] = React.useState(0);

    const [refreshing, setRefreshing] = React.useState(false);

    // Initializes an array of the garage names
    const garages = ['A', 'B', 'C', 'D', 'H', 'I'];

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);

        // Updates the garage data
        fetchGarageData().then(() => setRefreshing(false));
    }, []);

    // Function to fetch garage data
    const fetchGarageData = async () => {
        try {
            // Fetch garage data
            const data = await getGarageInfo();

            // Update state with new data
            setGarageData(data);

            // Increment hasUpdatedGarageInfo to trigger re-render
            setHasUpdatedGarageInfo(prevCount => prevCount + 1);
        } catch (error) {
            console.error('Error fetching garage data:', error);
        }
    };

    // Fetch garage data when the component mounts
    React.useEffect(() => {
        fetchGarageData();
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
        >
            <Map key={`${hasUpdatedGarageInfo}`} garageData={garageData} />
            {garages.map(garage => (
                <GaragePercentBar
                    key={`${garage}-${hasUpdatedGarageInfo}`}
                    garage={garage}
                    percent={garageData[garage] ? garageData[garage]['percent'] : 0}
                    backgroundColor={garageData[garage] ? garageData[garage]['percentBarColor'] : '#F5F5F5'}
                    loading={!garageData[garage]}
                    avail={garageData[garage] ? garageData[garage]['avail'] : 0}
                />
            ))}
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        overflow: 'hidden'
    },
    contentContainer: {
        paddingHorizontal: 16,
        paddingTop: 8,
        paddingBottom: 200
    },
});
