import React from 'react';
import {Image, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import QuantitySelector from './src/components/QuantitySelector';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ProductScreen from './src/screens/ProductScreen';
import ProductItem from './src/components/ProductItem';
import products from './src/data/products';
import HomeScreen from './src/screens/Homescreen';
import ShoppingCartScreen from './src/screens/Homescreen';

const app = () => {
    const isDarkmode = useColorScheme () == 'dark';

    const backgroundStyle = {
        backgroundColor : isDarkmode ? Colors.darker : Colors.lighter,
    };

    
    return(
        <SafeAreaView style ={backgroundStyle}>
            <StatusBar barstyle ={isDarkmode ? 'Light-content': 'dark-content'} />
            
            <ShoppingCartScreen />
        </SafeAreaView>
    );
};

export default app;