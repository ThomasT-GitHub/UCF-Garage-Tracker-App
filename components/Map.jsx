import React from 'react';
import { View, Image, Text } from 'react-native';
import { GarageIcon } from './GarageIcon';

// Map component displaying the map of UCF
export const Map = (props) => {
    return (
        <>
            <View
                style={{
                    flex: 0,
                    width: '100%',
                    height: '44%',
                    backgroundColor: '#FFFFFF',
                    overflow: 'hidden',
                    borderRadius: 20,
                    alignItems: 'center',
                    position: 'relative', // Set the position to relative
                }}
            >
                <GarageIcon
                    garage='I'
                    top='46%'
                    left='9%'
                    width='12%'
                    height='8%'
                    transform='10deg'
                    color={props.garageData['I'] ? props.garageData['I']['garageIconColor'] : '#f3f3f3'}
                />
                <GarageIcon
                    garage='A'
                    top='60%'
                    left='1%'
                    width='15%'
                    height='8%'
                    transform='55deg'
                    color={props.garageData['A'] ? props.garageData['A']['garageIconColor'] : '#f3f3f3'}
                />
                <GarageIcon
                    garage='B'
                    top='85%'
                    left='46%'
                    width='11%'
                    height='8%'
                    transform='-10deg'
                    color={props.garageData['B'] ? props.garageData['B']['garageIconColor'] : '#f3f3f3'}
                />
                <GarageIcon
                    garage='C'
                    top='38%'
                    left='83%'
                    width='11%'
                    height='8%'
                    transform='90deg'
                    color={props.garageData['C'] ? props.garageData['C']['garageIconColor'] : '#f3f3f3'}
                />
                <GarageIcon
                    garage='D'
                    top='16%'
                    left='73%'
                    width='11%'
                    height='8%'
                    transform='40deg'
                    color={props.garageData['D'] ? props.garageData['D']['garageIconColor'] : '#f3f3f3'}
                />
                <GarageIcon
                    garage='H'
                    top='16%'
                    left='39%'
                    width='10%'
                    height='8%'
                    transform='-20deg'
                    color={props.garageData['H'] ? props.garageData['H']['garageIconColor'] : '#f3f3f3'}
                />

                <Image
                    source={{ uri: "https://raw.githubusercontent.com/thomastrivino/UCF-Garage-Availability-Map-Visualizer/master/staticmap.png" }}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%',
                        marginBottom: -10,
                        zIndex: 1, // Ensure the map image is behind the overlay divs
                    }}
                    resizeMode='cover'
                />
            </View>

            <Text
                style={{
                    bottom: 0,
                    width: '100%',
                    padding: 0,
                    color: '#777777',
                    textAlign: 'left',
                    fontSize: 12,
                    fontWeight: 'lighter',
                }}>
                Tap on a garage for directions
            </Text>
        </>
    );
}
