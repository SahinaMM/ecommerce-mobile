import React from 'react';
import {View, StyleSheet, FlatList, Image} from 'react-native';
import ProductItem from '../../components/ProductItem';

import products from '../../data/products';

const Homescreen = ()=> {
    return(
        <View style = {styles.page}>
            {/* Render product component */}
           
            <FlatList
            data={products}
           renderItem={({item}) => <ProductItem item ={item} />}
           S={false}
           />
    
            </View>
    );
    };
    const styles = StyleSheet.create({
        page: {
            padding:10,
        },
    });

export default Homescreen;