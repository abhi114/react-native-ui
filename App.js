import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Home from './component/Home'
import CoffeeHomePage from './component/CoffeeComponent/CoffeeHomePage'
import AppNavigation from './navigation/AppNavigation'
import PrHome from './component/PerplexityScroll/PrHome'
import data from './component/PerplexityScroll/fakedata'
import Parallax from './component/ParallaxCourosal/Parallax'
import SensorParallax from './component/SensorParallax/SensorParallax'
const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <PrHome data={data}/>  */}
    {/* <Parallax/>  */}
    {/* <AppNavigation>
      </AppNavigation> */}
    <SensorParallax/>
    
    </View>
  );
}


export default App