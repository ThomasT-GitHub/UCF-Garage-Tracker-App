import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Body } from './components/Body.jsx';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      <View style={{ justifyContent: 'center', alignItems: 'center', height: 50, backgroundColor: '#ffffff' }}>
        <Text style={{ fontSize: 22, fontWeight: '500', textAlign: 'center' }}>UCF Garage Tracker</Text>
      </View>
      <Body />
    </>
  );
}

export default App;